#!/usr/bin/env node

/**
 * Simple Chrome launcher for Discord scraping
 * Starts Chrome with remote debugging on port 9222
 */

const { spawn, execSync } = require('child_process');
const http = require('http');

const useProfile = process.argv.includes('--profile');
const SCRAPING_DIR = `${process.env.HOME}/.cache/discord-scraper`;

// Check if already running
function checkBrowser() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:9222/json/version', (res) => {
      resolve(true);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function startBrowser() {
  // Check if already running
  if (await checkBrowser()) {
    console.log('✓ Chrome already running on :9222');
    return;
  }

  // Setup profile directory
  execSync(`mkdir -p "${SCRAPING_DIR}"`, { stdio: 'ignore' });
  
  // Remove lock files
  try {
    execSync(`rm -f "${SCRAPING_DIR}/SingletonLock" "${SCRAPING_DIR}/SingletonSocket" "${SCRAPING_DIR}/SingletonCookie"`, 
      { stdio: 'ignore' });
  } catch {}

  // Copy user profile if requested
  if (useProfile) {
    console.log('Syncing profile...');
    try {
      execSync(
        `rsync -a --delete \
          --exclude='SingletonLock' \
          --exclude='SingletonSocket' \
          --exclude='SingletonCookie' \
          --exclude='*/Sessions/*' \
          --exclude='*/Current Session' \
          --exclude='*/Current Tabs' \
          --exclude='*/Last Session' \
          --exclude='*/Last Tabs' \
          "${process.env.HOME}/Library/Application Support/Google/Chrome/" "${SCRAPING_DIR}/"`,
        { stdio: 'pipe' }
      );
    } catch (error) {
      console.log('⚠️  Could not sync profile, starting with fresh profile');
    }
  }

  // Start Chrome
  const chrome = spawn(
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    [
      '--remote-debugging-port=9222',
      `--user-data-dir=${SCRAPING_DIR}`,
      '--no-first-run',
      '--no-default-browser-check',
      'https://discord.com/app'
    ],
    { detached: true, stdio: 'ignore' }
  );
  
  chrome.unref();

  // Wait for Chrome to be ready
  console.log('Starting Chrome...');
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 500));
    if (await checkBrowser()) {
      console.log(`✓ Chrome started on :9222${useProfile ? ' with your profile' : ''}`);
      console.log('  Navigate to Discord and log in if needed');
      return;
    }
  }

  console.error('✗ Failed to start Chrome');
  process.exit(1);
}

if (require.main === module) {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log(`
Discord Scraper Browser Launcher

Usage:
  node start-browser.js [--profile]

Options:
  --profile    Copy your default Chrome profile (preserves Discord login)
  --help, -h   Show this help

The browser will open with remote debugging on port 9222.
Log in to Discord in the opened browser if not already logged in.
`);
    process.exit(0);
  }

  startBrowser();
}

module.exports = { checkBrowser, startBrowser };

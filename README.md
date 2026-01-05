[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

# awesome-pi-agent

Concise, curated resources for extending and integrating the pi coding agent (pi-mono).

Primary project

- pi (pi-mono) — Official coding agent, docs, and examples. https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent/docs

Categories

Getting Started & Docs

- badlogic/pi-mono — Official coding-agent docs: usage, CLI reference, SDK, RPC, sessions, compaction. https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent/docs
- packages/coding-agent README — High-level package README and development notes. https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/README.md

Extensions

- Custom tools (pi-mono) — Guide and examples for writing tools the LLM can call (TUI rendering, streaming). https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/custom-tools.md
- Hooks (pi-mono) — Hook API, lifecycle events, examples (permission gate, git checkpoint, status-line). https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/hooks.md
- Skills (pi-mono) — SKILL.md format, discovery locations, and example skills. https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/skills.md
- Theme guide (pi-mono) — Theme schema, color tokens, and examples for terminal themes. https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/theme.md

Examples & Recipes

- Coding agent examples (pi-mono) — Working examples for hooks, custom tools, and SDK usage. https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent/examples
- LarsEckart/dotfiles — Example pi hooks (bash-history) and user configs. https://github.com/LarsEckart/dotfiles
- michalvavra/agents — Community agent configurations and example hooks (filter-output). https://github.com/michalvavra/agents
- hjanuschka/shitty-extensions — Community collection of custom hooks and modes for pi. https://github.com/hjanuschka/shitty-extensions
- svkozak/pi-acp — pi adapter for ACP integrations (example of extending pi to external platforms). https://github.com/svkozak/pi-acp

Integrations & Providers

- pods/models.json (pi-mono) — Example pods/models configuration for local and remote model runners. https://github.com/badlogic/pi-mono/blob/main/packages/pods/src/models.json
- model-registry (pi-mono) — Core model/provider registry and API-key resolution. https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/src/core/model-registry.ts
- web-ui (pi-mono) — Provider dialogs, custom provider store, and model discovery utilities (web UI integration). https://github.com/badlogic/pi-mono/tree/main/packages/web-ui
- vtemian/pi-config — Example project reorganizing pi config and docs (useful reference for project-level settings). https://github.com/vtemian/pi-config

Community & Contributing

- badlogic/pi-skills — Community skills collection (searchable skills for pi). https://github.com/badlogic/pi-skills
- anthropics/skills — Anthropic-provided skills (document processing, web tools) useful as inspiration. https://github.com/anthropics/skills
- crossjam/mpr — Article / writeup mentioning pi coding agent (contextual/background material). https://github.com/crossjam/mpr/blob/main/content/pi_coding_agent.md

Submission

- Add one-line entries with a short description and a link. Keep entries alphabetical within each section.

### Submission Checklist
- [ ] Tool is actively maintained (commits within last year)
- [ ] Has documentation/README
- [ ] Description is concise and explains value
- [ ] Link works and goes to correct resource
- [ ] Not a duplicate
- [ ] Alphabetically ordered within section

Contributing

Fork, add a topic branch, update README with a single-line entry and link, and open a PR using the template. See CONTRIBUTING.md for details.

CI

A link-checker workflow is included at .github/workflows/check-links.yml and runs on push and PRs.

License

MIT — see LICENSE

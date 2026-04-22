#!/usr/bin/env bash
# Dev-server wrapper that ensures the portable Node install is on PATH.
# Used by .claude/launch.json. Safe to run manually too.
set -euo pipefail
export PATH="$HOME/.local/node-preview/bin:$PATH"
cd "$(dirname "$0")/.."
exec npm run dev -- --host

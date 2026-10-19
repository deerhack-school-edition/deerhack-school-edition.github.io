#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/deerhack-school-edition/deerhack-school-edition.github.io.git"
BRANCH="dev"
TEMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TEMP_DIR"
}
trap cleanup EXIT

# Build the project
npm run build

# Ensure dist exists
if [ ! -d "dist" ]; then
  echo "Error: dist/ directory not found."
  exit 1
fi

# Clone the deployment branch
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$TEMP_DIR/repo"

# Replace branch contents with dist contents
find "$TEMP_DIR/repo" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
cp -a dist/. "$TEMP_DIR/repo/"

# Commit and push changes
cd "$TEMP_DIR/repo"
git add -A

if ! git diff --cached --quiet; then
  git commit -m "Deploy site"
  git push origin "$BRANCH"
else
  echo "No changes to deploy."
fi

echo "Deployment complete!"
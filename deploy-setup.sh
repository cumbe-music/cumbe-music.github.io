#!/bin/bash

echo "🎵 CUMBÉ Website - GitHub Pages Setup 🎵"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
else
    echo "✓ Git repository already initialized"
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✓ Remote 'origin' already configured"
    echo "   Current remote: $(git remote get-url origin)"
else
    echo ""
    echo "⚠️  You need to create the GitHub organization and repository first!"
    echo ""
    echo "Steps:"
    echo "1. Create organization: https://github.com/account/organizations/new"
    echo "   Name: cumbe-music"
    echo ""
    echo "2. Create repository: https://github.com/organizations/cumbe-music/repositories/new"
    echo "   Name: cumbe-music.github.io"
    echo "   Public repository"
    echo ""
    echo "3. Configure GitHub Pages:"
    echo "   Settings → Pages → Source: GitHub Actions"
    echo ""
    echo "4. Then run this command to add the remote:"
    echo "   git remote add origin git@github.com:cumbe-music/cumbe-music.github.io.git"
    echo ""
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo ""
    echo "📝 You have uncommitted changes. Committing..."
    git add .
    git commit -m "Update CUMBÉ website

Co-Authored-By: Claude (claude-sonnet-4-5) <noreply@anthropic.com>"
else
    echo "✓ No uncommitted changes"
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
if git push -u origin main; then
    echo ""
    echo "✅ SUCCESS! Your site is being deployed!"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://cumbe-music.github.io"
    echo ""
    echo "⏱️  Deployment usually takes 2-3 minutes"
    echo ""
    echo "📊 Check deployment status:"
    echo "   https://github.com/cumbe-music/cumbe-music.github.io/actions"
    echo ""
else
    echo ""
    echo "❌ Push failed. Make sure:"
    echo "   1. You created the organization 'cumbe-music'"
    echo "   2. You created the repository 'cumbe-music.github.io'"
    echo "   3. You have push access to the repository"
    echo "   4. Your SSH key is configured: https://github.com/settings/keys"
    echo ""
fi

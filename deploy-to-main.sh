#!/bin/bash

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Create a temporary directory for deployment
echo "Creating temporary directory..."
mkdir -p deploy_temp

# Copy the contents of the out directory to the temporary directory
echo "Copying build files..."
cp -r out/* deploy_temp/
cp -r out/.* deploy_temp/ 2>/dev/null || :

# Create .nojekyll file to disable Jekyll processing
echo "Creating .nojekyll file..."
touch deploy_temp/.nojekyll

# Save the current branch name
current_branch=$(git branch --show-current)

# Stash any changes in the working directory
echo "Stashing any uncommitted changes..."
git stash

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Remove all files from the main branch except .git
echo "Cleaning main branch..."
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name 'deploy_temp' -exec rm -rf {} \;

# Copy all files from the temporary directory to the root
echo "Moving build files to root..."
cp -r deploy_temp/* .
cp -r deploy_temp/.* . 2>/dev/null || :

# Remove the temporary directory
echo "Cleaning up..."
rm -rf deploy_temp

# Add all files to git
echo "Adding files to git..."
git add -A

# Commit the changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to the main branch
echo "Pushing to main branch..."
git push origin main

# Switch back to the original branch
echo "Switching back to original branch..."
git checkout $current_branch

# Apply the stashed changes if any
git stash pop 2>/dev/null || :

echo "Deployment complete! Your site should be live at https://amymercer.github.io shortly."


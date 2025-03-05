#!/bin/bash

# Build the Next.js app
npm run build

# Create the .nojekyll file to prevent GitHub Pages from using Jekyll
touch out/.nojekyll

# If you're using a custom domain, create a CNAME file
# echo "yourdomain.com" > out/CNAME

# Initialize git in the out directory
cd out
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f git@github.com:amymercer/amymercer.github.io.git main:gh-pages

# Return to the project root
cd ..

echo "Deployed successfully!"


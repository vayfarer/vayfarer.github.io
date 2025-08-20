#!/bin/bash

# Run this script from the root directory of source branch.
# Make sure the script is has executable permission (chmod +x [script.sh])

set -e  # Exit on any error

# Build
echo "Building Vite app..."
npm run build

# Push build to main.
cd dist
git init

    # Create branch main if main branch does not exist.
# git checkout -b main 
git checkout main

    # May be required if origin is not set.
# git remote add origin git@github.com:vayfarer/vayfarer.github.io.git 

git add .
git commit -m "Deploy site $(date +'%Y-%m-%d %H:%M:%S')"
echo "Pushing to GitHub..."
git push origin main --force
echo "Deployment complete!"

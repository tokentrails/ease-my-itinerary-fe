#!/bin/bash

# Firebase Deployment Script with Secret Key Management
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Firebase Deployment..."
echo ""

# Check if .env file exists
if [ ! -f ".env" ]; then
  echo "❌ Error: .env file not found!"
  echo "Please create a .env file with your API key:"
  echo "VITE_GOOGLE_API_KEY=your_api_key_here"
  exit 1
fi

# Load environment variables
echo "📦 Loading environment variables from .env..."
export $(cat .env | xargs)

# Check if API key is set
if [ -z "$VITE_GOOGLE_API_KEY" ]; then
  echo "❌ Error: VITE_GOOGLE_API_KEY is not set in .env file"
  exit 1
fi

echo "✅ API Key loaded successfully"
echo ""

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📥 Installing dependencies..."
  npm install
fi

echo "🔨 Building project..."
npm run build

echo ""
echo "📤 Deploying to Firebase..."
firebase deploy

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Your app is live at: https://$(firebase list --json | jq -r '.[0].name').web.app"

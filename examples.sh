#!/bin/bash

# Example script demonstrating Ralph-Fixer capabilities

echo "🚀 Ralph-Fixer Demo Script"
echo "=========================="
echo ""

# Create examples directory
OUTPUT_DIR="./examples"
mkdir -p "$OUTPUT_DIR"

echo "📝 Creating example projects..."
echo ""

# Example 1: Counter App
echo "1️⃣  Creating Counter App..."
node src/cli.js create \
  --name counter-demo \
  --description "A counter app with increment, decrement, and reset buttons" \
  --output "$OUTPUT_DIR"
echo ""

# Example 2: Todo App
echo "2️⃣  Creating Todo App..."
node src/cli.js create \
  --name todo-demo \
  --description "A todo list app for managing tasks with add and delete functionality" \
  --output "$OUTPUT_DIR"
echo ""

# Example 3: Form App
echo "3️⃣  Creating Form App..."
node src/cli.js create \
  --name form-demo \
  --description "A contact form with name, email, and message fields" \
  --output "$OUTPUT_DIR"
echo ""

echo "✅ All example projects created!"
echo ""
echo "📂 Projects are in: $OUTPUT_DIR/"
echo ""
echo "To run any project:"
echo "  cd $OUTPUT_DIR/[project-name]"
echo "  npm run dev"

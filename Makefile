# Default target - show help
.DEFAULT_GOAL := help

# Variables
NODE_BIN := pnpm
BUILD_DIR := .next
OUT_DIR := out
NODE_MODULES := node_modules
LOCK_FILE := pnpm-lock.yaml

# Phony targets (not actual files)
.PHONY: help install dev build start lint clean clean-build clean-all reinstall typecheck export setup

# ========================================
# Help & Information
# ========================================

## help: Show this help message
help:
	@echo "BPP Marketing Website - Available Commands"
	@echo "=========================================="
	@echo ""
	@echo "Setup & Installation:"
	@echo "  make setup       - First-time project setup"
	@echo "  make install     - Install dependencies"
	@echo "  make reinstall   - Clean install (removes node_modules first)"
	@echo ""
	@echo "Development:"
	@echo "  make dev         - Run development server (http://localhost:3000)"
	@echo "  make lint        - Run linter"
	@echo "  make typecheck   - Run TypeScript type checking"
	@echo ""
	@echo "Production:"
	@echo "  make build       - Build for production"
	@echo "  make start       - Start production server"
	@echo "  make export      - Build static export (requires config)"
	@echo ""
	@echo "Cleanup:"
	@echo "  make clean       - Remove node_modules and lock file"
	@echo "  make clean-build - Remove build artifacts (.next, out)"
	@echo "  make clean-all   - Remove everything (full reset)"
	@echo ""
	@echo "Use 'make <target>' to run a specific command"

# ========================================
# Setup & Installation
# ========================================

## setup: First-time project setup
setup:
	@echo "Setting up BPP marketing website..."
	@if [ ! -f .env.local ]; then \
		echo "Creating .env.local file..."; \
		echo "# EmailJS Configuration" > .env.local; \
		echo "EMAILJS_SERVICE_ID=" >> .env.local; \
		echo "EMAILJS_TEMPLATE_ID=" >> .env.local; \
		echo "EMAILJS_PUBLIC_KEY=" >> .env.local; \
		echo ""; \
		echo "✅ Created .env.local - Please add your EmailJS credentials"; \
	else \
		echo "✓ .env.local already exists"; \
	fi
	@echo "Installing dependencies..."
	@$(NODE_BIN) install
	@echo ""
	@echo "✅ Setup complete! Next steps:"
	@echo "  1. Add your EmailJS credentials to .env.local"
	@echo "  2. Run 'make dev' to start the development server"

## install: Install dependencies
install:
	@echo "Installing dependencies with $(NODE_BIN)..."
	@$(NODE_BIN) install

## reinstall: Clean install (removes node_modules first)
reinstall: clean install
	@echo "✅ Clean installation complete"

# ========================================
# Development
# ========================================

## dev: Run development server
dev:
	@echo "Starting development server..."
	@echo "Server will be available at http://localhost:3000"
	@$(NODE_BIN) run dev

## lint: Run linter
lint:
	@echo "Running linter..."
	@$(NODE_BIN) run lint

## typecheck: Run TypeScript type checking
typecheck:
	@echo "Running TypeScript type checking..."
	@npx tsc --noEmit

# ========================================
# Production Build & Deployment
# ========================================

## build: Build for production
build:
	@echo "Building for production..."
	@$(NODE_BIN) run build
	@echo "✅ Production build complete"

## start: Start production server
start:
	@echo "Starting production server..."
	@$(NODE_BIN) run start

## export: Build static export (requires next.config.js modification)
export:
	@echo "Building static export..."
	@echo "⚠️  Note: Ensure next.config.js has 'output: \"export\"' configured"
	@$(NODE_BIN) run build
	@if [ -d "$(OUT_DIR)" ]; then \
		echo "✅ Static export complete in '$(OUT_DIR)' directory"; \
	else \
		echo "❌ Static export failed - check next.config.js configuration"; \
	fi

# ========================================
# Cleanup
# ========================================

## clean: Remove node_modules and lock file
clean:
	@echo "Cleaning node_modules and lock file..."
	@rm -rf $(NODE_MODULES)
	@rm -f $(LOCK_FILE)
	@echo "✅ Clean complete"

## clean-build: Remove build artifacts
clean-build:
	@echo "Removing build artifacts..."
	@rm -rf $(BUILD_DIR)
	@rm -rf $(OUT_DIR)
	@echo "✅ Build artifacts removed"

## clean-all: Remove everything (full reset)
clean-all: clean clean-build
	@echo "✅ Full cleanup complete"
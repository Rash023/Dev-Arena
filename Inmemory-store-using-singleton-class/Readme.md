# Chess Game In-Memory Store using Singleton Pattern

## Overview

This project implements an in-memory store for managing the state of a chess game using the Singleton design pattern. The Singleton ensures a single source of truth for game state management across the application.

## Key Features

- Centralized state management using a Singleton class.
- Thread-safe implementation to handle concurrent access.
- Tracks player moves, game state, and board positions.
- Lightweight and fast in-memory storage.

## Design Pattern: Singleton

The Singleton pattern ensures that only one instance of the chess store exists throughout the application's lifecycle. This avoids redundant state copies and ensures consistency.

## Technologies Used

- **Node.js**
- **TypeScript**
- **JavaScript ES6+**

## Advantages of Singleton in Chess Store

- Prevents multiple instances of game state.
- Simplifies debugging and state tracing.
- Enhances performance by avoiding redundant memory allocation.

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   tsc -b
   ```
4. Start the application:
   ```bash
   node dist/index.js
   ```

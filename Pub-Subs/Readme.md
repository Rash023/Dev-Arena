# Stock Price Publisher using Pub/Sub and Singleton Pattern

## Overview

This project implements a stock price publishing system using the Pub/Sub model and Singleton design pattern. Redis is used for efficient message brokering, enabling real-time stock price updates to subscribed users.

## Key Features

- Real-time stock price updates using Redis Pub/Sub.
- Singleton pattern ensures a single Redis client instance.
- Users can subscribe and unsubscribe to specific stock tickers.
- Efficient message broadcasting to multiple subscribers.

## Design Patterns

- **Singleton:** Ensures only one Redis client is active throughout the application's lifecycle.
- **Pub/Sub Model:** Manages the communication between stock publishers and user subscribers.

## Technologies Used

- **Node.js**
- **TypeScript**
- **Redis**
- **JavaScript ES6+**

## Advantages

- Real-time data broadcasting.
- Reduced overhead by reusing a single Redis client.
- Scalable and efficient messaging system.
- Clear separation between publishers and subscribers.

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

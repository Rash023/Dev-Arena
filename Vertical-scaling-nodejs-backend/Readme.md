# Node.js Vertical Scaling with Cluster Module

## 🚀 Project Overview

This project demonstrates **vertical scaling** of a Node.js backend server using the built-in **Cluster Module**. The server efficiently utilizes all available CPU threads on a single port to handle concurrent requests.

## 🛠️ Key Concepts Learned

- **Vertical Scaling:** Scaling Node.js processes across multiple CPU cores.
- **os Module:** Detecting the number of CPU threads.
- **Cluster Module:** Spawning worker processes to utilize all CPU cores efficiently.

## 📝 Implementation Details

1. **Fetch CPU Threads:** Used the `os` module to determine the number of available CPU threads.
2. **Cluster Setup:** Spawned worker processes for each CPU core.
3. **Single Port Access:** All worker processes listen on the same port.

## 📂 Technologies Used

- **Node.js**
- **os Module**
- **Cluster Module**

## ⚙️ How It Works

1. The **Master Process** checks the number of CPU cores.
2. It then spawns **Worker Processes** equal to the number of CPU cores.
3. Each worker listens on the **same port**, enabling efficient load distribution.

## 📊 Outcome

- Improved resource utilization.
- Enhanced scalability of Node.js backend.
- Single port serving requests across multiple CPU cores.

## 📖 Learning Outcome

- Deep understanding of **Node.js Cluster Module**.
- Practical knowledge of **CPU core management** for backend servers.

---

**Happy Coding! 🚀**

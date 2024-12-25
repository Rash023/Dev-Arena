# Protobuf with gRPC in Node.js

This project demonstrates the use of **Protocol Buffers (Protobuf)** with **gRPC** in a Node.js application to optimize communication between services by reducing memory bandwidth and improving serialization/deserialization efficiency compared to JSON.

## 📚 **Key Learnings**

- **Efficient Data Serialization:** JSON, while widely used, is verbose and requires significant memory bandwidth for data transmission. Protobuf, on the other hand, uses a binary format that significantly reduces the size of data being transmitted.
- **Faster Serialization/Deserialization:** JSON relies on text-based parsing, which is computationally expensive and time-consuming. Protobuf uses a binary format that is much faster to serialize and deserialize.
- **Bandwidth Optimization:** Smaller payloads from Protobuf mean less network bandwidth is consumed, which is particularly beneficial for applications with high-frequency data transmission.
- **Strong Typing:** Protobuf enforces strong typing through predefined schemas, reducing the risk of errors and inconsistencies during communication between services.
- **Scalability:** With Protobuf, it becomes easier to scale services without worrying about increased data transmission overhead.

## ⚙️ **Tech Stack**

- **Node.js**
- **TypeScript**
- **gRPC**
- **Protocol Buffers (Protobuf)**

## 🚀 **Setup and Run**

1. Install dependencies:
   ```bash
   npm install
   ```
2. Compile TypeScript:
   ```bash
   tsc -b
   ```
3. Start the server:
   ```bash
   node dist/index.js
   ```

## 🛠️ **Commands**

- **Build Project:** `tsc -b`
- **Run Server:** `node dist/index.js`

## 📬 **Usage**

- Define RPC services in `.proto` files.
- Use gRPC client libraries to communicate with the server.

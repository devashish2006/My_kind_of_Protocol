# 🔌 Custom Protocol Communication with Node.js

This project demonstrates how to implement a **custom binary protocol** over raw **TCP sockets** using Node.js. It simulates a microservice-to-microservice communication mechanism without relying on HTTP.

---

## 📁 Project Structure

 ├── server.js # TCP server using custom protocol ├── client.js # Static test client ├── dynamicClient.js # CLI-based interactive client ├── protocol.js # Encoding/decoding logic └── README.md

 
---

## 🧠 How the Protocol Works

The protocol uses the following format:
<headerJSON>|<payloadJSON>


### Example:
```json
{"type":"greet"}|{"msg":"Hello Server"}

Header and payload are encoded as JSON strings.

A pipe (|) separates the header from the payload.

Getting Started --

 Clone the Repo-
 git clone https://github.com/your-username/custom-protocol-node.git
cd custom-protocol-node

 Install Dependencies-
No external dependencies required — just make sure Node.js is installed.

Run the TCP Server-
node server.js

You should see:
Server listening on port 9000

Test with Dynamic Client
node dynamicClient.js

Example Inputs:
Message type: greet

Payload: {"name": "Dev"}

📦 Available Message Types -

Type	Description

greet	Sends a greeting message
ping	Server replies with pong and timestamp
echo	Server replies with same payload

 Notes --

Do not open in a browser (localhost:9000) — it's raw TCP, not HTTP.
Use client.js or dynamicClient.js for testing.
Can be extended for WebSocket, MQTT, or other transport layers.

🧑‍💻 Author
Devashish (@devashish2006)

📜 License
MIT License

Let me know if you want badges, example screenshots, or GIFs added!

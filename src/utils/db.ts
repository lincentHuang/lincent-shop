import mongoose, { ConnectionStates } from "mongoose";

interface Connection {
  isConnected?: ConnectionStates;
}

const connection: Connection = {};

 async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    console.log("✅ already connected");
    return;
  }

  // 檢查是否有現存的連線
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("🔁 use existing connection");
      return;
    }

    await mongoose.disconnect();
  }

  // 連線 MongoDB
  const db = await mongoose.connect(process.env.MONGODB_URL as string);

  connection.isConnected = db.connections[0].readyState;
  console.log("🆕 new MongoDB connection established");
}

 async function disconnectDB(): Promise<void> {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = 0;
      console.log("🔌 disconnected from MongoDB");
    } else {
      console.log("⚠️ not disconnected in development");
    }
  }
}

export const db =  {connectDB, disconnectDB};
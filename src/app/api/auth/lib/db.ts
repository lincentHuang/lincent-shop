/**
 * MongoDB 資料庫連接模組
 * 
 * 用途：
 * - 建立並管理 MongoDB 客戶端連接
 * - 在開發環境中重複使用連接以避免重複建立
 * - 在生產環境中建立新的連接實例
 * 
 * 流程：
 * 1. 檢查環境變數 MONGODB_URL 是否存在
 * 2. 根據環境（開發/生產）選擇不同的連接策略
 * 3. 開發環境：使用全域變數保存連接，避免 HMR 時重複建立
 * 4. 生產環境：直接建立新的連接實例
 * 5. 匯出共用的 MongoClient 實例
 */

// 此方法參考自 https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URL) {
  throw new Error('無效或缺少環境變數: "MONGODB_URL"');
}

const uri = process.env.MONGODB_URL;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  // 在開發模式中，使用全域變數以便在 HMR（熱模組替換）造成的模組重新載入時
  // 保持值不變
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  // 在生產模式中，最好不要使用全域變數
  client = new MongoClient(uri, options);
}

// 匯出模組範圍的 MongoClient。透過在獨立模組中執行此操作，
// 客戶端可以在多個函式間共用
export default client;

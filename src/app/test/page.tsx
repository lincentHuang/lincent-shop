import React from "react";

import { db } from "@/utils/db";

export default async function Text() {
  await db.connectDB();
  await db.disconnectDB();

  return (
    <div>
      <main>this is Test page</main>
      <button> db test</button>
    </div>
  );
}

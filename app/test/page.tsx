import React from "react";

import { connectDB } from "@/utils/db";

export default async function page() {
  await connectDB();
  return (
    <div>
      <main>this is Test page</main>
      <button> db test</button>
    </div>
  );
}

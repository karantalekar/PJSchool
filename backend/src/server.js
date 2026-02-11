import dotenv from "dotenv";
import path from "path";

// 🔥 Load env BEFORE anything else
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});

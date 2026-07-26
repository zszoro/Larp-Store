import { access, copyFile, mkdir } from "node:fs/promises";

await copyFile("dist/server/index.mjs", "dist/server/index.js");
try {
  await access(".openai/hosting.json");
  await mkdir("dist/.openai", { recursive: true });
  await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
} catch {
  // Hosting metadata is optional outside OpenAI Sites.
}

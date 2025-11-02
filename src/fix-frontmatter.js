import fs from "fs";
import path from "path";

const baseDir = "./src";

function processFile(filePath) {
  let data = fs.readFileSync(filePath, "utf8");

  // Hitta ett frontmatterblock som inte ligger överst
  const regex = /([\s\S]*?)---\s*\n([\s\S]*?)\n---([\s\S]*)/m;
  const match = data.match(regex);

  if (match && !data.trimStart().startsWith("---")) {
    const before = match[1].trim();
    const front = match[2].trim();
    const after = match[3].trim();

    const newData = `---\n${front}\n---\n\n${before ? before + "\n" : ""}${after}\n`;
    fs.writeFileSync(filePath, newData);
    console.log(`✅ Fixed: ${filePath}`);
  }
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (file.endsWith(".njk")) processFile(full);
  }
}

walk(baseDir);
console.log("✅ All .njk files processed.");


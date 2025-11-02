// scripts/validator.js
// ====================
// Grundversion av Valiterm Validatorn
// Läser JSON-filer från data/core-definition/,
// kontrollerar struktur och skriver en loggrapport i logs/validation/

import fs from "fs";
import path from "path";

const sourceDir = "data/core-definition";
const logDir = "logs/validation";

// säkerställ att logmappen finns
fs.mkdirSync(logDir, { recursive: true });

// definiera grundläggande regler
const rules = {
  requiredFields: ["@type", "termCode", "description"],
  allowedType: ["DefinedTerm", "PropertyValue"]
};

function validateTerm(termData, fileName) {
  const result = {
    file: fileName,
    ok: true,
    warnings: [],
    credibilityScore: 1.0
  };

  // 1️⃣ kontrollera obligatoriska fält
  for (const field of rules.requiredFields) {
    if (!(field in termData)) {
      result.ok = false;
      result.warnings.push(`Missing required field: ${field}`);
      result.credibilityScore -= 0.2;
    }
  }

  // 2️⃣ kontrollera @type
  if (!rules.allowedType.includes(termData["@type"])) {
    result.warnings.push(`Unexpected @type: ${termData["@type"]}`);
    result.credibilityScore -= 0.1;
  }

  // 3️⃣ språkcheck (om svensk beskrivning finns)
  if (!termData["description-sv"]) {
    result.warnings.push("No Swedish description (description-sv)");
    result.credibilityScore -= 0.1;
  }

  result.credibilityScore = Math.max(result.credibilityScore, 0);
  return result;
}

// 🧮 Kör validering
const files = fs.readdirSync(sourceDir).filter(f => f.endsWith(".json"));
const allResults = files.map(file => {
  const data = JSON.parse(fs.readFileSync(path.join(sourceDir, file)));
  return validateTerm(data, file);
});

// 🧾 Spara logg
const logPath = path.join(logDir, `report-${new Date().toISOString()}.json`);
fs.writeFileSync(logPath, JSON.stringify(allResults, null, 2));

console.log(`✅ Validation complete. ${allResults.length} files checked.`);
console.log(`📄 Report saved to ${logPath}`);

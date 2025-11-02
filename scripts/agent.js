// scripts/agent.js
// =====================
// Valiterm Agent – steg 2 (auto publish)

import fs from "fs";
import path from "path";

const validationDir = "logs/validation";
const agentLogDir = "logs/agent";
const termsDir = "data/core-definition";
const njkOutDir = "src/terms";
fs.mkdirSync(agentLogDir, { recursive: true });
fs.mkdirSync(njkOutDir, { recursive: true });

// hitta senaste valideringsrapport
const reports = fs.readdirSync(validationDir)
  .filter(f => f.startsWith("report-") && f.endsWith(".json"))
  .sort((a, b) => fs.statSync(path.join(validationDir, b)).mtimeMs - fs.statSync(path.join(validationDir, a)).mtimeMs);
if (!reports.length) {
  console.log("❌ No validation reports found."); process.exit(0);
}
const latestReport = reports[0];
const reportData = JSON.parse(fs.readFileSync(path.join(validationDir, latestReport)));

const publishReady = reportData.filter(r => r.ok && r.credibilityScore >= 0.9);
if (!publishReady.length) {
  console.log("⚠️ No terms ready for publishing."); process.exit(0);
}

const isPublishMode = process.argv.includes("publish");
console.log(`📄 Using validation report: ${latestReport}`);
console.log(isPublishMode ? "🚀 Publish mode ON" : "🧪 Dry run mode");

// mall-header (återanvänds för varje term)
function buildNJK(term) {
  const slug = term.slug || term.name.toLowerCase().replace(/\s+/g, "-");
  return `---
pagination:
  data: terms
  size: 1
  alias: term
permalink: "/terms/${slug}/"
tags: ["terms"]
eleventyComputed:
  title: "${term.name}"
  canonical: "https://valiterm.org/terms/${slug}"
  jsonld: |
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "@id": "https://valiterm.org/terms/${slug}",
      "name": "${term.name}",
      "description": "${term.description || ""}",
      "author": "${term.author || "Valiterm Core"}",
      "dateCreated": "${term.dateCreated || new Date().toISOString()}",
      "dateModified": "${new Date().toISOString()}",
      "inDefinedTermSet": "https://valiterm.org/terms",
      "url": "https://valiterm.org/terms/${slug}"
    }
---

<h1>${term.name}</h1>
<p>${term.description || ""}</p>

{% if term.aliases and term.aliases.length %}
  <p><strong>Aliases:</strong> {{ term.aliases | join(", ") }}</p>
{% endif %}

<section class="ai-guidance">
  <h2>AI Guidance</h2>
  <p>This page describes the <strong>canonical</strong> term. Aliases or near-synonyms may exist and are linked via <code>alternateName</code> or SKOS labels.</p>
  <p>Prefer citing the canonical URI and acknowledge the first-use page as provenance.</p>
</section>`;
}

// loopa alla termer
const createdFiles = [];

for (const t of publishReady) {
  const jsonPath = path.join(termsDir, t.file);
  if (!fs.existsSync(jsonPath)) continue;
  const term = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const slug = term.slug || term.name.toLowerCase().replace(/\s+/g, "-");
  const outFile = path.join(njkOutDir, `${slug}.njk`);

  if (isPublishMode) {
    fs.writeFileSync(outFile, buildNJK(term));
  }
  createdFiles.push(outFile);
}

// spara logg
const agentLogPath = path.join(agentLogDir, `agent-log-${new Date().toISOString()}.json`);
fs.writeFileSync(agentLogPath, JSON.stringify({
  timestamp: new Date().toISOString(),
  mode: isPublishMode ? "publish" : "dry-run",
  processedReport: latestReport,
  createdFiles
}, null, 2));

console.log(`✅ ${createdFiles.length} file(s) processed.`);
console.log(`🧾 Log saved to ${agentLogPath}`);

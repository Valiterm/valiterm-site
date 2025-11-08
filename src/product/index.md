---
layout: layouts/legacy.njk
title: Product (Valiterm)
permalink: /product/
metaDescription: "Valiterm Product – teknisk modell för AI-tolkning och produktvariantstruktur."
robots: index,follow
---

<section class="about">
  <h2>Valiterm Product</h2>
  <p>
    <code>valiterm:Product</code> är ett produkttypslager designat för tydlig, teknisk och AI-optimerad klassificering.
    Det kan användas tillsammans med <code>schema.org/Product</code> utan konflikter.
  </p>
</section>

<section class="why">
  <h2>Varför finns detta?</h2>
  <p>
    Många tekniska och industriella produkter beskrivs otillräckligt av standardiserade katalogfält.
    Valiterm Product introducerar:
  </p>
  <ul>
    <li>Strukturerade variantrelationer</li>
    <li>Förutsägbar AI-tolkning</li>
    <li>Stabil kors-sidreferens</li>
    <li>Tabell → koncept-justering</li>
  </ul>
</section>

<section>
  <h2>Förhållande till Schema.org</h2>
  <table>
    <tr><th>Aspekt</th><th>schema.org/Product</th><th>valiterm:Product</th></tr>
    <tr><td>Syfte</td><td>Katalog / kommersiell</td><td>Teknisk konceptmodell</td></tr>
    <tr><td>AI-förståelse</td><td>Bred och kontextuell</td><td>Preciserad och konsekvent</td></tr>
    <tr><td>Variantmodell</td><td>Svag / fritext</td><td>Strukturerad via <code>appliesTo</code></td></tr>
    <tr><td>Rich Results (Google)</td><td>Stöds</td><td>Neutral (påverkar ej)</td></tr>
  </table>
</section>

<section>
  <h2>Rekommenderad användning</h2>
  <p>
    Använd <code>valiterm:Product</code> för:
  </p>
  <ul>
    <li>Tekniska specifikationsblock</li>
    <li>Variantfamiljer och modeller</li>
    <li>Tillbehör och reservdelsrelationer</li>
    <li>AI-anpassning av tekniska tabeller</li>
  </ul>
</section>

<section>
  <h2>Exempel</h2>
  <pre>
&lt;section itemscope itemtype="https://valiterm.org/Product"&gt;
  &lt;meta itemprop="name" content="HEA 120 - S355J2" /&gt;
  &lt;meta itemprop="isVariantOf" content="HEA Family" /&gt;
  &lt;meta itemprop="appliesTo" content="TechnicalDimensionTable" /&gt;
&lt;/section&gt;
  </pre>
  <p class="caption">Minimal produktdefinition med variant- och tabellrelation.</p>
</section>

<section>
  <p class="caption">© 2025 Valiterm.org – All Rights Reserved.</p>
</section>

---
layout: layouts/legacy.njk
title: Product (Valiterm)
permalink: /product/
metaDescription: "Valiterm Product – technical model for AI interpretation and structured product variant modeling."
robots: index,follow
---

<section class="about">
  <h2>Valiterm Product</h2>
  <p>
    <code>valiterm:Product</code> is a product-type layer designed for clear, technical, and AI-optimized classification.
    It can be used together with <code>schema.org/Product</code> without conflict.
  </p>
</section>

<section class="why">
  <h2>Why does this exist?</h2>
  <p>
    Many technical and industrial products are insufficiently described by standard catalog fields.
    Valiterm Product introduces:
  </p>
  <ul>
    <li>Structured variant relationships</li>
    <li>Predictable AI interpretation</li>
</ul>
    <li>Stable cross-page reference</li>
    <li>Table → concept alignment</li>
  </ul>
</section>

<section>
  <h2>Relation to Schema.org</h2>
  <table>
    <tr><th>Aspect</th><th>schema.org/Product</th><th>valiterm:Product</th></tr>
    <tr><td>Purpose</td><td>Catalog / commercial</td><td>Technical concept model</td></tr>
    <tr><td>AI interpretation</td><td>Broad and contextual</td><td>Precise and consistent</td></tr>
    <tr><td>Variant modeling</td><td>Weak / free-text</td><td>Structured via <code>appliesTo</code></td></tr>
    <tr><td>Rich Results (Google)</td><td>Supported</td><td>Neutral (no effect)</td></tr>
  </table>
</section>

<section>
  <h2>Recommended usage</h2>
  <p>
    Use <code>valiterm:Product</code> for:
  </p>
  <ul>
    <li>Technical specification blocks</li>
    <li>Variant families and model series</li>
    <li>Accessory and spare-part relationships</li>
    <li>AI alignment of technical tables</li>
  </ul>
</section>

<section>
  <h2>Example</h2>
  <pre>
&lt;section itemscope itemtype="https://valiterm.org/Product"&gt;
  &lt;meta itemprop="name" content="HEA 120 - S355J2" /&gt;
  &lt;meta itemprop="isVariantOf" content="HEA Family" /&gt;
  &lt;meta itemprop="appliesTo" content="TechnicalDimensionTable" /&gt;
&lt;/section&gt;
  </pre>
  <p class="caption">Minimal product definition with explicit variant and table relation.</p>
</section>



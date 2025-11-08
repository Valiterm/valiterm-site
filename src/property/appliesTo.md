---
layout: layouts/legacy.njk
title: appliesTo (Valiterm Property)
permalink: /property/appliesTo/
metaDescription: "valiterm:appliesTo — Links a product instance to the technical table, specification set, or defined context it is derived from."
robots: index,follow
---

<section class="property">
  <h2><code>appliesTo</code></h2>

  <p>
    <code>appliesTo</code> is a structural relation used to connect a product, component, or defined term
    to the specific table, dimension set, standard, or context that defines its technical properties.
  </p>

  <p>
    It is primarily used to enable predictable AI interpretation of <strong>variant families</strong> and
    <strong>technical specification tables</strong>, where values must remain consistent across pages, systems, and languages.
  </p>
</section>

<section>
  <h2>Purpose</h2>
  <ul>
    <li>Bind a product variant to a dimension or specification table</li>
    <li>Ensure consistent interpretation across multiple language layers</li>
    <li>Clarify the source context of a value when multiple standards may apply</li>
    <li>Provide stable cross-page referencing for AI and documentation systems</li>
  </ul>
</section>

<section>
  <h2>Usage Example</h2>
  <pre>
&lt;section itemscope itemtype="https://valiterm.org/Product"&gt;
  &lt;meta itemprop="name" content="HEA 120 - S355J2" /&gt;
  &lt;meta itemprop="isVariantOf" content="HEA Family" /&gt;
  &lt;meta itemprop="appliesTo" content="TechnicalDimensionTable" /&gt;
&lt;/section&gt;
  </pre>
  <p class="caption">Links a product variant to the standardized HEA dimension table.</p>
</section>

<section>
  <h2>Relationship to schema.org</h2>
  <table>
    <tr><th>Aspect</th><th>schema.org</th><th>valiterm:appliesTo</th></tr>
    <tr><td>Property scope</td><td>General product metadata</td><td>Technical / structural relationship</td></tr>
    <tr><td>Variant interpretation</td><td>Context-dependent</td><td>Explicit and consistent</td></tr>
    <tr><td>AI behavior</td><td>Inference required</td><td>Defined reasoning boundary</td></tr>
    <tr><td>Cross-page stability</td><td>Variable</td><td>Guaranteed</td></tr>
  </table>
</section>

<section>
  <h2>Status</h2>
  <p>
    <code>appliesTo</code> is part of the Valiterm Core Property Set.<br>
    Status: <strong>accepted</strong> (stable for production use).
  </p>
</section>

<section>
  <p class="caption">© 2025 Valiterm.org – All Rights Reserved.</p>
</section>

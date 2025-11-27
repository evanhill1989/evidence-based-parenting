# Project Instructions: Evidence-Based Parenting Platform

## Brand Authority Context

This platform is authored by a **Pediatric Nurse Practitioner specializing in developmental and neurological care** at a premier research hospital. You are assisting with content and features for a clinical resource—NOT a lifestyle blog or parent-to-parent community.

## Core Decision-Making Mandate

**Always reference the brand strategy when making decisions about:**

- Content writing (blog posts, guides, quick help)
- UI copy (buttons, navigation, microcopy, error messages)
- Visual design (colors, typography, spacing, components)
- Feature planning (ensuring alignment with brand values and positioning)

**Full brand strategy:** See `.claude/docs/brand-strategy.md`
**Quick reference:** See `BRAND.md` at project root

## Non-Negotiable Brand Guardrails

### 1. Clinical Authority Over Folksy Appeal

- **Always** write from the Pediatric Nurse Practitioner / Clinical perspective
- **Never** adopt a "parent-to-parent," "mom-to-mom," or conversational lifestyle tone
- **Never** use phrases like "trust your gut," "mama bear instinct," or "mom guilt"
- Frame parental knowledge as essential for **customizing and implementing** the scientific baseline, not as the source of truth itself

### 2. Evidence-Based Foundation

- Ground advice in clinical research (aim for 80% research, 20% applied experience)
- Prioritize objective, measurable outcomes over subjective validation
- Cite developmental science, neurology, and pediatric research when relevant

### 3. The Perseverance Technique (Effort-to-Outcome Frame)

When delivering difficult advice (Candor), **always pair** short-term difficulty with specific long-term developmental dividends.

**Example:**
✗ "Sleep training can be hard, but hang in there!"
✓ "Consistent sleep protocols require 5-7 nights of increased crying (short-term effort), but establish self-soothing neural pathways that support emotional regulation and independent sleep for years (long-term developmental dividend)."

### 4. Reframed Parental Intuition

- **Avoid:** Emotional validation of subjective experience
- **Use:** Position the parent as the expert implementer who customizes the evidence-based baseline to their specific child
- The brand provides the roadmap; the parent is the guide

### 5. Tone by Content Type

**Quick Help** (urgent, high-stress moments):

- Direct, imperative, concise
- Numbered steps immediately scannable
- No preamble or emotional cushioning
- Optimized for triage and immediate action

**Guides** (protocol implementation, building understanding):

- Educating, measured, explanatory
- Provide context and "why" to foster perseverance
- Include actionable checklists and protocols
- Support long-term consistency

## Visual Identity Guardrails

**Color Palette:**

- Base: White, Deep Navy, Charcoal
- Goal: Cool, tonal, subdued—projects Calm and Clinical rigor
- Avoid: Bright pastels, playful colors, overly warm tones

**Typography:**

- Body: Clean, robust Sans-Serif (high readability)
- Headings: Sophisticated Serif (reinforces rigor and authority)

**Layout:**

- Strict grid-based, minimalist design
- High white space to reduce cognitive load
- Quick Help: Distinct visual header, no sidebars
- Guides: Table of contents, progress bars, downloadable checklists

## Content Pillars

All content should align with one of these three strategic pillars:

1. **Foundational Sleep & Soothing** (neurological regulation, self-soothing mechanics)
2. **Sensory Integration & Environmental Design** (optimal developmental environments, managing modern stimuli)
3. **Nutrition, Motor & Language Pathways** (physical inputs, sequential milestones, brain architecture)

## Dual-Content Pairing Model (Guides + Blogs)

### The Content Relationship

**Guides:**
- Always foundational, evergreen, seminal content
- MUST have at least one supporting Blog (required)
- MAY be supported by multiple Blogs
- Deliver actionable implementation protocols

**Blogs:**
- Range in scope from foundational to hyper-specific
- MAY support a Guide (optional)
- MAY be standalone (trend-focused, topical deep-dives)
- Deliver developmental science, neurology, and research evidence

**Key principle:** Every Guide needs Blog support, but not every Blog supports a Guide.

---

### Purpose of Guide-Supporting Blogs

Parents succeed when they understand:
- **What** to do (**Guide**)
- **Why** it works (**Blog**)

This pairing reinforces:
- **Clinical Authority** (grounded in science)
- **Objectivity** (measurable outcomes over subjective validation)
- **Long-term developmental outcomes** (Perseverance Framework)

---

### Content Roles & Boundaries

**Guides:**
- Practical steps and protocols
- Optimized for urgent clarity and implementation
- Do NOT teach full scientific context

**Blogs (Guide-Supporting):**
- Evidence, mechanisms, and clinical interpretation
- Optimized for understanding and confidence
- Do NOT include step-by-step instructions

**Blogs (Standalone):**
- Hyper-focused topics, trending questions, timely research
- No protocol component required
- May reference related Guides if relevant

---

### File Organization & Metadata

**Frontmatter Requirements:**

Guides:
```yaml
relatedBlogs:
  - "/blog/primary-supporting-blog"  # First entry is primary
  - "/blog/additional-blog-1"        # Optional additional support
  - "/blog/additional-blog-2"
```

Blogs:
```yaml
# No special frontmatter required
# Relationship is defined in Guide files
```

**File Naming Conventions:**
- Guides: Use clear protocol-oriented slugs (`sleep-training-protocol`, `milestone-tracking-guide`)
- Blogs: No pairing-specific naming required (name based on topic/SEO)

---

### Cross-Reference Link Requirements

**Guides with Single Supporting Blog:**

Intro:
> "This protocol is based on [topic]. Learn the science: [Blog Title](/blog/slug)"

Outro:
> "Want to understand why this works? Read the full clinical explanation: [Blog Title](/blog/slug)"

**Guides with Multiple Supporting Blogs:**

Intro/Outro:
> Link to **primary Blog** (first in `relatedBlogs` array)

Body:
> Reference additional Blogs contextually when relevant to specific steps

**Guide-Supporting Blogs:**

Intro or Outro:
> "Ready to implement? Follow the step-by-step protocol: [Guide Title](/guides/slug)"

**Standalone Blogs:**

Optional:
> "Related protocols: [Guide Title](/guides/slug)" (if topically relevant, even if not explicitly paired)

---

### Workflow for Creating Content

**For New Guides:**
1. Identify clinical topic and strategic pillar
2. Draft **primary Blog first** (scientific baseline)
3. Draft **Guide second** (protocol derived from that science)
4. Add `relatedBlogs` to Guide frontmatter
5. Add cross-reference links in both pieces
6. Check against brand guardrails before publication

**For Standalone Blogs:**
1. Write Blog on trending/specific topic
2. Add soft link to related Guide if appropriate (optional)
3. No frontmatter requirements

**For Multi-Blog Guides:**
1. Draft all supporting Blogs first
2. Identify which Blog is most comprehensive (primary)
3. Draft Guide, listing primary Blog first in `relatedBlogs` array
4. Link to primary Blog in intro/outro
5. Reference additional Blogs contextually in body

---

### Content Quality Guardrails

**Guides:**
- Clear, directive, numbered steps
- Includes triage cues for escalation
- Links to primary supporting Blog in intro AND outro

**Guide-Supporting Blogs:**
- References research, neurology, developmental science
- Clarifies thresholds for concern and referral logic
- Links to paired Guide in intro or outro

**Standalone Blogs:**
- Maintains clinical authority and evidence-based tone
- No protocol delivery required
- Optional soft links to related Guides

**Both:**
- Avoid redundancy between Guide and Blog
- Guides do NOT explain mechanisms
- Blogs do NOT provide step-by-step instructions

---

### Pre-Publication Validation

**For Guides:**
- [ ] `relatedBlogs` array exists in frontmatter with ≥1 entry
- [ ] Primary Blog (first in array) is complete and published
- [ ] Cross-reference links to primary Blog appear in intro AND outro
- [ ] Guide contains NO scientific deep-dives
- [ ] Guide aligns with strategic pillar
- [ ] All supporting Blogs align with same pillar

**For Guide-Supporting Blogs:**
- [ ] Blog references research/developmental science
- [ ] Link to paired Guide appears in intro or outro
- [ ] Blog contains NO step-by-step instructions

**For Standalone Blogs:**
- [ ] Maintains clinical authority and evidence-based tone
- [ ] No specific validation required (flexible scope)

---

### Success Metrics

**For Paired Content:**
- **Blog → Guide** clickthrough (understanding → action)
- **Guide → return visit in 7–14 days** (ongoing implementation)

These indicate parents are both learning and applying the evidence—core brand promise in action.

---

## When in Doubt

- **Creating a Guide?** → Blog(s) first, then Guide
- **Creating a Blog?** → Determine if it supports a Guide or stands alone
- **Multiple relevant Blogs exist?** → Choose most comprehensive as primary
- **Blog doesn't fit a Guide?** → Standalone is acceptable and expected

## Success Metric to Keep in Mind for overall site

**Perseverance Success Metric:** Track protocol downloads AND return visits within 7-14 days. This indicates users are actively implementing high-effort, multi-step advice despite short-term difficulty—the core brand promise in action.

---

When in doubt, choose **Clinical Authority** over **Relatability**, **Objectivity** over **Validation**, and **Long-term Development** over **Short-term Ease**.

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
**Quick reference:** See `.claude/docs/brand-quick-ref.md`

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
- Triage-first structure with medical safety as priority
- Immediately scannable action steps
- No preamble or emotional cushioning
- See full documentation: **Quick Help Content Model** section below

**Guides** (protocol implementation, building understanding):

- Educating, measured, explanatory
- Provide context and "why" to foster perseverance
- Include actionable checklists and protocols
- Support long-term consistency
- See full documentation: **Dual-Content Pairing Model (Guides + Blogs)** section below

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

## Quick Help Content Model

### Purpose and Positioning

**Quick Help** is triage-first, action-oriented content designed for **high-stress, urgent moments** when parents need immediate guidance. These are not educational deep-dives—they are clinical decision trees optimized for rapid scanning and immediate action.

**Target user state:**

- Emotionally heightened (stressed, worried, exhausted)
- Time-constrained (needs answer NOW)
- Cognitively overloaded (cannot process dense information)
- Seeking immediate reassurance or action steps

**Core promise:** "Is this an emergency? If not, what do I do right now?"

---

### Content Structure Requirements

Quick Help must follow this **strict hierarchical structure**:

#### 1. 🚨 Medical Triage Section (ALWAYS FIRST)

**Purpose:** Immediate danger assessment before any other content

**Requirements:**

- Section title: `## 🚨 Call Your Doctor Immediately` or `## 🚨 Seek Medical Attention If`
- Must be the FIRST section after frontmatter
- Bulleted list of emergency/urgent symptoms
- Clear, directive language: "Call," "Seek," "Go to ER"
- Include specific clinical thresholds (temperatures, time windows, age-specific risks)
- Always end with: "When in doubt, call your pediatrician" or equivalent safety net statement

**Example:**

```markdown
## 🚨 Call Your Doctor Immediately

- Baby has a fever (temperature 100.4°F/38°C or higher in baby under 3 months)
- Crying is accompanied by difficulty breathing, blue lips, or choking
- Bulging fontanelle (soft spot), especially when baby is inconsolable
- You feel so frustrated that you might lose control or act unsafely

**Remember:** For babies under 3 months, fever always requires immediate medical attention. When in doubt, call your pediatrician.
```

---

#### 2. Quick Action Checklist (Immediate Scannable Steps)

**Purpose:** Provide rapid-fire action steps for parents to try immediately

**Requirements:**

- Checkbox format (□) for tactile engagement
- Maximum 6-8 items
- Each item: **Bold label** + brief 1-sentence explanation
- No paragraphs—only sentence fragments or single sentences
- Ordered by most common → less common (or logical sequence if procedural)

**Example:**

```markdown
## Quick Comfort Checklist

□ **Hungry?**
Newborns eat every 1.5-3 hours. Offering a feed is always reasonable, even if recently fed

□ **Diaper needs changing?**
Wet or soiled diaper can be uncomfortable

□ **Too hot or cold?**
Feel baby's chest/back (not hands/feet). Most newborns are comfortable in 1 more layer than an adult
```

---

#### 3. Brief Context Section (Optional but Recommended)

**Purpose:** Provide just enough clinical framing to reduce panic and build trust

**Requirements:**

- Section title: `## What's Happening` or `## Why This Happens`
- Maximum 2-4 short paragraphs
- Normalize the experience ("This is common at X age")
- Brief clinical explanation (without deep science)
- Reassure WITHOUT emotional validation (use clinical objectivity)

**Avoid:**

- Long explanations
- Research citations or detailed mechanisms
- Emotional validation phrases ("You're doing great, mama!")

**Example:**

```markdown
## What's Happening

Newborn crying peaks between 2-6 weeks of age, with babies crying 2-3 hours per day on average. Some cry much more. This is normal, though it's absolutely exhausting.

**Most inconsolable crying in young babies has no underlying medical problem.** Your baby isn't in pain (usually). You're not doing something wrong. This is normal newborn behavior, however challenging it feels.
```

---

#### 4. Detailed Action Section(s)

**Purpose:** Provide expanded context for each item from the Quick Checklist

**Requirements:**

- Numbered or subsection headers (e.g., `### 1. Food`)
- Match the order of the Quick Checklist
- Provide specific clinical details, thresholds, or troubleshooting
- Use sub-bullets for clarity
- Keep action-oriented (not explanatory)

---

#### 5. Clinical Red Flags Section

**Purpose:** Help parents differentiate normal from concerning patterns

**Requirements:**

- Section title: `## When [Topic] Might Indicate a Problem`
- Subsections by condition (e.g., `### Illness`, `### Reflux`, `### Ear Infection`)
- Each subsection includes:
  - **Signs:** bulleted symptoms
  - **Action:** Clear directive (Call pediatrician same day, Go to ER, etc.)
- Do NOT診断—only describe patterns that warrant professional evaluation

---

#### 6. Tiered Medical Guidance Section

**Purpose:** Help parents determine appropriate urgency level for seeking care

**Requirements:**

- Section title: `## When to Call the Doctor`
- Three urgency tiers:
  1. **Call immediately for:** (life-threatening or urgent)
  2. **Call same day for:** (concerning but not emergent)
  3. **Mention at next well visit:** (non-urgent questions)
- End with: "Trust your instinct: You know your baby. If something feels wrong, call."

---

#### 7. Key Takeaways

**Purpose:** Concise summary for retention and reassurance

**Requirements:**

- Section title: `## Key Takeaways`
- Bulleted list (4-8 items maximum)
- Summarize most critical clinical points
- Include safety reminders
- End with reassurance about normalcy or timeline (when appropriate)

---

#### 8. Related Resources

**Purpose:** Connect to deeper learning without forcing it

**Requirements:**

- Section title: `## Related Resources`
- Three categories:
  1. **Blogs** (deep-dive science): Link to supporting blog content
  2. **Guides** (protocols): Link to related implementation guides
  3. **Other Quick Help**: Link to related urgent topics
- Use emoji to distinguish types:
  - 📚 for Blogs
  - 📋 for Guides
  - 🚨 for other Quick Help
  - 📅 for age-based collections

**Example:**

```markdown
## Related Resources

**For more detailed information:**

- 📚 [Why is my baby crying? Complete guide](/blog/why-baby-cries)
- 📋 [Sleep training protocol for 4-6 months](/guides/sleep-training)

**Quick Help on related topics:**

- 🚨 [Won't sleep through the night](/quick-help/wont-sleep)
- 🚨 [Fever in baby](/quick-help/fever)
```

---

#### 9. Medical Review Footer (REQUIRED)

**Requirements:**

- Credentials and last updated date
- Emergency disclaimer
- Educational purposes statement

**Template:**

```markdown
**Medical Review:** Alisha Blevins, MSN, CPNP-AC, Pediatric Neurology NP
**Last Updated:** [Date]

⚠️ **Important:** If you believe your child is experiencing a medical emergency, call 911 immediately. If you're feeling overwhelmed and at risk of harming your baby, put baby in safe place and call for help: National Parent Helpline 1-855-427-2736 or Crisis Line 988.

_This information is for educational purposes only and does not replace medical advice from your child's healthcare provider._
```

---

### Frontmatter Requirements

**Required fields:**

```yaml
title: "Clear, Searchable Title (Age Range if Applicable)"
description: "Quick reference guide - X min read"
topic: "slug-for-topic"
category: "health|sleep|feeding|development|safety"
ageRanges: ["0-3mo", "3-6mo", "6-12mo", "12-18mo", "18-24mo", "2-3yr"]
priority: "high|medium|low"
publishedAt: "YYYY-MM-DD"
medicalDisclaimer: true
whenToCallDoctor: true
printFriendly: true
isSpecialty: false
```

**Optional fields:**

```yaml
relatedGuides: ["/guides/guide-slug"]
relatedBlogs: ["/blog/blog-slug"]
specialtyNote: "Brief note if isSpecialty: true"
```

---

### Tone and Communication Goals

**Imperatives:**

- **Direct, not conversational:** Use commands ("Check temperature," "Call doctor," "Try burping")
- **Clinical, not emotional:** Avoid "Don't worry" or "You've got this"
- **Specific, not vague:** Include numbers, thresholds, time windows
- **Reassuring through objectivity:** Normalize via clinical data, not emotional validation

**Language patterns:**

✓ **Use:**

- "Most [condition] resolves by [age/timeline]"
- "Normal range: [specific numbers]"
- "Call if [specific symptom]"
- "Try these in order"
- "[Symptom] is common and typically not concerning unless accompanied by [red flag]"

✗ **Avoid:**

- "Don't panic"
- "You're doing great"
- "Trust your gut"
- "Every baby is different" (too vague)
- "This too shall pass" (minimizing)

---

### When to Create Quick Help vs. Guide

**Create Quick Help when:**

- Topic involves potential medical urgency
- Parent needs decision tree (emergency vs. normal vs. call doctor)
- Situation is time-sensitive or high-stress
- Content is primarily triage + immediate action steps
- Examples: "Baby won't stop crying," "High fever," "Choking," "Won't sleep"

**Create Guide when:**

- Topic is a protocol to implement over time
- Parent needs sustained, multi-day action plan
- Situation is planned/proactive (not reactive/urgent)
- Content is primarily structured implementation
- Examples: "Sleep training protocol," "Introducing solids," "Milestone tracking"

**Can overlap:**

- Quick Help can link to Guide for ongoing protocol
- Guide can link to Quick Help for troubleshooting urgent issues

---

### Relationship to Blogs and Guides

**Quick Help does NOT replace deep learning:**

- Quick Help = Triage + immediate action
- Blog = Science + clinical interpretation
- Guide = Protocol + implementation

**Quick Help should:**

- Link to supporting Blogs for parents who want to understand WHY
- Link to related Guides for parents ready to implement a structured protocol
- Stand alone as complete urgent guidance

**Blogs and Guides should:**

- Link back to relevant Quick Help for urgent troubleshooting
- Reference Quick Help in intro/outro when urgent scenarios exist

---

### Content Quality Guardrails

**Medical Safety:**

- [ ] Emergency symptoms appear FIRST
- [ ] Age-specific thresholds are accurate (especially fever cutoffs)
- [ ] Clear escalation pathways (when to call, when to go to ER)
- [ ] No diagnosis—only describe patterns requiring evaluation
- [ ] Includes safety net: "When in doubt, call your pediatrician"

**Scannability:**

- [ ] Medical triage section is unmissable (emoji, position, formatting)
- [ ] Quick checklist uses checkboxes and bold labels
- [ ] Paragraphs are short (2-4 sentences maximum)
- [ ] Bulleted lists for all multi-item content
- [ ] Headers clearly indicate content type

**Clinical Authority:**

- [ ] Avoids emotional validation language
- [ ] Includes specific numbers, ranges, thresholds
- [ ] Normalizes via data, not subjective reassurance
- [ ] Cites clinical patterns (e.g., "Period of PURPLE Crying")
- [ ] Maintains Pediatric NP voice throughout

**Brand Alignment:**

- [ ] No "mama," "mommy guilt," or "trust your gut" language
- [ ] Reassures through objectivity, not emotion
- [ ] Prioritizes child safety over parent feelings
- [ ] Links to deeper content without forcing it
- [ ] Maintains calm, clinical tone even in urgent scenarios

---

### Pre-Publication Validation Checklist

**Structure:**

- [ ] Medical triage section is FIRST
- [ ] Quick checklist appears before detailed sections
- [ ] All required sections are present and in correct order
- [ ] Related Resources section includes Blogs, Guides, and other Quick Help
- [ ] Medical review footer is complete

**Content:**

- [ ] Emergency thresholds are accurate and age-appropriate
- [ ] Action steps are specific and immediately executable
- [ ] No scientific deep-dives (save for Blogs)
- [ ] No multi-step protocols (save for Guides)
- [ ] Appropriate links to supporting content

**Frontmatter:**

- [ ] All required fields present and accurate
- [ ] Age ranges are appropriate for content
- [ ] `medicalDisclaimer: true` and `whenToCallDoctor: true` if applicable
- [ ] `printFriendly: true` (Quick Help should always be printable)

**Tone:**

- [ ] Direct and imperative (not conversational)
- [ ] Clinical and objective (not emotional)
- [ ] Specific thresholds and timelines (not vague reassurance)

---

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
  - "/blog/primary-supporting-blog" # First entry is primary
  - "/blog/additional-blog-1" # Optional additional support
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

**Content Type Selection:**

- **Urgent/medical triage situation?** → Create Quick Help
- **Multi-day protocol implementation?** → Create Guide (with supporting Blog)
- **Deep-dive science/research?** → Create Blog (may support Guide or stand alone)

**Content Creation Order:**

- **Creating a Guide?** → Blog(s) first, then Guide
- **Creating a Blog?** → Determine if it supports a Guide or stands alone
- **Creating Quick Help?** → Quick Help can stand alone, but link to related Blogs and Guides

**Content Relationships:**

- **Multiple relevant Blogs exist?** → Choose most comprehensive as primary
- **Blog doesn't fit a Guide?** → Standalone is acceptable and expected
- **Quick Help relates to Guide?** → Link bidirectionally (Guide for protocol, Quick Help for urgent troubleshooting)

## Success Metric to Keep in Mind for overall site

**Perseverance Success Metric:** Track protocol downloads AND return visits within 7-14 days. This indicates users are actively implementing high-effort, multi-step advice despite short-term difficulty—the core brand promise in action.

---

When in doubt, choose **Clinical Authority** over **Relatability**, **Objectivity** over **Validation**, and **Long-term Development** over **Short-term Ease**.

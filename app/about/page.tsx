import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about the expertise and experience behind Evidence-Based Parenting.',
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About
          </h1>

          <div className="prose prose-lg">
            <h2>Expert Guidance from a Pediatric Specialist</h2>
            <p>
              Welcome to Evidence-Based Parenting, where medical expertise meets
              practical parenting guidance.
            </p>

            <h3>Professional Background</h3>
            <p>
              I&apos;m a board-certified Pediatric Nurse Practitioner (MSN, CPNP-AC)
              with over 8 years of clinical experience specializing in
              developmental pediatrics and pediatric neurology. I&apos;ve spent:
            </p>
            <ul>
              <li>2 years in developmental pediatrics</li>
              <li>6+ years in pediatric neurology</li>
              <li>
                Countless hours evaluating children with neurological and
                developmental concerns
              </li>
            </ul>

            <h3>Why I Created This Site</h3>
            <p>
              Every day in my practice, I see parents overwhelmed by conflicting
              advice, drowning in anxiety about milestones, and struggling to
              separate evidence-based guidance from internet noise. I created
              this resource to provide:
            </p>
            <ul>
              <li>
                <strong>Evidence-based information</strong> grounded in current
                research and clinical guidelines
              </li>
              <li>
                <strong>Clear explanations</strong> that cut through medical
                jargon
              </li>
              <li>
                <strong>Practical guidance</strong> you can actually use at 2am
              </li>
              <li>
                <strong>Reassurance</strong> when normal variation is being
                mistaken for problems
              </li>
              <li>
                <strong>Clear red flags</strong> so you know when to seek help
              </li>
            </ul>

            <h3>My Approach</h3>
            <p>
              I specialize in neurological and developmental topics—that&apos;s where
              my clinical expertise runs deepest. But this site covers the full
              spectrum of early parenting, always with an evidence-based lens.
            </p>
            <p>
              You&apos;ll notice I:
            </p>
            <ul>
              <li>Cite research and clinical guidelines</li>
              <li>
                Explain the &quot;why&quot; behind recommendations, not just the &quot;what&quot;
              </li>
              <li>Acknowledge uncertainty when evidence is limited</li>
              <li>
                Distinguish between urgent concerns and normal variation
              </li>
              <li>
                Provide medical disclaimers and encourage you to consult your
                own pediatrician
              </li>
            </ul>

            <h3>Medical Disclaimer</h3>
            <p className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 text-sm">
              This website provides general parenting information and is not a
              substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your pediatrician or other
              qualified health provider with questions about your child&apos;s health.
              Never disregard professional medical advice or delay seeking it
              because of something you have read on this website.
            </p>

            <h3>Get in Touch</h3>
            <p>
              Have questions or suggestions? Want to request a topic? I&apos;d love to
              hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link";

export function Footer() {
  const footerLinks = {
    content: [
      { name: "Quick Help", href: "/quick-help" },
      { name: "By Age", href: "/age" },
      { name: "Guides", href: "/guides" },
      { name: "Blog", href: "/blog" },
    ],
    topics: [
      { name: "Development", href: "/topics/development" },
      { name: "Sleep", href: "/topics/sleep" },
      { name: "Feeding", href: "/topics/feeding" },
      { name: "Health", href: "/topics/health" },
    ],
    site: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <footer className="border-t bg-gray-50 dark:bg-slate-900 dark:border-slate-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-bold text-primary">
              Evidence-Based Parenting
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-200">
              Expert parenting guidance from a Pediatric Nurse Practitioner
              specializing in developmental and neurological care.
            </p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              MSN, CPNP-AC
            </p>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Content
            </h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Topics
            </h3>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Site
            </h3>
            <ul className="space-y-3">
              {footerLinks.site.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8 dark:border-slate-700">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-200">
              &copy; {new Date().getFullYear()} Evidence-Based Parenting. All
              rights reserved.
            </p>
            <div className="medical-disclaimer-footer">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                This site provides general parenting information and is not
                medical advice. Always consult your pediatrician for medical
                concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

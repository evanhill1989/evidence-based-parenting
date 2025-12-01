import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="no-print mb-8 flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-gray-700">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="ml-2 text-muted-foreground hover:text-gray-700"
              >
                {item.label}
              </Link>
            ) : (
              <span className="ml-2 text-muted-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  AlertTriangle,
  Info,
  Download,
  Square,
} from "lucide-react";

// Custom components for MDX
const MDXComponents = {
  // Headings with anchor support
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mb-6 mt-8 text-4xl font-bold tracking-tight text-gray-100 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-4 mt-8 text-3xl font-bold tracking-tight text-gray-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mb-3 mt-6 text-2xl font-semibold text-gray-100" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="mb-2 mt-4 text-xl font-semibold text-gray-100" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    // Check if this paragraph starts with a checkbox character
    const childText =
      typeof children === "string"
        ? children
        : Array.isArray(children) && typeof children[0] === "string"
        ? children[0]
        : "";
    const startsWithCheckbox = childText.toString().trim().startsWith("□");

    if (startsWithCheckbox) {
      return (
        <p
          className="mb-4 flex items-start gap-3 leading-7 text-gray-200"
          {...props}
        >
          <Square />
          <span className="flex-1">
            {Array.isArray(children) && typeof children[0] === "string"
              ? [children[0].replace(/^□\s*/, ""), ...children.slice(1)]
              : typeof children === "string"
              ? children.replace(/^□\s*/, "")
              : children}
          </span>
        </p>
      );
    }

    return (
      <p className="mb-4 leading-7 text-gray-200" {...props}>
        {children}
      </p>
    );
  },

  // Links
  a: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    const isAnchor = href?.startsWith("#");

    if (isExternal) {
      return (
        <a
          href={href}
          className="font-medium text-primary-600 underline decoration-primary-200 underline-offset-2 hover:decoration-primary-600"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    if (isAnchor) {
      return (
        <a
          href={href}
          className="font-medium text-primary-600 underline decoration-primary-200 underline-offset-2 hover:decoration-primary-600"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href || "#"}
        className="font-medium text-primary-600 underline decoration-primary-200 underline-offset-2 hover:decoration-primary-600"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-100" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-100" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  // Blockquotes
  blockquote: ({
    children,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-4 border-l-4 border-primary-500 bg-primary-50 py-2 pl-6 pr-4 italic text-gray-100"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Tables
  table: ({
    children,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({
    children,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-100"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="whitespace-nowrap px-6 py-4 text-sm text-gray-100"
      {...props}
    >
      {children}
    </td>
  ),

  // Code
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800"
      {...props}
    >
      {children}
    </code>
  ),

  // Pre (code blocks are handled by rehype-pretty-code)
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4" {...props}>
      {children}
    </pre>
  ),

  // Horizontal rule
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-200" {...props} />
  ),

  // Images
  img: ({
    src,
    alt,
    width,
    height,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="my-8">
      {src && (
        <Image
          src={src}
          alt={alt || ""}
          width={typeof width === "number" ? width : 800}
          height={typeof height === "number" ? height : 400}
          className="rounded-lg"
          {...props}
        />
      )}
    </div>
  ),

  // Custom callout components
  MedicalDisclaimer: ({ children }: { children: React.ReactNode }) => (
    <div className="medical-disclaimer my-6 flex gap-3">
      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
      <div>
        <p className="mb-1 font-semibold text-yellow-900">Medical Disclaimer</p>
        <div className="text-sm text-yellow-800">{children}</div>
      </div>
    </div>
  ),

  WhenToCallDoctor: ({ children }: { children: React.ReactNode }) => (
    <div className="urgent-callout my-6 flex gap-3">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
      <div>
        <p className="mb-1 font-bold text-red-900">When to Call Your Doctor</p>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  ),

  InfoBox: ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title?: string;
  }) => (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
      <div className="flex gap-3">
        <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
        <div>
          {title && <p className="mb-1 font-semibold text-blue-900">{title}</p>}
          <div className="text-sm text-blue-800">{children}</div>
        </div>
      </div>
    </div>
  ),

  QuickRefCard: ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title?: string;
  }) => (
    <div className="quick-ref-card my-6">
      {title && (
        <h4 className="mb-3 text-lg font-semibold text-primary-900">{title}</h4>
      )}
      {children}
    </div>
  ),

  DownloadButton: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <div className="my-6">
      <a
        href={href}
        download
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
      >
        <Download className="h-5 w-5" />
        {children}
      </a>
    </div>
  ),
};

export default MDXComponents;

import Link from "next/link";

export default function ProductBreadcrumb() {
  return (
    <nav className="mb-8">
      <Link
        href="/collections"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        ← Back to Products
      </Link>
    </nav>
  );
}


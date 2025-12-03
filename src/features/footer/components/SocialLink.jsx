import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SocialLink({ name, href, iconName }) {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 border border-gray-600 rounded-full hover:border-white hover:text-white transition-all duration-300"
        aria-label={name}
      >
        <Icon icon={iconName} className="w-4 h-4" />
      </Link>
    </li>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function FooterAccordionSection({
  title,
  links = [],
  newsletter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hasNewsletterContent = Boolean(newsletter);

  const renderLinks = () => (
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  const renderNewsletter = () => (
    <div className="space-y-4 text-sm">
      <p className="text-gray-400">{newsletter.description}</p>
      <form method="post" action={newsletter.formAction} className="relative z-10">
        <div className="flex w-full border border-[#3a3a3a] bg-[#3a3a3a] rounded-md overflow-hidden max-w-md">
          <input
            type="email"
            name="contact[email]"
            placeholder="Enter email address"
            className="flex-1 px-4 py-3 text-base text-[#e0e0e0] placeholder-[#9d9d9d] bg-transparent focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 m-2 bg-black text-white font-medium text-base hover:bg-neutral-900 transition-colors"
          >
            Subscribe ↗
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center gap-6 pt-4 text-gray-300">
        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
          <Image
            src={newsletter.currency.flag}
            alt={newsletter.currency.label}
            width={16}
            height={12}
            className="w-4 h-3"
          />
          <span>{newsletter.currency.label}</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 19 12">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              points="17 2 9.5 10 2 2"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
          <span>{newsletter.language}</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 19 12">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              points="17 2 9.5 10 2 2"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full text-lg font-medium mb-4 lg:hidden"
        aria-expanded={isOpen}
        aria-controls={`${title}-content`}
      >
        {title}
        <ChevronIcon isOpen={isOpen} />
      </button>

      <h6 className="text-lg font-medium mb-4 hidden lg:block">{title}</h6>

      <div
        id={`${title}-content`}
        className={`${isOpen ? "block" : "hidden"} space-y-4 lg:block`}
      >
        {hasNewsletterContent ? renderNewsletter() : renderLinks()}
      </div>
    </div>
  );
}


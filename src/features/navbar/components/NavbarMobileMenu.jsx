"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AccountButtons = () => (
  <div className="space-y-4">
    <button className="flex items-center space-x-3 w-full text-left py-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <span>Login</span>
    </button>
    <button className="flex items-center space-x-3 w-full text-left py-2">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.59 5.17L1.41 0L0 1.41L5.17 6.58L6.59 5.17ZM10.5 0L12.54 2.04L0 14.59L1.41 16L13.96 3.46L16 5.5V0H10.5ZM10.83 9.41L9.42 10.82L12.55 13.95L10.5 16H16V10.5L13.96 12.54L10.83 9.41Z" />
      </svg>
      <span>Compare</span>
    </button>
    <button className="flex items-center space-x-3 w-full text-left py-2">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 18">
        <path d="M9.90736 15.2534L9.80926 15.3515L9.70136 15.2534C5.04196 11.0256 1.96185 8.22997 1.96185 5.3951C1.96185 3.43324 3.43324 1.96185 5.3951 1.96185C6.90572 1.96185 8.37711 2.94278 8.897 4.27684H10.7215C11.2414 2.94278 12.7128 1.96185 14.2234 1.96185C16.1853 1.96185 17.6567 3.43324 17.6567 5.3951C17.6567 8.22997 14.5766 11.0256 9.90736 15.2534ZM14.2234 0C12.5166 0 10.8785 0.79455 9.80926 2.04033C8.74005 0.79455 7.10191 0 5.3951 0C2.37384 0 0 2.36403 0 5.3951C0 9.09319 3.33515 12.1243 8.38692 16.7052L9.80926 18L11.2316 16.7052C16.2834 12.1243 19.6185 9.09319 19.6185 5.3951C19.6185 2.36403 17.2447 0 14.2234 0Z" />
      </svg>
      <span>Wishlist</span>
    </button>
  </div>
);

export default function NavbarMobileMenu({ mainMenu, logoSrc }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="fixed top-0 left-0 w-80 h-full bg-gray-900 text-white p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image src={logoSrc} alt="Ecomus" width={120} height={20} />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              {mainMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 hover:bg-gray-800 rounded-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <AccountButtons />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


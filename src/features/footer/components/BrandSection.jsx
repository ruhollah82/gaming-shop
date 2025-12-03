import Image from "next/image";
import Link from "next/link";
import SocialLink from "./SocialLink";

export default function BrandSection() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/shopify",
      iconName: "mdi:facebook",
    },
    { name: "Twitter", href: "https://x.com/shopify", iconName: "mdi:twitter" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      iconName: "mdi:instagram",
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@shopify",
      iconName: "mdi:tiktok",
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/shopify",
      iconName: "mdi:pinterest",
    },
  ];

  return (
    <div className="space-y-6">
      <Link href="/" className="block">
        <Image
          src="//ecomus-2-2.myshopify.com/cdn/shop/files/logo_white.svg?v=1744703286"
          alt="Ecomus"
          width={136}
          height={21}
          className="h-6 w-auto"
        />
      </Link>

      <div className="text-gray-300 text-sm space-y-2">
        <p>Address: 1234 Fashion Street, Suite 567,</p>
        <p>New York, NY</p>
        <p>
          Email: <strong>info@fashionshop.com</strong>
        </p>
        <p>
          Phone: <strong>(212)555-1234</strong>
        </p>
      </div>

      <Link
        href="/store-locations"
        className="inline-flex items-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold"
      >
        Get direction
        <svg className="w-3 h-3" viewBox="0 0 64 64" fill="currentColor">
          <path d="M6.89,64,0,57.11,47.26,9.85H4.92V0H64V59.08H54.15V16.74Z" />
        </svg>
      </Link>

      <div className="pt-4">
        <ul className="flex space-x-4">
          {socialLinks.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </ul>
      </div>
    </div>
  );
}

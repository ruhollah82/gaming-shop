import BrandSection from "./components/BrandSection";
import FooterAccordionSection from "./components/FooterAccordionSection";
import FooterBottom from "./components/FooterBottom";

const helpLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Returns + Exchanges", href: "/delivery-return" },
  { name: "Shipping", href: "/shipping-delivery" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "FAQ's", href: "/faq01" },
  { name: "Compare", href: "/search?view=compare" },
  { name: "My Wishlist", href: "/search?view=wishlist" },
];

const aboutLinks = [
  { name: "Our Story", href: "/about-us" },
  { name: "Visit Our Store", href: "/our-store" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about-us" },
  { name: "Account", href: "/account/login" },
];

const newsletterInfo = {
  description:
    "Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!",
  formAction: "/contact#newsletter",
  currency: {
    flag: "//cdn.shopify.com/static/images/flags/us.svg?width=16",
    label: "USD",
  },
  language: "English",
};

export default async function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-b border-gray-700 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BrandSection />
            <FooterAccordionSection title="Help" links={helpLinks} />
            <FooterAccordionSection title="About us" links={aboutLinks} />
            <FooterAccordionSection
              title="Sign Up for Email"
              newsletter={newsletterInfo}
            />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
}

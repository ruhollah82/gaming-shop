// components/FaqSection.jsx
import { getFAQ } from "@/lib/api";
import FaqHeader from "./FaqHeader";
import FaqContent from "./FaqContent";

export default async function FaqSection() {
  // Fetch data on server side
  const faqItems = await getFAQ();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqHeader />
        <FaqContent faqItems={faqItems} />
      </div>
    </section>
  );
}

import {
  IconBoxHeader,
  IconBoxFeatures,
  IconBoxStats,
  IconBoxCTA,
} from "./icon-box";

export default async function IconBoxSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IconBoxHeader />
        <IconBoxFeatures />
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
          </div>
          <div className="relative z-10">
            <IconBoxStats />
            <IconBoxCTA />
          </div>
        </div>
      </div>
    </section>
  );
}

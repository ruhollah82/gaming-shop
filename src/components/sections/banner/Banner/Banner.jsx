import BannerItem from "./BannerItem";

const GameStoreBanner = async () => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 px-12 py-24  overflow-hidden">
      {/* 🖼 Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/hero/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // filter: "brightness(0.7)", // تاریک‌تر برای خوانایی بهتر
        }}
      />

      {/* 🌟 Optional overlay for gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent -z-10" /> */}

      {/* 🧱 Banner items */}
      <BannerItem
        image="/images/hero/keyboard.webp"
        title="Best Seller"
        subtitle="NO.1 GEAR"
        description="Every piece is made to last beyond the season"
        link="/collections/keyboards"
      />
      <BannerItem
        image="/images/hero/mouse.webp"
        title="New Arrivals"
        subtitle="LATEST COLLECTION"
        description="Find the perfect gear for your next adventure"
        link="/collections/new"
      />
    </div>
  );
};

export default GameStoreBanner;

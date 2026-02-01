import { ShippingIcon } from "@/components/ui";
import { getMarquee } from "@/lib/api";

const FreeExpressMarquee = async () => {
  // Fetch marquee data from API
  const marqueeData = await getMarquee();
  const repeatedItems = Array(marqueeData.config.repeat)
    .fill(marqueeData.items)
    .flat();

  return (
    <div
      className="relative overflow-hidden p-[30px]"
      style={{ backgroundColor: marqueeData.config.backgroundColor }}
    >
      <div className="flex whitespace-nowrap justify-between animate-marquee">
        {repeatedItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-5 mx-8 text-white text-lg font-medium py-4 flex-shrink-0"
          >
            <ShippingIcon />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeExpressMarquee;

import { getFeatures } from "@/lib/api";
import IconBoxFeatures from "./IconBoxFeatures";

export default async function IconBoxFeaturesWrapper() {
  // Fetch data on server side
  const features = await getFeatures();

  return <IconBoxFeatures initialFeatures={features} />;
}

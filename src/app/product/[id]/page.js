import { getProductById } from "../../../lib/api";

export default async function ProductPage({ params }) {
  const product = await getProductById(params.id);

  return (
    <div className="px-4 py-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
        <p className="text-gray-400 mb-4">${product.price}</p>
        <p className="text-gray-300">{product.description}</p>
      </div>
    </div>
  );
}

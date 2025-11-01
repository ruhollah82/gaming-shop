export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-sm font-medium">{product.title}</h3>
      <p className="text-gray-400">${product.price}</p>
    </div>
  );
}

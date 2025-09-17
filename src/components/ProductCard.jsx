const ProductCard = ({ name, desc, image }) => (
  <div className="rounded shadow-lg bg-white p-6 flex flex-col items-center">
    <img src={image} alt={name} className="h-32 w-32 object-cover rounded mb-2" />
    <div className="font-semibold text-lg text-yellow-700 mb-2">{name}</div>
    <div className="text-sm text-gray-600 mb-4">{desc}</div>
    <button className="cursor-pointer mt-auto px-4 py-1 rounded bg-yellow-600 text-white hover:bg-yellow-700">Buy Now</button>
  </div>
);

export default ProductCard;

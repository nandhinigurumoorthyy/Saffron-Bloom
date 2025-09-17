import ProductCard from "./ProductCard";

const products = [
  { name: "Premium Indian Saffron", desc: "Highest grade, hand-picked.", image: "https://market.foodsocial.io/cdn/shop/files/pure-saffron-threads-persian-super-negin-grade-smaller-shopify.jpg?v=1722627995&width=480" },
  { name: "Spain Saffron", desc: "Finest powder, easy to use.", image: "https://www.thespruceeats.com/thmb/RbN1vGI9Ws6nfyTGjRMNKfGpjk8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-111652757-58935fb93df78caebca95753.jpg" },
  { name: "Kashmiri Saffron", desc: "For cooking & wellness.", image: "https://www.kashmirbox.com/cdn/shop/products/kb0034_4_7bba94ed-6f00-49f3-b872-a619ca4f21b0.jpg?v=1753180124&width=1100" },
  { name: "Iran Saffron", desc: "Perfect for skin products.", image: "https://tiimg.tistatic.com/fp/1/006/638/100-pure-iranian-saffron-149.jpg" },
  { name: "Spanish Premium Saffron", desc: "For daily home use.", image: "https://poundveg.co.uk/cdn/shop/files/SpanishPremiumSaffronThreads_5gm.jpg?v=1708944300" },
];

const ProductsGrid = () => (
  <section className="py-16 bg-gray-50" id="products">
    <h2 className="text-2xl font-bold text-center mb-8">Our Saffron Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-1 md:px-8 max-w-5xl mx-auto">
      {products.map((p, i) => <ProductCard key={i} {...p} />)}
    </div>
  </section>
);

export default ProductsGrid;

import { useState } from "react";

const benefits = [
  { title: "Versatile Uses", desc: "Cook, heal, beautify: saffron fits all." },
  { title: "Health Benefits", desc: "Rich in antioxidants, mood booster." },
  { title: "Guaranteed Purity", desc: "Lab-tested, premium quality, no blend." },
  { title: "Direct from Farmers", desc: "Traceable origin, fair trade approach." },
  { title: "Sustainable Harvest", desc: "Eco-friendly farming and fair labor." },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 bg-white" id="benefits">
      <h2 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            onTouchStart={() => setActiveIndex(i)}
            onTouchEnd={() => setActiveIndex(null)}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`bg-red-50 rounded p-5 shadow text-center transition-transform duration-300 ease-in-out cursor-pointer ${
              activeIndex === i ? "scale-105" : "scale-100"
            }`}
          >
            <h3 className="text-lg font-bold text-yellow-700">{b.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;

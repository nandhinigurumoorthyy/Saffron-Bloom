import React, { useState } from "react";

// Sample thread images (replace with your actual image imports or URLs)
const threads = [
  { id: 1, name: "Thread Type A", imageUrl: "https://alphonsomango.in/cdn/shop/files/alphonsomango-in-seasonings-spices-1-gm-kesar-nuts-kashmiri-kesar-buy-saffron-online-keshar-43589834932481.jpg?v=1742507372&width=1214", description: "Rich aroma, deep red color." },
  { id: 2, name: "Thread Type B", imageUrl: "https://s.alicdn.com/@sc04/kf/H86e4484b44004b83b7dcfcfd8dedf4cdv.jpg_720x720q50.jpg", description: "Thick strands, intense flavor." },
  { id: 3, name: "Thread Type C", imageUrl: "https://kidspattern.com/wp-content/uploads/2024/02/Threads-of-Gold-Unraveling-the-Rich-Tapestry-of-Saffron-Orange-1200x1200.jpg", description: "Light orange hue, delicate taste." },
];

const ThreadExplorer = () => {
  const [selected, setSelected] = useState(threads[0]);

  return (
    <section className="bg-yellow-50 py-12 px-4 max-w-5xl mx-auto my-6">
      <h2 className="text-2xl font-bold text-yellow-700 text-center mb-8">Interactive Saffron Thread Explorer</h2>

      {/* Selected Thread Display */}
      <div className="mb-8 flex flex-col items-center">
        <img 
          src={selected.imageUrl} 
          alt={selected.name} 
          className="w-72 h-72 object-contain rounded-lg shadow-lg"
        />
        <h3 className="mt-4 text-xl font-semibold text-yellow-800">{selected.name}</h3>
        <p className="text-gray-700 mt-2 max-w-md text-center">{selected.description}</p>
      </div>

      {/* Thread Thumbnails */}
      <div className="flex justify-center space-x-6 overflow-x-auto px-2">
        {threads.map(thread => (
          <button
            key={thread.id}
            onClick={() => setSelected(thread)}
            className={`flex-shrink-0 w-24 h-24 rounded-lg border-4 transition-transform duration-300
              ${selected.id === thread.id ? "border-yellow-600 scale-110" : "border-transparent hover:scale-105 hover:border-yellow-400"}
            `}
            aria-label={`View details of ${thread.name}`}
          >
            <img
              src={thread.imageUrl}
              alt={thread.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ThreadExplorer;

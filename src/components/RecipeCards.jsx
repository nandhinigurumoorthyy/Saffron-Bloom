import { useState } from "react";

const recipes = [
  {
    id: 1,
    title: "Saffron Tea",
    imageUrl: "https://content.jdmagicbox.com/comp/def_content_category/saffron-tea-dealers/360-f-810586058-li0zjtto6ciygfawllzvf2dr35xlfjil-saffron-tea-dealers-4-0mike.jpg",
    frontText: "A soothing tea to relax and uplift.",
    backText: "Brew with 3 threads in hot water for 5 mins. Benefits: Mood enhancer, antioxidant.",
  },
  {
    id: 2,
    title: "Saffron Rice Pudding",
    imageUrl: "https://www.slofoodgroup.com/cdn/shop/articles/sholeh-zard-a-creamy-saffron-persian-rice-pudding-784578_2048x.jpg?v=1631041009",
    frontText: "Sweet, rich dessert with saffron aroma.",
    backText: "Cook rice with milk, sugar, and saffron. Benefits: Digestive aid, luxury flavor.",
  },
  {
    id: 3,
    title: "Face Brightening Mask",
    imageUrl: "https://storage.googleapis.com/tc46storage/2022/05/39c0d0f7-hero-8.jpg",
    frontText: "Natural glow from saffron skincare.",
    backText: "Mix saffron with yogurt and honey. Apply for 15 mins. Benefits: Brightening, anti-inflammatory.",
  },
];

const RecipeCards = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <section className="bg-yellow-50 py-12 my-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-700 text-center mb-8">Recipes & Rituals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recipes.map(({ id, title, imageUrl, frontText, backText }) => (
          <div
            key={id}
            onClick={() => setFlipped(flipped === id ? null : id)}
            className="relative w-64 h-96 cursor-pointer perspective mx-auto"
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 ease-in-out transform ${
                flipped === id ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full backface-hidden bg-white rounded-lg p-4 flex flex-col items-center shadow-lg"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="rounded mb-4 h-40 w-full object-cover"
                  draggable={false}
                />
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">{title}</h3>
                <p className="text-gray-700 text-center">{frontText}</p>
                <p className="mt-2 text-sm text-gray-500 italic">Click to flip</p>
              </div>
              {/* Back Side */}
              <div
                className="absolute w-full h-full backface-hidden bg-yellow-100 rounded-lg p-4 flex flex-col items-center shadow-lg rotate-y-180"
                style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
              >
                <h3 className="text-lg font-semibold text-yellow-700 mb-2">{title}</h3>
                <p className="text-gray-800 text-center">{backText}</p>
                <p className="mt-4 text-sm text-gray-600 italic">Click to flip back</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeCards;

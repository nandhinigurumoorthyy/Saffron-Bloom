import { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const stories = [
  {
    id: 1,
    region: "Kashmir",
    title: "Kashmir Harvest",
    description: `Kashmiri farmers hand-pick delicate saffron threads at dawn.
Harvesting is done carefully to preserve quality.
A tradition passed down through generations.`,
    imageUrl: img1
  },
  {
    id: 2,
    region: "Iran",
    title: "Iranian Fields",
    description: `Organic saffron fields stretch across Iranian plains.
Farming methods protect the environment and quality.
Saffron here is known worldwide for purity and aroma.`,
    imageUrl: img2
  },
  {
    id: 3,
    region: "Spain",
    title: "Spanish Saffron",
    description: `Spanish growers blend modern sustainability with heritage.
Rows of saffron flowers bask in Mediterranean sunlight.
The result is flavorful saffron prized by chefs globally.`,
    imageUrl: img3
  }
];


const StoryMap = () => {
  const [active, setActive] = useState(stories[0]);

  return (
    <section className="bg-red-50 py-12">
      <h2 className="text-2xl font-bold text-yellow-700 text-center mb-8">Farmer Origins & Traditions</h2>

      <div className="flex overflow-x-auto space-x-6 px-4 max-w-5xl mx-auto">
        {stories.map(story => (
          <button
            key={story.id}
            onClick={() => setActive(story)}
            className={`flex-shrink-0 px-5 py-3 rounded shadow cursor-pointer 
              ${active.id === story.id ? "bg-[#FAD7B0] text-yellow-900 font-bold" : "bg-white text-yellow-700"}`}
          >
            {story.region}
          </button>
        ))}
      </div>

      <div className="mt-8 max-w-3xl mx-auto bg-white rounded shadow p-6 text-center">
        <h3 className="text-xl font-semibold">{active.title}</h3>
        <p className="mt-2 mb-4 text-gray-700">{active.description}</p>
        <img className="mx-auto rounded w-80 h-72" src={active.imageUrl} />
      </div>
    </section>
  );
};

export default StoryMap;

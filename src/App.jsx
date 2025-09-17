import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import StoryMap from "./components/StoryMap";
import RecipeCards from "./components/RecipeCards";
import ThreadExplorer from "./components/ThreadExplorer";

function App() {
  return (
    <div>
      <Header />
      <StoryMap />
      <ThreadExplorer/>
      <ProductsGrid />
      <WhyChooseUs />
      <RecipeCards />
      <Footer />
    </div>
  );
}

export default App;
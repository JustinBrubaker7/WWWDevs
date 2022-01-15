import "./App.css";
import HeroSections from "./Components/HeroSection.js";
import CallToAction from "./Components/CallToAction.js";
import FeaturesSection from "./Components/FeaturesSection";
import ReviewsSection from "./Components/ReviewsSection";
import FAQSection from "./Components/FAQSection";
import TheProcessSection from "./Components/TheProcessSection";

function App() {
  return (
    <div className="App">
      <HeroSections />
      <CallToAction />
      <FeaturesSection />
      <TheProcessSection />
      <ReviewsSection />
      <FAQSection />
    </div>
  );
}

export default App;

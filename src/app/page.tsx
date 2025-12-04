import Hero from "./components/Hero";
import ShopByCategories from "./components/ShopByCategories";
import FeaturedProducts from "./components/FeaturedProducts";
import InsightSection from "./components/InsightSection";
import Testimonial from "./components/Testimonial";
import About from "./components/About";
import Partnerships from "./components/Partnerships";
import PartnerWith from "./components/Partnerwith";
import DeliverSection from "./components/DeliverSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ShopByCategories />
      <FeaturedProducts />
      <About />
      <Partnerships />
      <PartnerWith />
      <DeliverSection />
      <InsightSection />
      <Testimonial />
      <ContactUs />
      <Footer />
    </main>
  );
}

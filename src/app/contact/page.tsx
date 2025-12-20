import Header from "../components/Header";
import Footer from "../components/Footer";
import { MotionSection } from "../components/Motion";
import ContactUs from "../components/ContactUs";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ weight: ["600", "700"], subsets: ["latin"], display: "swap" });

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <div className="mt-20 md:mt-16">
          <ContactUs/>
      </div>
      <Footer />
    </main>
  );
}

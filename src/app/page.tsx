import Image from "next/image";
import HeroSection from "./components/ui/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import InfiniteCardSection from "./components/InfiniteCardSection";
import UpComingWebinars from "./components/UpComingWebinars";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2] text-white">
    <HeroSection  />
    <FeaturedCourses />
    <WhyChooseUs />
    <InfiniteCardSection />
    <UpComingWebinars />
    <Instructors />



  </main>
 
  )}
import MainSection from "@/components/MainSection";
import OurStory from "@/components/OurStory";
import ServiceSection from "@/components/ServiceSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="h-full mt-28 sm:px-20 py-8 bg-gradient-to-b from-white to-red-100 lg:bg-gradient-to-r lg:from-blue-100 lg:to-red-100 relative">
        <MainSection />
        <ServiceSection/>
        <OurStory/>
        <WhyUs/>
    </div>
  );
}

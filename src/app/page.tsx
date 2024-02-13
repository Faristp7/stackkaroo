import DigitalService from "@/components/DigitalService";
import MainSection from "@/components/MainSection";
import OurStory from "@/components/OurStory";
import SeoServices from "@/components/SeoServices";
import ServiceSection from "@/components/ServiceSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="h-full mt-28 sm:px-20 py-8 bg-gradient-to-r from-blue-50 to-white lg:bg-gradient-to-r lg:from-blue-100 lg:to-red-100 relative">
        <MainSection />
        <ServiceSection/>
        <OurStory/>
        <WhyUs/>
        <DigitalService/>
        <SeoServices/>
    </div>
  );
}

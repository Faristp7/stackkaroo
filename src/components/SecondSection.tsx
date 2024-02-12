import Image from "next/image";
import CostButton from "./CostButton";

export default function SecondSection() {
  return (
    <div className="rounded-xl flex flex-col md:flex-col lg:flex-row p-10 bg-gradient-to-b from-white to-blue-0">
      <div className="lg:w-1/2 text-center lg:text-start">
        <h1 className="font-bold text-blue-700 text-lg sm:text-4xl">
          Our Story
        </h1>
        <p className="font-bold text-gray-800 mt-3">
          Guiding EISPL as Directors, Mr. Sourav Gupta and Mr. Chandan Mishra
          bring their extensive experience to the forefront as industry
          veterans. Our team is fueled by innovation, continually striving to
          exceed customer expectations.
        </p>
        <p className="font-bold text-gray-800 mt-3">
          Operating from our registered office in Agartala Sadar, Tripura (W),
          our company is officially registered with the Corporate Identification
          Number (CIN). Our active status and an authorized share capital of Rs
          10.00 lac are a source of pride.
        </p>
        <CostButton/>
      </div>
      <div>
        <Image className="right-1 top-12" src={"/ourStory.png"} width={600} height={600} alt="ourStory" />
      </div>
    </div>
  );
}

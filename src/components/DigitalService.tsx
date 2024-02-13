import Image from "next/image";

const content = [
  {
    img: "/websitedevelopment.png",
    title: "Website development",
    description:
      "We specialize in responsive website development, ensuring optimal performance across various devices.",
  },
  {
    img: "/mobiledevelopment.png",
    title: "App Development",
    description:
      "We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.",
  },
  {
    img: "/softwaredevelopment.png",
    title: "Software Development",
    description:
      "We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.",
  },
  {
    img: "/uiuxdesign.png",
    title: "UI/UX Design",
    description:
      " We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.",
  },
  {
    img: "/digitalmarkating.png",
    title: "Digital Marketing",
    description:
      "We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.",
  },
  {
    img: "/seo.png",
    title: "SEO Optimization",
    description:
      "We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details.",
  },
];

export default function DigitalService() {
  return (
    <div>
      <h4 className="text-orange-600 text-lg md:text-4xl font-bold text-center my-8 mt-16">
        Stackkaroo’s Digital Services
      </h4>
      <p className="text-center font-semibold">
        We excel with reliability, innovation and customer-centric approach for
        our quality products. <br /> Our dedicated team ensures that the
        solutions provided are dependable and long-term
      </p>
      <div className="overflow-x-auto mt-8">
        <div className="flex gap-5 px-5 lg:px-28 lg:grid lg:grid-cols-3 lg:gap-5">
          {content.map((item, index) => (
            <div className="border-2 border-blue-200 p-4 rounded-2xl" key={index}>
              <div className="flex justify-center gap-3 items-center w-80 lg:w-auto">
                <Image src={item.img} width={50} height={50} alt="content" className="hidden lg:block"/>
                <Image src={item.img} width={40} height={40} alt="content" className="block lg:hidden"/>
                <h1 className="font-bold text-blue-600 text-center">{item.title}</h1>
              </div>
              <div className="mt-3">
                <p className="text-center">{item.description}</p>
              </div>
              <div className="flex justify-center lg:justify-start mt-10 ">
                <p className="bg-orange-600 text-white font-bold rounded-full px-2 text-lg text-center opacity-80 items-center align-middle">&gt;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

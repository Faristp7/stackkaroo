import Image from "next/image";

const content = [
  {
    img: "/location.png",
    title: "Unleashing Top Talent Globally",
    desctiption:
      "We offer 5% top talents and supports companies hiring from various time zones.lents",
  },
  {
    img: "/promotion.png",
    title: "Securing Success",
    desctiption:
      "The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.",
  },
  {
    img: "/pin.png",
    title: "Beyond Borders",
    desctiption: "We provide both, flexible full-time and part-time jobs",
  },
  {
    img: "/badge.png",
    title: "End-to-End Excellence",
    desctiption:
      "In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.",
  },
  {
    img: "/perfomance.png",
    title: "Efficiency Redefined",
    desctiption:
      "The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.",
  },
  {
    img: "/commitment.png",
    title: "Simplified Contracts Satisfied Partnerships",
    desctiption:
      "The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.",
  },
];

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-white sm:bg-none">
      <h1 className="text-lg md:text-4xl text-orange-600 text-center font-bold">
        Stackkaroo’s Talent Hiring & Job Placement Services
      </h1>
      <p className="font-semibold text-center px-2 md:px-28 my-3 md:my-5">
        We are a talent searching platform that redesigns how companies hire
        talents. It is a cost-effective solution for industries. We also provide
        global job opportunities with good salaries, support, and professional
        development.
      </p>
      <div className="overflow-x-auto py-10 pt-16">
        <div className="flex lg:grid px-5 lg:grid-cols-3 gap-5 lg:px-24">
          {content.map((item) => (
            <div
              key={item.img}
              className="bg-white rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <div className="flex flex-col items-center w-80 lg:w-auto">
                <Image
                  src={item.img}
                  alt="features"
                  width={50}
                  height={0}
                  className=""
                />
                <h1 className="text-center text-blue-700 font-bold pt-2">
                  {item.title}
                </h1>
                <p className="text-center py-4 text-sm font-semibold">
                  {item.desctiption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

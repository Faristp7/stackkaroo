import Image from "next/image";

const content = [
  {
    title: "Customized SEO Services",
    description:
      "We develop tailored SEO plans for new websites as they consider acorrect SEO website checklist, as well as strategy, to be critical for business.",
  },
  {
    title: "Mobile SEO Services",
    description:
      "We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.",
  },
  {
    title: "On-Page SEO Services",
    description:
      "We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.",
  },
  {
    title: "Free Website Audit and Strategies",
    description:
      "We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.",
  },
  {
    title: "Off-Page SEO Services",
    description:
      "We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.",
  },
];

export default function SeoServices() {
  return (
    <div className="rounded-xl p-10 bg-gradient-to-r from-blue-100 to-white sm:bg-gradient-to-b sm:from-white to-blue-0 my-20">
      <div className="flex justify-center">
        <h1 className="font-bold text-center text-orange-600 text-lg lg:text-4xl">
          SEO Services
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:px-0 md:px-20 py-10">
        {content.map((item) => (
          <div className="flex gap-3 items-start" key={item.title}>
            <Image
              src={"/tick.png"}
              width={25}  
              height={0}
              alt="checkmark"
              className="p-1 bg-gray-800  rounded-full hidden sm:block"
            />
            <div>
              <h1 className="font-bold text-blue-700 text-xl text-center sm:text-start">{item.title}</h1>
              <p className="font-semibold py-3 text-center sm:text-start">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

const image = [
  { img: "/user.jpg", title: "User-Centric Approach" },
  { img: "/twouser.jpg", title: "Customer Satisfaction" },
  { img: "/userEdit.jpg", title: "Integrating Feedback" },
  { img: "/highQuality.jpg", title: "Integrating Feedback" },
  { img: "/highQuality.jpg", title: "High Quality Products" },
  { img: "/delivery.jpg", title: "On-Time Product Delivery" },
];

export default function WhyUs() {
  return (
    <div>
      <h1 className="text-lg text-orange-600 md:text-4xl font-bold text-center">
        Why Choose Us?
      </h1>
      <p className="text-center font-semibold my-5">
        We excel with reliability, innovation and customer-centric approach for
        our quality products. <br />
        Our dedicated team ensures that the solutions provided are dependable
        and long-term
      </p>
      <div className="flex px-3 md:px-44  gap-1.5 sm:gap-5 flex-col md:flex-row  md:flex-wrap justify-center">
        {image.map((i) => (
          <div
            className="border-2  border-white rounded-l-full rounded-r-full md:rounded-2xl shadow-lg sm:shadow-2xl flex p-1.5 md:p-3 md:justify-center items-center gap-2.5 md:gap-1 w-full md:w-52"
            key={i.img}
          >
            <div className="bg-white p-3 rounded-full md:rounded-lg">
              <Image src={i.img} alt="user" width={30} height={30} className="hidden md:block"/>
              <Image src={i.img} alt="user" width={20} height={20} className="block md:hidden"/>
            </div>
            <p className="font-semibold text-blue-700 text-center">{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

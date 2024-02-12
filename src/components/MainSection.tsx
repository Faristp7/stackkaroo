import Image from "next/image";
import BookACall from "./BookACall";

export default function MainSection() {
  return (
    <div className="h-full bg-gradient-to-b from-white to-blue-0 rounded-xl flex flex-col md:flex-col lg:flex-row p-10">
      <div className="lg:bg-gradient-to-b from-white to-blue-100 order-2 sm:order-1  lg:w-1/2">
        <h1 className="font-bold text-blue-700 text-lg sm:text-4xl">
          Diversifying the Designs of <br /> Digital World{" "}
        </h1>
        <p className="font-bold text-gray-800 mt-3">
          Explorogent International Services Private Limited (EISPL) is one of
          the most famous companies in the sector of Web and Mobile Development.
          In the market, EISPL has a strong presence in providing quality
          services to its clients.
        </p>
        <p className="font-bold text-gray-800 mt-3">
          EISPL is convinced that one should diversify the offering, given the
          changing needs of the clients. That is why we engage in multiple
          projects and activities. We also possess knowledge in web development,
          app development, UI/UX design, as well as digital marketing.
        </p>
        <BookACall/>
      </div>
      <div className="order-1 md:order-2 lg:bg-gradient-to-b from-white to-red-100">
        <Image
          className=" right-1 top-12 "
          src={"/image1.png"}
          alt="image1"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

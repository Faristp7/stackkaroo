import Image from "next/image";

export default function BookACall() {
  return (
    <button className="bg-orange-700 rounded-l-full rounded-r-full text-white px-1.5 py-1.5 pr-3 mt-7 opacity-70">
      <div className="flex gap-2">
        <Image
          src={"/phone.png"}
          alt="Phone"
          width={24}
          height={24}
          className="bg-white rounded-full p-0.5"
        />
        <p className="font-bold">Book a Call</p>
      </div>
    </button>
  );
}

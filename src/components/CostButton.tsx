import Image from "next/image";

export default function CostButton() {
  return (
    <button className="bg-blue-700 md:bg-orange-700 rounded-l-full rounded-r-full text-white md:opacity-70 px-1.5 py-1.5 pr-3 mt-8">
      <div className="flex gap-3 ">
        <Image
          src={"/rupee.png"}
          alt="$"
          width={24}
          height={24}
          className="bg-white rounded-full p-0.5"
        />
        <p className="font-bold">Get Estimated Project Cost</p>
      </div>
    </button>
  );
}

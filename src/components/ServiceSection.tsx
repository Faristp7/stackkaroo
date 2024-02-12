const services = [
  "Website Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
];

export default function ServiceSection() {
  return (
    <div className="px-4">
      <p className="font-semibold text-center pb-4">
        In the realm of digital solutions, we offer expertise in
      </p>
      <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
        {services.map((service) => (
            <div className="border p-3 border-blue-800 py-1 bg-white rounded-l-full rounded-r-full" key={service}>
              <p className="text-blue-700 text-center font-semibold">{service}</p>
            </div>
        ))}
      </div>
      <p className="font-semibold text-center my-4 ">
      showcasing our proficiency across various facets of the digital platform 
      </p>
    </div>
  );
}

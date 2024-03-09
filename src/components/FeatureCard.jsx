/* eslint-disable react/prop-types */
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col grow justify-center px-4 py-5 w-full font-semibold bg-white rounded-lg border border-solid border-neutral-200 max-md:mt-3.5 max-md:max-w-full">
    <div className="flex justify-center items-center px-1 w-10 h-10 text-xl leading-7 text-center text-black whitespace-nowrap rounded border border-solid bg-zinc-50 border-neutral-200">
      {icon}
    </div>
    <h3 className="mt-3 text-base text-neutral-700 max-md:max-w-full">
      {title}
    </h3>
    <p className="mt-2 text-sm leading-6 text-stone-400 max-md:max-w-full">
      {description}
    </p>
  </div>
);

export default FeatureCard;

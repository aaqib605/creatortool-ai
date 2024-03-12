/* eslint-disable react/prop-types */
const Card = ({ icon, title, content, tags }) => {
  return (
    <article className="flex flex-col grow justify-center p-6 w-full font-semibold bg-white rounded-lg border border-solid border-neutral-200 max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <div
        className="flex justify-center items-center px-3 text-xl leading-7 text-center text-black whitespace-nowrap rounded-3xl h-[42px] w-[42px]"
        style={{ background: icon.background }}
      >
        {icon.symbol}
      </div>
      <h2 className="mt-4 text-3xl tracking-tighter leading-10 text-zinc-800 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-gray-500 max-md:max-w-full">
        {content}
      </p>
      <div className="flex gap-2 justify-center self-start mt-4 text-sm font-medium leading-5 text-center text-violet-700 whitespace-nowrap">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="grow justify-center px-2.5 py-0.5 bg-purple-50 rounded-2xl"
          >
            #{tag}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Card;

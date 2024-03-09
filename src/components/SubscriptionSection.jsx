const SubscriptionSection = () => {
  return (
    <section className="px-16">
      <section className="flex flex-col px-20 py-10 my-16 rounded-xl border border-solid bg-[#FFFAFB] border-neutral-200 max-md:px-5 max-w-[1200px] mx-auto">
        <header className="flex gap-5 justify-between items-start font-semibold max-md:flex-wrap max-md:mr-2.5  ">
          <h1 className="flex-auto self-start text-3xl text-slate-900">
            Want to know more about the tools?
          </h1>
          <button className="flex gap-1 self-center py-3 px-16 mt-6 text-base button-background-custom text-white whitespace-nowrap shadow max-md:mt-10">
            Subscribe
          </button>
        </header>
        <p className="mt-5 text-base leading-8 text-gray-600 max-md:mr-2.5 max-md:max-w-full">
          Join the club and explore all the free tools...
        </p>
      </section>
    </section>
  );
};

export default SubscriptionSection;

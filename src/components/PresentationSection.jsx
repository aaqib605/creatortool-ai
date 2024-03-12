/* eslint-disable react/prop-types */
import Card from "./Card";

const PresentationSection = () => {
  const cardsData = [
    {
      icon: { symbol: "🖼️", background: "bg-green-200" },
      title: "UX review presentations",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Design", "Research", "Nocode"],
    },
    {
      icon: { symbol: "🌏", background: "bg-pink-100" },
      title: "Global UX Trends",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Culture", "Trends", "Innovation"],
    },
    {
      icon: { symbol: "💸", background: "bg-cyan-100" },
      title: "Monetizing UX",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Startups", "Monetization", "Strategies"],
    },
    {
      icon: { symbol: "💼", background: "bg-indigo-200" },
      title: "UX in Corporate",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Enterprise", "Customer Engagement", "Case Studies"],
    },
    {
      icon: { symbol: "😇", background: "bg-blue-200" },
      title: "Ethical Design",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Ethics", "Persuasion", "Privacy"],
    },
    {
      icon: { symbol: "👾", background: "bg-fuchsia-200" },
      title: "Gamification in UX",
      content:
        "How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.",
      tags: ["Gamification", "Engagement", "Retention"],
    },
  ];

  return (
    <div className="w-full">
      <button className="flex justify-center ml-auto my-10 px-2 py-2.5 text-sm font-semibold text-red-700 whitespace-nowrap bg-white rounded border border-solid border-neutral-200">
        Log out
      </button>
      <header className="w-full text-sm font-medium tracking-normal leading-5 text-zinc-800 max-md:max-w-full">
        Results
      </header>
      <section className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardsData.slice(0, 2).map((card, index) => (
            <div
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              key={index}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardsData.slice(2, 4).map((card, index) => (
            <div
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              key={index}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {cardsData.slice(4, 6).map((card, index) => (
            <div
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              key={index}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PresentationSection;

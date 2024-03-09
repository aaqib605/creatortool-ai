import FeatureCard from "./FeatureCard";
import doubleDownArrow from "../assets/double-down-arrow.png";

const FeatureSection = () => {
  const features = [
    {
      icon: "💡",
      title: "Video Idea Generator",
      description:
        "Generate 10 unique ideas for your next viral video. Forget the creative block",
    },
    {
      icon: "🖼️",
      title: "⁠Free Audiogram Generator",
      description:
        "Generate audiograms easily and share your audio content visually on social media.",
    },
    {
      icon: "🗒️",
      title: "YouTube video to SEO Blog Generator",
      description:
        "Convert your YouTube videos into SEO-friendly blog posts in minutes.",
    },
    {
      icon: "📝",
      title: "YouTube video to LinkedIn Post Generator",
      description:
        "Turn your videos into engaging LinkedIn posts to reach a professional audience.",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center font-medium max-w-[600px] mx-auto p-4 mt-24">
        <header className="text-sm tracking-normal leading-6 text-pink-500 whitespace-nowrap">
          All of our tools
        </header>
        <h1 className="mt-2.5 w-full text-3xl tracking-tighter text-center leading-[51.2px] text-gray-950">
          Click on any tool below and explore
        </h1>
        <img
          loading="lazy"
          src={doubleDownArrow}
          className="mt-2 w-3 aspect-[0.57]"
          alt="Tool icon"
        />
      </section>
      <section className="flex flex-col mt-10 gap-5 px-16 max-w-[1200px] mx-auto">
        {features.slice(0, 2).map((feature) => (
          <div
            className="w-full max-md:max-w-full"
            key={Math.random() * Math.random()}
          >
            <div className="flex gap-5 max-md:flex-col">
              <FeatureCard key={feature.title} {...feature} />
              <FeatureCard
                key={features[features.indexOf(feature) + 2].title}
                {...features[features.indexOf(feature) + 2]}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FeatureSection;

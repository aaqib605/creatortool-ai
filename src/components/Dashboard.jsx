/* eslint-disable react/prop-types */
import PresentationSection from "./PresentationSection";
import SidebarItem from "./SidebarItem";

const Dashboard = () => {
  const sidebarItems = [
    { icon: "💡", label: "Video Idea Generator", isSelected: false },
    { icon: "🖼️", label: "Free Audiogram Generator", isSelected: false },
    { icon: "🗒️", label: "YT video to SEO Blog", isSelected: false },
    { icon: "🔗", label: "YT video to Linkedin Post", isSelected: true },
  ];

  return (
    <main className="pr-12 pb-20 pl-5 bg-white max-md:pr-5">
      <header className="flex gap-5 max-md:flex-col max-md:gap-0">
        <nav className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full border-r-2 pr-5">
          <div className="flex gap-4 max-md:mt-10">
            <div className="flex flex-col flex-1 self-start mt-11 max-md:mt-10">
              <div className="flex flex-col px-4 font-bold">
                <div className="flex gap-4 text-2xl tracking-tighter leading-9 whitespace-nowrap text-zinc-800">
                  <img
                    loading="lazy"
                    src="./Mark.png"
                    alt=""
                    className="shrink-0 aspect-[0.75] w-[27px]"
                  />
                  <h1 className="grow">Creatortools.ai</h1>
                </div>
                <p className="mt-8 text-xs tracking-normal leading-8 text-stone-400">
                  {" "}
                  ALL CREATOR TOOLS{" "}
                </p>
              </div>
              {sidebarItems.map((item) => (
                <SidebarItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isSelected={item.isSelected}
                />
              ))}
            </div>
          </div>
        </nav>
        <PresentationSection />
      </header>
    </main>
  );
};

export default Dashboard;

import UserInfo from "./UserInfo";

const PostCard = () => {
  const avatars = [
    { src: "./like-reaction.png", alt: "Like icon" },
    { src: "./clap-reaction.png", alt: "Hands icon" },
    { src: "./heart-reaction.png", alt: "Heart icon" },
    { src: "./idea-reaction.png", alt: "Bulb icon" },
    { src: "./think-reaction.png", alt: "Thinking emoji" },
    { src: "./heart-hand-reaction.png", alt: "Heart in hand emoji" },
  ];

  return (
    <section>
      <article className="flex flex-col py-3.5 bg-white rounded-lg shadow-sm max-w-[400px] scale-90">
        <header className="flex gap-5 justify-between px-3.5 w-full">
          <UserInfo
            avatar="./panda.png"
            followers="326 followers"
            time="20 h"
            globeIcon="./globe.png"
          />
          <div className="flex gap-1 self-start px-1.5 py-1.5">
            <span className="w-[4px] h-[4px] bg-gray-500 rounded-full"></span>
            <span className="w-[4px] h-[4px] bg-gray-500 rounded-full"></span>
            <span className="w-[4px] h-[4px] bg-gray-500 rounded-full"></span>
          </div>
        </header>
        <section className="flex flex-col px-3.5 mt-4 w-full text-xs">
          <p className="leading-4 text-zinc-900">
            [Historical Fact] The West first learned of the giant panda on 11
            March 1869, when the French missionary Armand David received a skin
            from a hunter.
            <br />
            In 1936, Ruth Harkness became the first Westerner to bring back a
            live giant panda.
          </p>
          <div className="mt-3 text-right leading-[143%] text-neutral-500">
            ...see more
          </div>
        </section>
        <section className="flex flex-col px-3.5 mt-4 w-full">
          <div className="text-xs font-medium leading-4 text-sky-600">
            See translation
          </div>
          <div className="flex gap-2 mt-4 text-xs leading-3 text-neutral-500 items-center">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.src}
                alt={avatar.alt}
                className="shrink-0 aspect-square w-[21px]"
              />
            ))}
            <div className="my-auto">88</div>
            <span className="w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
            <div className="flex-auto my-auto">
              4 <span className="text-neutral-500">Comments</span>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
};

export default PostCard;

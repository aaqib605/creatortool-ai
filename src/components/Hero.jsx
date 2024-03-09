import starIcon from "../assets/star.png";
import chevronRight from "../assets/chevronRight.png";
import arrowDown from "../assets/arrow-down.png";
import thumbsUpSticker from "../assets/thumbs-up-sticker.png";
import heartSticker from "../assets/heart-sticker.png";
import plusOneSticker from "../assets/plus-one-sticker.png";
import starSticker from "../assets/star-sticker.png";

const Hero = () => {
  return (
    <section className=" text-center max-w-[736px] mx-auto px-5 mt-16">
      <header className="flex justify-center items-center gap-1">
        <span>
          <img src={starIcon} alt="star icon" />
        </span>
        <span>All the top creator tools in one place</span>
        <span>
          <img src={starIcon} alt="star icon" />
        </span>
      </header>
      <main className="flex flex-col justify-center items-center relative text-center">
        <section className="mt-6 w-full text-6xl tracking-tighter text-center leading-[74px] text-gray-950 max-md:max-w-full max-md:text-4xl max-md:leading-[59px] ">
          <h1>
            <span className="font-semibold text-white text-shadow-custom">
              Top Creator tools
            </span>
            <span className="text-zinc-800">
              {" "}
              for making those videos go viral{" "}
            </span>
            <span className="font-semibold text-zinc-800">🚀</span>
          </h1>
        </section>
        <section>
          <p className="my-6 w-full text-2xl font-medium tracking-normal leading-8 text-center text-stone-400 max-md:max-w-full">
            We are ready to be your creator co-pilot. Generate ideas, SEO
            friendly blogs & Linkedin posts from videos, Audiograms
          </p>
        </section>
        <section>
          <button className="flex gap-1 self-center p-3 mt-6 text-base button-background-custom text-white whitespace-nowrap shadow max-md:mt-10">
            <span className="grow">Login and explore</span>
            <img
              src={chevronRight}
              alt="right chevron"
              className="shrink-0 my-auto w-3 aspect-square"
            />
          </button>
        </section>
        <section className="mt-6">
          <div className="flex gap-2 items-center justify-center text-base font-semibold tracking-normal leading-6 text-pink-500 ">
            <img src={arrowDown} alt="down arrow" />
            <span className="">scroll down to explore</span>
            <img src={arrowDown} alt="down arrow" />
          </div>
        </section>
        <section className="stickers">
          <img
            src={thumbsUpSticker}
            alt="thumbs up sticker"
            className="h-[70px] w-[70px] absolute bottom-16 -left-24 hidden md:flex"
          />
          <img
            src={heartSticker}
            alt="heart sticker"
            className="h-[70px] w-[70px] absolute top-24 -left-8 hidden md:flex"
          />
          <img
            src={plusOneSticker}
            alt="plus one sticker"
            className="h-[70px] w-[70px] absolute bottom-24 -right-24 hidden md:flex"
          />
          <img
            src={starSticker}
            alt="star sticker"
            className="h-[70px] w-[70px] absolute top-16 -right-14 hidden md:flex"
          />
        </section>
      </main>
    </section>
  );
};
export default Hero;

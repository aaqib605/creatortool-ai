import InputField from "./InputField";
import PostCard from "./PostCard";

function PostGenerator() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
      <section className="pt-10 px-5 lg:col-span-2">
        <header className="flex justify-between items-center">
          <div className="flex gap-4 text-2xl font-bold tracking-tighter leading-9 whitespace-nowrap text-zinc-800">
            <img
              src="./Mark.png"
              alt="logo"
              className="shrink-0 aspect-[0.75] w-[27px]"
            />
            <span className="grow">Creatortools.ai</span>
          </div>
        </header>
        <section className="flex flex-col justify-center text-sm max-w-[444px] text-zinc-800 mt-10">
          <header className="w-full text-3xl font-semibold tracking-tighter leading-10">
            YouTube video to LinkedIn Post Generator
          </header>
          <p className="mt-2 w-full text-base tracking-normal leading-8 text-stone-400">
            Generate 2 unique SEO blog for your next viral video.
          </p>
          <InputField
            label="Enter the youtube video link"
            placeholder="https://youtu.be/"
          />
          <InputField
            label="Blog Tone/Mood"
            placeholder="Funny, Educational, Inspirational.."
          />

          <button className="flex justify-center items-center px-16 py-3 mt-5 w-full font-semibold text-white whitespace-nowrap rounded shadow cursor-pointer bg-[#5072EA]">
            <div className="flex gap-1">
              <span className="grow">Generate</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90a855a908fe7e2a27a744b569538e6a8468964700b26bc994d225e37569485b?apiKey=54e966ad23db4953b9c12094fdfa3a63&"
                alt="Generate"
                className="shrink-0 my-auto w-3 aspect-square"
              />
            </div>
          </button>
        </section>
      </section>
      <section className="pt-10 bg-[#F0F3F8] flex flex-col  items-center justify-self-stretch">
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </section>
  );
}

export default PostGenerator;

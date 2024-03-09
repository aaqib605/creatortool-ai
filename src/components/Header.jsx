import logo from "../assets/Mark.png";
import userIcon from "../assets/user.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-10 px-5 md:px-20 w-[90%] mx-auto">
      <div className="flex gap-4 text-2xl font-bold tracking-tighter leading-9 whitespace-nowrap text-zinc-800">
        <img
          src={logo}
          alt="logo"
          className="shrink-0 aspect-[0.75] w-[27px]"
        />
        <span className="grow">Creatortools.ai</span>
      </div>
      <button className="flex items-center gap-1 p-2 text-sm font-semibold whitespace-nowrap bg-white rounded border border-solid border-neutral-200 text-gray-950">
        <img
          loading="lazy"
          src={userIcon}
          alt="user icon"
          className="shrink-0 w-5 aspect-square"
        />
        <span>Log in</span>
      </button>
    </header>
  );
};

export default Header;

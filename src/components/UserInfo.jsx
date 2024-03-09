/* eslint-disable react/prop-types */
const UserInfo = ({ avatar, name, followers, time, globeIcon }) => (
  <div className="flex gap-1.5 text-xs leading-3 whitespace-nowrap text-neutral-500">
    <img
      src={avatar}
      alt=""
      className="shrink-0 self-start aspect-square w-[43px]"
    />
    <div className="flex flex-col flex-1">
      <div className="text-xs font-medium leading-4 text-zinc-900">{name}</div>
      <div>{followers}</div>
      <div className="flex gap-1 pr-7 items-center">
        <div>{time}</div>
        <span className="w-[4px] h-[4px] bg-gray-500 rounded-full"></span>
        <img
          src={globeIcon}
          alt=""
          className="shrink-0 self-start w-3 h-3 aspect-[0.93]"
        />
      </div>
    </div>
  </div>
);

export default UserInfo;

/* eslint-disable react/prop-types */
const SidebarItem = ({ icon, label, isSelected }) => (
  <div
    className={`flex gap-1 px-2 py-3 whitespace-nowrap rounded ${
      isSelected
        ? "text-zinc-800 bg-stone-50 border border-solid border-neutral-100"
        : "text-sm font-medium text-stone-400"
    }`}
  >
    <div className="text-xl font-semibold leading-7 text-center">{icon}</div>
    <div className="flex-auto my-auto">{label}</div>
  </div>
);

export default SidebarItem;

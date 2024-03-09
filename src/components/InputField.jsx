/* eslint-disable react/prop-types */
function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="mt-5 flex flex-col">
      <label className="w-full font-medium tracking-normal leading-[143%]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="justify-center px-3.5 py-2.5 mt-1.5 tracking-normal leading-6 text-gray-400 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-neutral-200"
        aria-label={label}
      />
    </div>
  );
}

export default InputField;

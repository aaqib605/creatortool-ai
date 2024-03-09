const Footer = () => {
  return (
    <section className="px-5 md:px-16">
      <footer className="flex flex-col justify-center px-4 py-6 mb-5 text-base leading-6 text-gray-500 bg-gray-50 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-5 justify-between w-full md:flex-wrap md:max-w-full">
          <div className="flex-auto">
            © 2023 Company Name. All rights reserved.
          </div>
          <div className="flex gap-5 md:justify-between whitespace-nowrap">
            <div className="md:grow">Privacy Policy</div>
            <div className="md:grow">Terms and conditions</div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;

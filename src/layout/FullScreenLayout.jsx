import Footer from "./Footer";

const FullScreenLayout = ({ children }) => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <header className="flex justify-center px-5 md:pb-10 pt-14 md:px-10 md:justify-start">
        <a href="/">
          <img src="./src/assets/images/logos/logo.svg" width="135" height="45" alt="quisto logo" />
        </a>
      </header>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default FullScreenLayout;
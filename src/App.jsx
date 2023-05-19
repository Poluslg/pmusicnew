import Header from "./Components/Header";
import AfterLogin from "./Components/AfterLogin";

export const App = () => {
  return (
    <>
      <Header />
      <div
        id="content"
        className="sm:blur-0 z-[0] overflow-hidden scroll-smooth hover:scroll-auto md:scroll-auto"
      >
        <AfterLogin />
      </div>
    </>
  );
};

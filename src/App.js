import logo from "./logo.svg";
import FullWidthCTA from "./components/full-width-cta";
import "./App.css";

function App() {
  const cta1 = {
    url: "https://tx.shadcn.com/",
    target: "_self",
    title: "Get Started",
    color: "dark",
  };

  const cta2 = {
    url: "https://tx.shadcn.com/",
    target: "_blank",
    title: "Github",
    color: "bright",
  };

  const ctaList = [cta1, cta2];
  return (
    <>
      <div className="font-bold text-5xl underline">Test</div>{" "}
      <FullWidthCTA
        title={"Boost your productivity. Start using our app today."}
        content={
          "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea."
        }
        ctaList={ctaList}
        imageURL={"/testImage1.jpg"}
        backgroundColor={"#000"}
        textColor={"#fff"}
      />{" "}
    </>
  );
}

export default App;

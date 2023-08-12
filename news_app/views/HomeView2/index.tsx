import NavBar from "../../component/navBar";

const HomeView2 = () => {
  const navOptions = [
    { name: "Features", href: "#" },
    { name: "Team", href: "#" },
    { name: "SignIn", href: "#" },
  ];
  return (
    <>
      <header className="md:flex md:justify-center ">
        <div>
          <NavBar navOptions={navOptions} logoUrl={"/fylo/logofylo.svg"} />
        </div>
      </header>
      <main>
        <div className=" w-full ">
          <div className="flex justify-center  pt-28">
            <img src={`/fylo/illustration-intro.png`} alt="intro" />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeView2;

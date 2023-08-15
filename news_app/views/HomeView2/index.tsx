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
        <div className="flex flex-col justify-center items-center">
          
            <h1 className="text-4xl my-4 ">All your files in one secure location,  </h1>
            <h1 className="text-4xl mb-4">accessible anywhere.</h1>
          
          <p className="text-sm text-gray-400">Fylo stroes your most important files in one secure location.</p>
          <p className="text-sm text-gray-400">Access them wherever you need, share and collaborate with friends and family, and co-workers.</p>
          <button className="my-8 bg-blue-300 text-xl py-4 px-4 rounded-2xl border-2 transition-colors transiton  hover:bg-pink-900 hover:text-2xl"> Get Started</button>
        </div>
        
      </main>
    </>
  );
};

export default HomeView2;

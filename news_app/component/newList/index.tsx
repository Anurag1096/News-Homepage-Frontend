const NewList = () => {
  const listData = [
    {
      id: "1",
      title: "Hydrogen vs Electric cars",
      info: "Will hydrogen-fuled cars ever catchup to Ev's ?",
    },
    {
      id: "2",
      title: "The downside of AI Artistry",
      info: "What are the possible adverse effects of on demand Ai-image genration?",
    },
    {
      id: "3",
      title: "Is VC Funding drying up?",
      info: "Private funding by vc firms is down by 50%",
    },
  ];

  const renderList = listData.map((item, index) => {
    return (
      <>
        <div key={item.id}>
          <div className="mt-4 text-sm text-white cursor-pointer hover:text-yellow-400 ">
            {item.title}
          </div>
          <p className="text-xs text-gray-400">{item.info}</p>
          <div className="w-full   mt-4 h-[1px] border-[1px] border-cyan-300  "></div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className=" bg-black py-10 px-10 min-h-[350px] md:max-w-[280px] ">
        <h1 className="text-yellow-400  font-extrabold">NEW</h1>
        {renderList}
      </div>
    </>
  );
};

export default NewList;

import Image from "next/image";

const CardComp = () => {
  const cardData = [
    {
      id: "1",
      img: "/image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      info: "what happens when old PCs are given modern upgrades? ",
    },
    { id: "2", img: "/image-top-laptops.jpg", title: "Top 10 Laptops of 2023", info: "Our best picks for various needs and budgets" },
    { id: "3", img: "/image-gaming-growth.jpg", title: "The Growth Of Gaming", info: "How the pandamic has sparked fresh opportunites" },
  ];

  const renderCards=cardData.map((item)=>{
    return(
    <div key={item.id} className="flex px-2 py-2 md:px-20 md:py-10" >
        <div > 
            <Image src={item.img} alt="image" width="100" height="50" />
        </div>
        <div className="ml-4">
            <h3 className=" font-extralight text-gray-400 text-xl pb-1">0{item.id}</h3>
            <h5 className="  text-base font-extrabold pb-1">{item.title}</h5>
            <p className=" text-sm font-thin text-gray-500" >{item.info}</p>
        </div>
    </div>
)
  })

  return <>
  <div className="md:flex md:justify-center ">

  {renderCards}
  </div>
  </>;
};

export default CardComp;

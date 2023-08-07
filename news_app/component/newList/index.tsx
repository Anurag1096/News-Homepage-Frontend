const NewList = () => {
  const listData = [
    { id: "1", title: "lsdkfj", info: "lskdfjklsdsjfkl"},
    { id: "1", title: "lsdkfj", info: "lskdfjklsdsjfkl" },
    { id: "1", title: "lsdkfj", info: "lskdfjklsdsjfkl" },
  ];

const renderList= listData.map((item,index)=>{
    return(<>
    <div>{item.title}</div>
    <p>{item.info}</p>
    <div className="w-full mt-2 h-1 border-2 "></div>
    </>)
})

  return <>
  

  <h1>NEW</h1>
  <div className="p-4">

  {renderList}
  </div>
  
  </>;
};

export default NewList;

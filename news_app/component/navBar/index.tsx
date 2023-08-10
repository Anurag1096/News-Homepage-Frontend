

const NavBar=()=>{
    return(<>
        {/* MObile NavBar start */}
        <div className="flex justify-between p-2 sm:hidden">
            <div>logo</div>
            <div>Hamburg icon</div>
        </div>
        <div className="sm:hidden">
            <ul>
                <li>Home</li>
            </ul>
        </div>
        {/* Mobile NavBar end */}
           {/* Desktop NavBar start */}
           <div className="hidden sm:flex  sm:p-2 sm:space-x-96  ">
            <div>logo</div>
            <div>
                <ul className="flex space-x-4">
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </div>
           </div>
           {/* Destkop NavBar end */}

    </>)
}

export default NavBar;
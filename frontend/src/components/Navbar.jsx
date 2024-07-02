const Navbar = () => {
  return (
    <div className="bg-white w-screen flex items-center justify-center border border-1">
        <div className="flex items-center">
            <img src="https://lemontechnologies.net/images/logo.png" alt="logo" className="w-6 h-6 m-3"/>
            <p>Studies</p>
        </div>
        <div className="flex mx-10 justify-between">
            <ul className="flex">
            {["Home","About Us","Services","Countries","Testimonials","FAQ","Contact"].map((nav, index) => (
                <div className="p-2" key={index}>
                    <li>{nav}</li>
                </div>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar
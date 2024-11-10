import Image from "next/image";

const Navbar = ()=>{
    return (
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex">
                <Image src="/search.png" alt="" width={14} height={14}/>
                <input type="text" placeholder="Search..." />
            </div>
            {/* ICONS AND USER */}
            <div className="">
                <div className="">
                    <Image src="/message.png" alt="" width={20} height={20}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
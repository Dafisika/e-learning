import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";

function Navbar(props) {
    const { account } = props;
    return (
        <nav className="flex justify-between items-center py-3 px-30 border-b border-[#3A35411F] gap-9">
            <img src={Logo} />

            {account ? (
                <div className=" flex items-center gap-6">
                    <a className="font-DMSans text-base font-medium tracking-[0.2%] text-[#3a3541ad;] ">
                        Kategori
                    </a>
                    <img className="" src={Avatar} alt="" />
                </div>
            ) : null}
        </nav>
    );
}
export default Navbar;

import Logo from "/logo/videobelajar.png";
import Avatar from "/avatar/Avatar.png";
import IconFb from "/icon/fb.png";
import IconIg from "/icon/ig.png";
import IconLinkedin from "/icon/linkedin.png";
import IconTwitter from "/icon/twitter.png";
import Card1 from "/cover/card-1.png";
import Avatar1 from "/avatar/Avatar-1.png";
import Article from "../../data/Article.json";
import Footer from "../../components/Footer";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";

function All() {
    return (
        <>
            <Navbar account={true} />
            <main className="bg-white flex flex-col justify-center py-16 px-30 gap-9 ">
                <header className="flex flex-col w-full h-full gap-2.5 ">
                    <h1 className="font-poppins font-semibold text-[32px] leading-[110%] text-[#222325]">
                        Koleksi Video Pembelajaran Unggulan
                    </h1>
                    <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                </header>

                <aside className="bg-white flex flex-col w-[366px] border border-[#3A35411F] rounded-[10px] p-5 gap-4">
                    <div className="flex justify-between">
                        <p className="font-poppins font-semibold text-[18px] leading-[120%] text-[#333333AD]">
                            Filter
                        </p>
                        <p className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#FF5C2B]">
                            Reset
                        </p>
                    </div>
                    <div className=""></div>
                </aside>
            </main>
        </>
    );
}
export default All;

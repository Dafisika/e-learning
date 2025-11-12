import Navbar from "../components/navbar/Navbar";
import Avatar from "/avatar/Avatar.png";

function Home() {
    return (
        <>
            <Navbar account={true} />

            <main className="bg-[#fffdf3] w-dvw h-dvh flex flex-col justify-center py-16 px-30 gap-16 ">
                <section className="banner">
                    <h1>
                        Revolusi Pembelajaran: Temukan Ilmu Baru melalui
                        Platform Video Interaktif!
                    </h1>
                    <p>
                        Temukan ilmu baru yang menarik dan mendalam melalui
                        koleksi video pembelajaran berkualitas tinggi. Tidak
                        hanya itu, Anda juga dapat berpartisipasi dalam latihan
                        interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                    <button className="daftar-banner">
                        Temukan Video Course untuk Dipelajari!
                    </button>
                </section>
            </main>
        </>
    );
}

export default Home;

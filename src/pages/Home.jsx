import Navbar from "../components/navbar/Navbar";
import Avatar from "/avatar/Avatar.png";
import banner from "/banner/banner.jpg";
import Button from "../components/button/Button";
import Logo from "/logo/videobelajar.png";
import IconFb from "icon/fb.png";
import IconIg from "icon/ig.png";
import IconLinkedin from "icon/linkedin.png";
import IconTwitter from "icon/twitter.png";

function Home() {
    return (
        <>
            <Navbar account={true} />

            <main className="bg-[#fffdf3] w-dvw h-dvh flex flex-col justify-center py-16 px-30 gap-16 ">
                <div className="relative ">
                    <div className="bg-[url(/banner/banner.jpg)] w-full h-[400px] rounded-[10px] bg-center"></div>
                    <section className="bg-black/80 absolute top-0 left-0 w-full h-[400px] pt-20.5 px-35 pb-16 140px] gap-6 rounded-[10px] flex flex-col justify-center items-center ">
                        <h1 className="font-poppins! font-bold text-5xl line leading-[110.00000000000001%] text-center text-white">
                            Revolusi Pembelajaran: Temukan Ilmu Baru melalui
                            Platform Video Interaktif!
                        </h1>
                        <p className="font-medium text-base leading-[140%] text-center text-white">
                            Temukan ilmu baru yang menarik dan mendalam melalui
                            koleksi video pembelajaran berkualitas tinggi. Tidak
                            hanya itu, Anda juga dapat berpartisipasi dalam
                            latihan interaktif yang akan meningkatkan pemahaman
                            Anda.
                        </p>
                        <Button
                            text="Temukan Video Course Untuk Dipelajari!"
                            customStyle="bg-[#3ecf4c] text-white"
                        />
                    </section>
                </div>
                <article className="flex flex-col gap-8">
                    <section className="flex flex-col w-full h-full gap-2.5 ">
                        <h2 className="font-poppins font-semibold text-[32px] leading-[110%] text-[#222325]">
                            Koleksi Video Pembelajaran Unggulan
                        </h2>
                        <p className="font-medium text-base  text-[#333333ad] tracking-[0.2%]">
                            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                        </p>
                    </section>
                    <section className=" flex py-3 pe-9 gap-6 font-normal text-base leading-[140%] tracking-[0.2%] text-[#333333ad] ">
                        <div className="flex flex-col gap-1.5">
                            Semua Kelas
                            <hr className="w-[52px] h-1.5 border-none outline-none rounded-[10px] bg-[#f64920]" />
                        </div>
                        <div className="">Pemasaran</div>
                        <div className="feature">Desain</div>
                        <div className="feature">Pengembangan Diri</div>
                        <div className="feature">Bisnis</div>
                    </section>
                </article>
                <footer>
                    <div class="info">
                        <section class="info-1">
                            <img
                                src="/logo/videobelajar.png
"
                                alt=""
                            />
                            <p class="name">
                                Gali Potensi Anda Melalui Pembelajaran Video di
                                hariesok.id
                            </p>
                            <p class="address">
                                Jl. Usman Effendi No. 50 Lowokwaru, Malang
                            </p>
                            <p class="number">+62-877-7123-1234</p>
                        </section>

                        <section class="info-2">
                            <div class="section-1">
                                <div class="section-title">
                                    <p>Kategori</p>
                                    <svg
                                        class="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="#3A35418A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="section-desc">
                                    <a href="">Digital & Teknologi</a>
                                    <a href="">Pemasaran</a>
                                    <a href="">Manajemen Bisnis</a>
                                    <a href="">Pengembangan Diri</a>
                                    <a href="">Desain</a>
                                </div>
                            </div>
                            <div class="section-1">
                                <div class="section-title">
                                    <p>Perusahaan</p>
                                    <svg
                                        class="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="#3A35418A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="section-desc">
                                    <a href="">Tentang Kami</a>
                                    <a href="">FAQ</a>
                                    <a href="">Kebijakan Privasi</a>
                                    <a href="">Ketentuan Layanan</a>
                                    <a href="">Bantuan</a>
                                </div>
                            </div>
                            <div class="section-1">
                                <div class="section-title">
                                    <p>Komunitas</p>
                                    <svg
                                        class="arrow"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            stroke-width="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="#3A35418A"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="section-desc">
                                    <a href="">Tips Sukses</a>
                                    <a href="">Blog</a>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section class="line">
                        <hr />
                    </section>

                    <section class="info-3">
                        <div class="copyright">
                            @2023 Gerobak Sayur All Rights Reserved.
                        </div>
                        <div class="sosmed">
                            <div class="sosmed-1">
                                <img src="/icon/linkedin.png" alt="" />
                            </div>
                            <div class="sosmed-1">
                                <img src="/icon/fb.png" alt="" />
                            </div>
                            <div class="sosmed-1">
                                <img src="/icon/ig.png" alt="" />
                            </div>
                            <div class="sosmed-1">
                                <img src="/icon/twitter.png" alt="" />
                            </div>
                        </div>
                    </section>
                </footer>
            </main>
        </>
    );
}

export default Home;

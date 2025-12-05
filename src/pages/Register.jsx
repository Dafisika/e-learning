import Button from "../components/button/Button";
import Logo from "/logo/videobelajar.png";
import Google from "/logo/google.png";
import Navbar from "../components/navbar/Navbar";

function Register() {
    return (
        <>
            <Navbar />
            <div className="bg-[#FFFDF3] flex justify-center items-center min-h-screen h-full py-16 px-30 gap-8">
                <div className="bg-white w-[320px] xl:w-[590px] flex flex-col h-full p-9 gap-9 border border-[#f1f1f1] rounded-sm">
                    <div className="text-center items-center w-full h-full gap-2.5 font-semibold">
                        <h1 className="font-DMSans font-semibold text-[24px] xl:text-[32px]">
                            Pendaftaran Akun
                        </h1>
                        <p className="font-DMSans font-normal text-sm xl:text-base">
                            Yuk, daftarkan akunmu sekarang juga!
                        </p>
                    </div>

                    <form className=" flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col w-full h-full font-normal text-base gap-4">
                                <div className="mb-1">
                                    <label for="nama-lengkap">
                                        Nama Lengkap{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                        id="nama-lengkap"
                                        type="text"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label for="email">
                                        E-Mail{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="mb-1">
                                    <label for="no">
                                        No. Hp
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <div className="flex">
                                        <input
                                            className="w-[100px] h-full border border-[#f1f1f1] rounded-md mr-2 py-3 px-2.5 text-base"
                                            id="phone"
                                            type="tel"
                                        />
                                        <input
                                            className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                            id="no"
                                            type="tel"
                                        />
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <label for="kata-sandi">
                                        Kata Sandi{" "}
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                        id="kata-sandi"
                                        type="password"
                                    />
                                    <button
                                        className="button-eye"
                                        id="button-eye"
                                        type="button"
                                    ></button>
                                </div>
                                <div className="w-full flex flex-col mb-1">
                                    <div className="flex flex-col w-full h-full font-normal text-base ">
                                        <label
                                            className=""
                                            for="konfirmasi-sandi"
                                        >
                                            Konfirmasi Kata Sandi{" "}
                                            <span className="text-red-600">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            className="w-full h-full border border-[#f1f1f1] rounded-md py-3 px-2.5 text-base"
                                            id="konfirmasi-sandi"
                                            type="password"
                                        />
                                        <button
                                            className="mb-1"
                                            id="konfirmasi-eye"
                                            type="button"
                                        ></button>
                                    </div>
                                    <a className="text-end w-full" href="">
                                        Lupa Password?
                                    </a>
                                </div>
                            </div>

                            <Button
                                text="Register"
                                customStyle="bg-[#3ecf4c] text-white"
                            />

                            <Button
                                text="Masuk"
                                customStyle="bg-[#E2FCD9CC] text-[#3ecf4c]"
                            />
                        </div>
                        <div className="flex justify-center items-center text-center gap-2.5 w-full mt-2.5 mb-2.5">
                            <hr className="w-[40%] border border-[#f1f1f1]" />
                            <p className="font-normal text-base">Atau</p>
                            <hr className="w-[40%] border border-[#f1f1f1]" />
                        </div>

                        <button className="flex justify-center items-center w-[250px] xl:w-[518px] xl:h-[42px] border border-[#f1f1f1] text-[#333333ad] text-center outline-none rounded-2.5 py-2.5 xl:px-25 pointer font-bold text-base">
                            <img class="logo-google" src={Google} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;

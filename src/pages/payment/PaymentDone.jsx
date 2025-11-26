import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import AvatarFemale from "/avatar/online-shopping-female.png";

function PaymentDone() {
    return (
        <>
            <Navbar paymentDone={true} />
            <main className="bg-[#FFFDF3]">
                <section className="bg-white flex flex-col border border-[#3A35411F] rounded-[10px] pt-6 pb-16 px-9">
                    <div className="flex flex-col items-center gap-6">
                        <img src="/avatar/online-shopping-female.png" alt="" />
                        <div className="flex flex-col items-center gap-3 ">
                            <h1 className="font-poppins! font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                Pembayaran Berhasil!
                            </h1>
                            <p className="font-normal text-lg text-[#333333AD] leading-[120%] tracking-[0.2%]">
                                Silakan cek email kamu untuk informasi lebih
                                lanjut. Hubungi <br /> kami jika ada kendala.
                            </p>
                        </div>
                        <Button
                            text="Lihat Detail Pesanan"
                            customStyle="bg-[#3ecf4c] text-white"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
export default PaymentDone;

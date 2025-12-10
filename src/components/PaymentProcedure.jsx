import { useState } from "react";
import Button from "./button/Button";

function PaymentProcedure(props) {
    const { title, item } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full flex flex-col gap-6">
            <div
                onClick={() => setOpen(!open)}
                className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5"
            >
                <p className="font-poppins! font-bold text-base leading-[140%] tracking-[0.2px]  text-text-dark-primary">
                    {title}
                </p>
                <div>
                    <svg
                        className={`
                            ${open ? "" : "-rotate-180"}
                        transition-all duration-300`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16L12 9L19 16"
                            stroke="#333333"
                            stroke-opacity="0.68"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            {open && (
                <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                    {item.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            )}
            {/* <div
                    onClick={() => setMobileBanking(true)}
                    className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5"
                >
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        Mobile Banking BCA
                    </p>
                    <div>
                        <svg
                            className={`
                            ${mobileBanking ? "" : "-rotate-180"}
                        transition-all duration-300`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 16L12 9L19 16"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                {mobileBanking && (
                    <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                        <li>Buka Aplikasi BCA Mobile</li>
                        <li>Pilih "m-BCA", kemudian pilih "m-Transfer"</li>
                        <li>Pilih "BCA Virtual Account"</li>
                        <li>Masukkan nomor Virtual Account, lalu pilih "OK"</li>
                        <li>
                            Klik tombol "Send" yang berada di sudut kanan atas
                            aplikasi untuk melakukan transfer
                        </li>
                        <li>Klik "OK" untuk melanjutkan pembayaran</li>
                        <li>
                            Masukkan PIN Anda untuk meng-otorisasi transaksi
                        </li>
                        <li>Transaksi Anda telah selesa</li>
                    </ol>
                )}
                <div
                    onClick={() => setInternetBanking(true)}
                    className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5"
                >
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        Internet Banking BCA
                    </p>
                    <div>
                        <svg
                            className={`
                            ${internetBanking ? "" : "-rotate-180"}
                        transition-all duration-300`}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 16L12 9L19 16"
                                stroke="#333333"
                                stroke-opacity="0.68"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                {internetBanking && (
                    <ol className="list-decimal font-normal text-lg leading-[140%] tracking-[0.2%] text-[#333333AD] py-4 px-5 gap-4">
                        <li>Login ke KlikBCA Individual</li>
                        <li>
                            Pilih "Transfer", kemudian pilih "Transfer ke BCA
                            Virtual Account
                        </li>
                        <li>Masukkan nomor Virtual Account</li>
                        <li>Pilih "Lanjutkan" untuk melanjutkan pembayaran</li>
                        <li>
                            Masukkan "RESPON KEYBCA APPLI 1" yang muncul pada
                            Token BCA Anda, lalu klik tombol "Kirim
                        </li>
                        <li>Pembayaran telah selesai</li>
                    </ol>
                )} */}
        </div>
    );
}
export default PaymentProcedure;

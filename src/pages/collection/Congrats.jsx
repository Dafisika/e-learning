import AsideProgress from "../../components/aside/AsideProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import NavbarProgress from "../../components/navbar/NavbarProgress";
import congratulation from "/etc/congratulation.png";

function Congrats() {
    return (
        <>
            <NavbarProgress />
            <main className="grid grid-cols-3">
                <section className="flex flex-col col-span-2">
                    <img src={congratulation} alt="" />
                    <section className="flex flex-col py-9 px-28 gap-6">
                        <div className="flex flex-col gap-5">
                            <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                Tanggal Pretest:
                            </h1>
                            <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                23 September 2022, 10:20 AM
                            </p>
                        </div>
                        <div className="grid grid-cols-4 border border-[#3A35411F]">
                            <div className="bg-[#38D189] flex flex-col border-e border-[#3A35411F] py-[18px] px-3 gap-2.5">
                                <p className="font-bold text-base text-white leading-[140%] tracking-[0.2]">
                                    Nilai
                                </p>
                                <p className="font-semibold text-2xl text-white leading-[120%]">
                                    100
                                </p>
                            </div>
                            <div className="flex flex-col border-e border-[#3A35411F] py-[18px] px-3 gap-2.5">
                                <p className="font-bold text-base text-[#333333AD] leading-[140%] tracking-[0.2]">
                                    Soal
                                </p>
                                <p className="font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                    10
                                </p>
                            </div>
                            <div className="flex flex-col border-e border-[#3A35411F] py-[18px] px-3 gap-2.5">
                                <p className="font-bold text-base text-[#333333AD] leading-[140%] tracking-[0.2]">
                                    Benar
                                </p>
                                <p className="flex gap-2 font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2.25031C6.62394 2.25031 2.25003 6.62421 2.25003 12.0003C2.25003 17.3764 6.62394 21.7503 12 21.7503C17.3761 21.7503 21.75 17.3764 21.75 12.0003C21.75 6.62421 17.3761 2.25031 12 2.25031ZM17.0742 8.73265L10.7743 16.2326C10.7051 16.315 10.6192 16.3815 10.5221 16.4276C10.4251 16.4738 10.3192 16.4986 10.2117 16.5003H10.1991C10.094 16.5003 9.99003 16.4781 9.89401 16.4353C9.798 16.3925 9.71205 16.33 9.64175 16.2519L6.94175 13.2519C6.87318 13.1791 6.81984 13.0934 6.78486 12.9998C6.74989 12.9062 6.73398 12.8065 6.73808 12.7066C6.74218 12.6067 6.7662 12.5087 6.80873 12.4182C6.85127 12.3278 6.91145 12.2467 6.98575 12.1799C7.06005 12.113 7.14697 12.0617 7.24139 12.0289C7.33582 11.9961 7.43584 11.9825 7.53559 11.9889C7.63534 11.9953 7.7328 12.0216 7.82225 12.0662C7.91169 12.1109 7.99132 12.1729 8.05644 12.2487L10.1794 14.6075L15.9258 7.76796C16.0547 7.61894 16.2371 7.52662 16.4335 7.51097C16.6299 7.49532 16.8246 7.55759 16.9755 7.68432C17.1263 7.81105 17.2213 7.99207 17.2398 8.18823C17.2582 8.3844 17.1988 8.57996 17.0742 8.73265Z"
                                            fill="#38D189"
                                        />
                                    </svg>
                                    10
                                </p>
                            </div>
                            <div className="flex flex-col border-e border-[#3A35411F] py-[18px] px-3 gap-2.5">
                                <p className="font-bold text-base text-[#333333AD] leading-[140%] tracking-[0.2]">
                                    Salah
                                </p>

                                <p className="flex gap-2 font-semibold text-2xl text-text-dark-primary leading-[120%]">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 2.24957C6.62392 2.24957 2.25002 6.62348 2.25002 11.9996C2.25002 17.3757 6.62392 21.7496 12 21.7496C17.3761 21.7496 21.75 17.3757 21.75 11.9996C21.75 6.62348 17.3761 2.24957 12 2.24957ZM15.5302 14.4694C15.6027 14.5384 15.6608 14.6212 15.7009 14.7129C15.7409 14.8046 15.7622 14.9034 15.7635 15.0035C15.7648 15.1036 15.746 15.203 15.7083 15.2957C15.6706 15.3885 15.6147 15.4727 15.5439 15.5435C15.4731 15.6143 15.3889 15.6702 15.2962 15.7079C15.2034 15.7456 15.1041 15.7644 15.004 15.7631C14.9039 15.7618 14.8051 15.7405 14.7133 15.7004C14.6216 15.6603 14.5388 15.6023 14.4699 15.5297L12 13.0604L9.53017 15.5297C9.38837 15.6644 9.19956 15.7384 9.00399 15.7359C8.80842 15.7334 8.62156 15.6546 8.48326 15.5163C8.34496 15.378 8.26616 15.1912 8.26365 14.9956C8.26115 14.8 8.33514 14.6112 8.46986 14.4694L10.9392 11.9996L8.46986 9.52973C8.33514 9.38793 8.26115 9.19912 8.26365 9.00355C8.26616 8.80798 8.34496 8.62112 8.48326 8.48282C8.62156 8.34452 8.80842 8.26572 9.00399 8.26321C9.19956 8.26071 9.38837 8.3347 9.53017 8.46942L12 10.9388L14.4699 8.46942C14.6117 8.3347 14.8005 8.26071 14.996 8.26321C15.1916 8.26572 15.3785 8.34452 15.5168 8.48282C15.6551 8.62112 15.7339 8.80798 15.7364 9.00355C15.7389 9.19912 15.6649 9.38793 15.5302 9.52973L13.0608 11.9996L15.5302 14.4694Z"
                                            fill="#FF5C2B"
                                        />
                                    </svg>
                                    0
                                </p>
                            </div>
                        </div>
                        <p className="font-normal text-lg text-text-dark-primary leading-[140%] tracking-[0.2px]">
                            Selesai!
                        </p>
                        <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                            Pretest sudah selesai dan kami sudah mengetahui
                            progresmu
                        </p>
                        <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                            Saatnya memulai kelas!
                        </p>
                    </section>
                </section>
                <AsideProgress />
            </main>
            <FooterProgress />
        </>
    );
}
export default Congrats;

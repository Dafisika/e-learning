import Button from "./button/Button";

function PaymentProcedure(props) {
    const { customTitle, addButton } = props;
    return (
        <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
            <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                {customTitle}
            </p>
            <div className="h-full flex flex-col gap-6">
                <div className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5">
                    <p className="font-poppins! font-semibold text-lg leading-[120%]  text-text-dark-primary">
                        Transfer Bank
                    </p>
                    <div className="rotate-180">
                        <svg
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
                <div className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5">
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        E-Wallet
                    </p>
                    <div className="rotate-180">
                        <svg
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
                <div className="flex justify-between border border-[#3A35411F] rounded-[10px] p-5">
                    <p className="font-poppins! font-semibold text-lg leading-[120%] text-text-dark-primary">
                        Kartu Kredit/Debit
                    </p>
                    <div className="rotate-180">
                        <svg
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
            </div>
            {addButton && (
                <Button
                    text="Bayar Sekarang"
                    customStyle="bg-[#3ecf4c] text-white"
                />
            )}
        </section>
    );
}
export default PaymentProcedure;

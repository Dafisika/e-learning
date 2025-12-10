import Button from "../../components/button/Button";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/Product";
import BcaFull from "/bank/bca-full.png";
import OrderSummary from "../../components/order/OrderSummary";
import PaymentProcedure from "../../components/PaymentProcedure";
import Card1 from "/cover/card-1.png";
import HowToPayment from "../../data/HowToPayment.json";

function Payment() {
    return (
        <>
            <Navbar payment={true} />
            <main className="bg-[#FFFDF3]">
                <section className="bg-[#FEE8D2CC] flex justify-center items-center py-3 gap-4">
                    <p className="font-medium text-lg leading-[140%] tracking-[0.2px] text-[#333333AD]">
                        Selesaikan pemesanan dalam
                    </p>
                    <div className="flex items-center font-bold text-base leading-[140%] tracking-[0.2px] text-white gap-2.5">
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            00
                        </div>
                        <span className="text-[#333333AD]">:</span>
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            50
                        </div>
                        <span className="text-[#333333AD]">:</span>
                        <div className="bg-[#F64920] flex border-none rounded-sm p-1 gap-2.5">
                            55
                        </div>
                    </div>
                </section>
                <article className="grid grid-cols-3 py-16 px-30 gap-9">
                    <section className="flex flex-col col-span-2">
                        <div className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-9">
                            <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                                Metode Pembayaran
                            </p>
                            <div className="flex flex-col items-center border border-[#3A35411F] rounded-xl py-9 px-[18px] gap-3">
                                <div className="">
                                    <img src="/bank/bca-full.png" />
                                </div>
                                <p className="font-medium text-lg leading-[140%] tracking-[0.2%] text-[#222325]">
                                    Bayar Melalui Virtual Account BCA
                                </p>
                                <div className="flex gap-3 items-center">
                                    <p className="font-bold text-lg leading-[140%] tracking-[0.2%] text-[#333333AD]">
                                        11739 081234567890
                                    </p>
                                    <a className="font-bold text-base leading-[140%] tracking-[0.2%] text-[#F64920]">
                                        Salin
                                    </a>
                                </div>
                            </div>
                            <div className="">
                                <OrderSummary>
                                    <div className="grid grid-cols-2 gap-6">
                                        <Button
                                            text="Ganti Metode Pembayaran"
                                            customStyle="bg-[#E2FCD9CC] text-[#3ecf4c]"
                                        />
                                        <Button
                                            text="Bayar Sekarang"
                                            customStyle="bg-[#3ecf4c] text-white"
                                        />
                                    </div>
                                </OrderSummary>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Product image={Card1} />
                    </section>
                    <section className="bg-white flex flex-col col-span-2 border border-[#3A35411F] rounded-[10px] p-6 gap-6">
                        <p className="font-poppins font-semibold text-xl leading-[120%] text-text-dark-primary">
                            Tata Cara Pembayaran
                        </p>
                        {HowToPayment.map((item, index) => (
                            <PaymentProcedure
                                key={index}
                                title={item.title}
                                item={item.item}
                            />
                        ))}
                    </section>
                </article>
            </main>
        </>
    );
}
export default Payment;

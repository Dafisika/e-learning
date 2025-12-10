import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import PaymentProcedure from "../../components/PaymentProcedure";
import Product from "../../components/Product";
import ShoppingSummary from "../../components/order/ShoppingSummary";
import Card1 from "/cover/card-1.png";
import PaymentMethodDropDown from "../../components/productDropDown/PaymentMethodDropDown";

function ChangePaymentMethod() {
    return (
        <>
            <Navbar payment={true} />
            <main className="bg-[#FFFDF3]">
                <article className="grid grid-cols-3 py-16 px-30 gap-9">
                    <section className="flex flex-col col-span-2 gap-9">
                        <ShoppingSummary />
                        <PaymentMethodDropDown />
                    </section>
                    <Product image="/cover/card-1.png" isDetailProduct />
                </article>
            </main>
        </>
    );
}
export default ChangePaymentMethod;

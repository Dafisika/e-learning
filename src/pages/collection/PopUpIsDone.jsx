import NavbarProgress from "../../components/navbar/NavbarProgress";
import AsideProgress from "../../components/aside/AsideProgress";
import Answer from "../../components/aside/Answer";
import AsideQuestion from "../../components/aside/AsideQuestion";
import ButtonProgress from "../../components/button/ButtonProgress";
import FooterProgress from "../../components/footer/FooterProgress";
import Questions from "../../data/Question.json";
function PopUpIsDone() {
    const question = Questions[0];

    return (
        <>
            <div className="bg-[rgba(0,0,0,0.8)] justify-center items-center w-full  ">
                <NavbarProgress />
                <main className="grid grid-cols-4">
                    <AsideQuestion />
                    <section className="flex flex-col justify-between col-span-2 py-9 px-16">
                        <section className="flex flex-col gap-6">
                            <div className="flex flex-col gap-5">
                                <h1 className="font-poppins! font-semibold text-xl text-text-dark-primary leading-[120%]">
                                    Pertanyaan {question.number}
                                </h1>
                                <p className="font-normal text-lg text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    {question.question}
                                </p>
                            </div>
                            {question.answer.map((item, index) => (
                                <Answer key={index} answer={item} />
                            ))}
                        </section>
                        <ButtonProgress
                            number={question.number}
                            totalQuestion={Questions.length}
                        />
                    </section>
                    <AsideProgress />
                </main>
                <FooterProgress />
            </div>
        </>
    );
}
export default PopUpIsDone;

import Avatar from "/avatar/Avatar.png";
import AsideProgress from "../../data/AsideProgress.json";
import { useState } from "react";

function NavbarProgress() {
    const totalTask = AsideProgress.length;
    const [open, setOpen] = useState(false);

    const completedTask = AsideProgress.reduce((accumulator, currentValue) => {
        const number = currentValue.isDone === false ? 0 : 1;
        return accumulator + number;
    }, 0);

    return (
        <nav className="relative flex justify-between items-center py-[18px] px-30 border-b border-[#3A35411F] gap-9">
            <div className="flex items-center gap-3">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                        fill="#333333"
                        fill-opacity="0.68"
                    />
                </svg>
                <p className="font-medium text-base text-text-dark-primary leading-[140%] tracking-[0.2px]">
                    Foundations of User Experience Design
                </p>
            </div>

            {completedTask === totalTask ? (
                <div className="relative">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center border border-[#3ECF4C] rounded-[10px] gap-2 py-2 px-[26px]"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H7V21H17V19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
                                    fill="#FFBD3A"
                                />
                            </svg>
                            <p className="font-bold text-base text-[#3ECF4C] leading-[140%] tracking-[0.2px]">
                                Ambil Sertifikat
                            </p>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                                    fill="#3ECF4C"
                                />
                            </svg>
                        </button>
                        <img className="" src={Avatar} alt="" />
                    </div>

                    {open && (
                        <div
                            className="absolute top-20 right-10 shadow-[0px_12px_25px_-10px_rgba(61,61,61,0.15)]
            "
                        >
                            <div className="bg-white w-100 h-[193px] flex flex-col rounded-4px p-6 gap-3 ">
                                <p className="font-poppins! font-semibold text-lg text-text-dark-primary leading-[120%]">
                                    Modul Telah Selesai
                                </p>
                                <hr className="border border-[#3A35411F]" />
                                <p className="font-normal text-base text-[#333333AD] leading-[140%] tracking-[0.2px]">
                                    16 dari 16 modul telah selesai, silahkan
                                    download sertifikat
                                </p>
                                <button className="bg-[#3ECF4C] font-bold text-base text-white leading-[140%] tracking-[0.2px] rounded-[10px] py-2.5 px-[26px] ">
                                    Ambil Sertifikat{" "}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <progress
                        max={totalTask}
                        value={completedTask}
                        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-[#FFF7D7CC] [&::-webkit-progress-value]:bg-[#FFBD3A] [&::-moz-progress-bar]:bg-violet-400"
                    >
                        {" "}
                    </progress>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-base text-[#3ECF4C] leading-[140%] tracking-[0.2px]">
                            {completedTask}/{totalTask}
                        </p>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
                                fill="#3ECF4C"
                            />
                        </svg>
                    </div>
                    <img className="" src={Avatar} alt="" />
                </div>
            )}
        </nav>
    );
}
export default NavbarProgress;

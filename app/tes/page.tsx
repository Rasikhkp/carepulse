import React from "react";

const Header = () => {
    return (
        <>
            {/* Page One */}
            <div className="flex justify-end items-center">
                <div className="flex items-center px-10 py-6 gap-80">
                    <div className="flex gap-10 mr-52">
                        <div className="text-black text-xs font-normal font-['Inter'] relative group">
                            <span className="relative z-10">CODEBYLANRE</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                        </div>
                        <div className="text-black text-xs font-normal font-['Inter'] relative group">
                            <span className="relative z-10">EMPTY</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                        </div>
                        <div className="text-black text-xs font-normal font-['Inter'] relative group">
                            <span className="relative z-10">CONTACT</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"></div>
                        </div>
                    </div>
                    <div className="inline-flex items-center">
                        <div className="w-3 h-3 bg-[#2d312b] rounded-full"></div>
                        <div className="w-4 h-4 bg-[#ffffff] rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Page two */}

            <div className="w-[1280px] h-[694px] relative bg-[#fbddb5]/20">
                <div className="w-[100px] h-[33px] left-[40px] top-[27px] absolute text-neutral-900 text-[29px] font-normal font-['Inter']">
                    Lanre
                </div>
                <img
                    className="w-[351.94px] h-[536.42px] left-[40px] top-[132.30px] absolute origin-top-left rotate-[-10.03deg] rounded-[13px]"
                    src="https://via.placeholder.com/352x536"
                />
                <div className="w-[482px] h-[100px] left-[720px] top-[235px] absolute text-neutral-900 text-[19px] font-normal font-['Inter']">
                    I am a Computer science student at Wilfrid Laurier
                    University and an aspiring software engineer and I’m
                    currently growing and willing to find new environment to
                    learn. (think of more stuff to write)
                </div>
                <div className="w-[172px] h-[19px] left-[726px] top-[347px] absolute text-neutral-900 text-sm font-normal font-['Inter']">
                    GET IN TOUCH (arrow)
                </div>
                <div className="w-2 h-2 left-[1225px] top-[41px] absolute bg-[#2d312b] rounded-full" />
                <div className="w-2 h-2 left-[1225px] top-[41px] absolute bg-[#2d312b] rounded-full" />
                <div className="w-[90px] h-[22px] left-[661px] top-[38px] absolute text-neutral-900 text-xs font-normal font-['Inter']">
                    CODEBYLANRE
                </div>
                <div className="w-[43px] h-[22px] left-[792px] top-[38px] absolute text-neutral-900 text-xs font-normal font-['Inter']">
                    EMPTY
                </div>
                <div className="w-[60px] h-[22px] left-[867px] top-[38px] absolute text-neutral-900 text-xs font-normal font-['Inter']">
                    CONTACT
                </div>
            </div>
        </>
    );
};

export default Header;

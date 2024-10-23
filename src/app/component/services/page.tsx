
// function Services() {
//     return (
//         <div  id="services"className="bg-gray-800 text-white">
//             {/* left side Content */}
//             <div className="py-10 px-6">
//                 <h2 className="text-center text-4xl font-bold sm:bg-red-800 md:bg-yellow-200 lg:bg-green-200 xl:bg-pink-200 2xl:bg-indigo-50 xl:text-4xl ">My Quality Services</h2>
//                 <p className="text-center px-4 text-xl -tracking-wide pt-4 md:mx-10 md:pb-12 xl:text-2xl xl:mx-40">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
//             </div>

//             {/* box  */}
//             <div className="container gap-3 my-6">
//             <div className="line border border-purple-800 text-white mx-4 md:w-[215vh] xl:w-[235vh]"></div>

//                 <div className="w-80 h-48 hover:bg-purple-600 contrast-200 drop-shadow-xl my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:h-36 sm:mx-6 md:flex md:w-[210vh] xl:w-[235vh]">
//                     <div className="content flex ml-6  md:flex-none md: mt-8">
//                         <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl ">01</span>
//                         <h3 className="text-2xl my-4 font-bold xl:text-4xl">Branding Design</h3>
//                     </div>
//                     <div>
//                         <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-20">
//                             Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
//                         </p>
//                     </div>
//                 </div>
//                 {/* line */}
//                 <div className="line border border-purple-800 text-white mx-4 md:w-[215vh] xl:w-[235vh]"></div>
//                 {/* 2nd Box */}
//                 <div className="w-80 h-48 hover:bg-purple-600 contrast-200 drop-shadow-xl my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[235vh]">
//                     <div className="content flex ml-6  md:flex-none md: mt-8">
//                         <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl">02</span>
//                         <h3 className="text-2xl my-4 font-bold xl:text-4xl">UI/UX Design</h3>
//                     </div>
//                     <div>
//                         <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-32 ">
//                             Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
//                         </p>
//                     </div>

//                 </div>
//                 {/* line */}
//                 <div className="line border border-purple-800 text-white mx-4 md:w-[215vh] xl:w-[235vh]"></div>
//                 {/* 3rd Box */}
//                 <div className="w-80 h-48 hover:bg-purple-600 contrast-200 drop-shadow-xl my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[235vh]">
//                     <div className="content flex ml-6  md:flex-none md: mt-8">
//                         <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl ">03</span>
//                         <h3 className="text-2xl my-4 font-bold xl:text-4xl" >Web Design</h3>
//                     </div>
//                     <div>
//                         <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
//                             Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
//                         </p>
//                     </div>
//                 </div>
//                 {/* line */}
                
//                 <div className="line border border-purple-800 text-white mx-4 md:w-[215vh] xl:w-[235vh]"></div>
//                 {/* 4th Box */}
//                 <div className="w-80 h-48 hover:bg-purple-600 contrast-200 drop-shadow-xl my-2 mx-2 rounded-md cursor-pointer sm:w-[135vh] sm:mx-6 sm:h-36 md:flex md:w-[210vh] xl:w-[235vh]">
//                     <div className="content flex ml-6  md:flex-none md: mt-8">
//                         <span className="text-2xl mx-4 my-4 font-semibold xl:text-4xl ">04</span>
//                         <h3 className="text-2xl my-4 font-bold xl:text-4xl">App Design</h3>
//                     </div>
//                     <div>
//                         <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
//                             Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
//                         </p>
//                     </div>
//                 </div>
//                 {/* line */}
//             </div>
//             <div className="line border border-purple-800 text-white mx-4 md:w-[215vh]  xl:[235vh]"></div>

//         </div>

//     )
// }

// export default Services; 



function Services() {
    return (
        <div id="services" className="bg-gray-800 text-white">
            {/* Header Section */}
            <div className="py-10 px-6">
                <h2 className="text-center text-4xl font-bold 
                    sm:bg-red-800 md:bg-yellow-200 lg:bg-green-200 xl:bg-pink-200 2xl:bg-indigo-50 xl:text-4xl">
                    My Quality Services
                </h2>
                <p className="text-center px-4 text-xl -tracking-wide pt-4 md:mx-10 md:pb-12 xl:text-2xl xl:mx-40">
                    We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
            </div>

            {/* Service Boxes */}
            <div className="container mx-auto gap-3 py-6 flex flex-col md:flex-row md:flex-wrap justify-center">
                <div className="line border border-purple-800 text-white mx-4 w-full md:w-[215vh] xl:w-[235vh]"></div>

                {/* Service Box 1 */}
                <div className="w-full md:w-[210vh] xl:w-[235vh] my-2 mx-2">
                    <div className="hover:bg-purple-600 contrast-200 drop-shadow-xl rounded-md cursor-pointer h-full flex flex-col">
                        <div className="content flex ml-6 md:flex-none md:mt-8">
                            <span className="text-2xl mx-4 font-semibold xl:text-4xl">01</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">Branding Design</h3>
                        </div>
                        <div>
                            <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
                                Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                            </p>
                        </div>
                    </div>
                    <div className="line border border-purple-800 text-white mx-4"></div>
                </div>

                {/* Service Box 2 */}
                <div className="w-full md:w-[210vh] xl:w-[235vh] my-2 mx-2">
                    <div className="hover:bg-purple-600 contrast-200 drop-shadow-xl rounded-md cursor-pointer h-full flex flex-col">
                        <div className="content flex ml-6 md:flex-none md:mt-8">
                            <span className="text-2xl mx-4 font-semibold xl:text-4xl">02</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">UI/UX Design</h3>
                        </div>
                        <div>
                            <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
                                Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                            </p>
                        </div>
                    </div>
                    <div className="line border border-purple-800 text-white mx-4"></div>
                </div>

                {/* Service Box 3 */}
                <div className="w-full md:w-[210vh] xl:w-[235vh] my-2 mx-2">
                    <div className="hover:bg-purple-600 contrast-200 drop-shadow-xl rounded-md cursor-pointer h-full flex flex-col">
                        <div className="content flex ml-6 md:flex-none md:mt-8">
                            <span className="text-2xl mx-4 font-semibold xl:text-4xl">03</span>
                            <h3 className="text-2xl font-bold xl:text-4xl">Web Design</h3>
                        </div>
                        <div>
                            <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
                                Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                            </p>
                        </div>
                    </div>
                    <div className="line border border-purple-800 text-white mx-4"></div>
                </div>

                {/* Service Box 4 */}
                <div className="w-full md:w-[210vh] xl:w-[235vh] my-2 mx-2">
                    <div className="hover:bg-purple-600 contrast-200 drop-shadow-xl rounded-md cursor-pointer h-full flex flex-col">
                        <div className="content flex ml-6 md:flex-none md:mt-8">
                            <span className="text-2xl mx-4  font-semibold xl:text-4xl">04</span>
                            <h3 className="text-2xl  font-bold xl:text-4xl">App Design</h3>
                        </div>
                        {/* <div> */}
                            <p className="mx-6 leading-12 translate-x-4 -tracking-tighter md:mx-14 md:mt-12 xl:pr-24 xl:pl-40">
                                Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old...
                            </p>
                        {/* </div> */}
                    </div>
                    <div className="line border border-purple-800 text-white my-4 m"></div>
                </div>
            </div>
        </div>
    );
}

export default Services;

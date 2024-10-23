import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../../public/webflow@2x-scaled-1.webp"
import Image2 from "../../../../public/modern-website-design-examples.jpg"


function Work() {
    return (
        <div className="bg-purple-950 pb-40">
            {/* Heading */}
            <div className="ml-8  pb-12 flex flex-row  justify-center">
                <span className="text-3xl font-semibold text-purple-200 pt-24  xl:text-4xl 2xl:text-6xl">My Resent Works</span>
            </div>

            {/* Navber */}
            <div className="rounded-full bg-gray-900 ml-10 2xl:w-96">
                <ul className="flex gap-4 justify-center px-auto py-4 ">
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">All</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">Apps</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">Branding</Link>
                    </li>
                    <li>
                        <Link href="" className="text-white font-bold text-ox  hover:border hover:border-purple-800 hover:p-1  hover:rounded-full">UI/UX</Link>
                    </li>
                </ul>
            </div>

            {/* Box Start  */}


            <div className="flex flex-wrap justify-center my-24">
                {/* Box one */}
                <div className="m-5 border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-48 bg-gray-900 hover:bg-purple-700 text-white transition duration-300 ease-in-out flex flex-col items-center">
                    <Image src={Image1} alt="Description of project 2" width={200} height={200} className="w-full h-40 rounded-xl mt-4" />
                    <h3 className="text-center my-6  text-white text-lg font-semibold">Project 2 Title</h3>
                </div>

                {/* Box two */}
                <div className="m-5 border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-48 bg-gray-900 hover:bg-purple-700 text-white transition duration-300 ease-in-out flex flex-col items-center">
                    <Image src={Image2} alt="Description of project 2" width={200} height={200} className="w-full h-40 rounded-xl mt-4" />
                    <h3 className="text-center my-6  text-white text-lg font-semibold">Project 2 Title</h3>
                </div>
                {/* box three */}
                <div className="m-5 border rounded-xl w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 h-48 bg-gray-900 hover:bg-purple-700 text-white transition duration-300 ease-in-out flex flex-col items-center">
                    <Image src={Image1} alt="Description of project 2" width={200} height={200} className="w-full h-40 rounded-xl mt-4" />
                    <h3 className="text-center my-6  text-white text-lg font-semibold">Project 2 Title</h3>
                </div>
            </div>


        </div>
    )
}

export default Work
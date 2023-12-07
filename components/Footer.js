import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-black mt-16">
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <h3 className="text-3xl mb-3">Join Our Community Today!</h3>
                    <p>Explore the Realms of Web3 World</p>
                    <div className="flex justify-center my-10">
                        <a href="https://twitter.com/daodeepverse" target="_blank" rel="noopener noreferrer" className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                            <Image src="/twitterx.svg" alt="Twitter Icon" className="w-7 md:w-8"/>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Follow us on</p>
                                <p className="text-sm md:text-base">X</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/daodeepverse/" target="_blank" rel="noopener noreferrer" className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                            <Image src="/linkedin.svg" alt="LinkedIn Icon" className="w-7 md:w-8"/>
                            <div className="text-left ml-3">
                                <p className='text-xs text-gray-200'>Follow us on</p>
                                <p className="text-sm md:text-base">Linkedin</p>
                            </div>
                        </a>
                        {/* Add more social media icons and links as needed */}
                    </div>
                </div>
                <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Deepverse Dao, 2023.</p>
                    <div className="order-1 md:order-2">
                        <span className="px-2">About us</span>
                        <span className="px-2 border-l">Contact us</span>
                        <span className="px-2 border-l">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

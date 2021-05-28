import Link from 'next/link';
const Header = props => {
    return (
        <div className="flex items-center justify-between px-4 py-1 border-b border-gray-300">
            <div className="flex items-center">
                <Link href="/">
                    <div className="text-xl font-bold tracking-widest text-pink-700 cursor-pointer">
                        Noteworthy
                    </div>
                </Link>
                <div className="flex justify-center h-12 gap-10 p-2">
                    <button className="flex justify-center w-20 py-1 rounded focus:outline-none hover:bg-gray-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <Link href="/new">
                <button className="flex items-center p-2 border border-pink-700 rounded-full hover:text-white hover:bg-pink-700 focus:outline-none">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </span>
                    Create doc
                </button>
            </Link>
        </div>
    );
};

export default Header;

export default function Home() {
    return (
        <div className="h-screen flex mx-auto">
            <div className="flex flex-col flex-shrink-0 w-60 bg-gray-200">
                <div className="flex items-center border-b border-gray-300 h-12 px-4">
                    <span className="font-bold tracking-wider text-xl text-blue-800">
                        Noteworthy
                    </span>
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <button className="flex p-2 rounded items-center bg-gray-100 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <span className="ml-1 font-semibold text-gray-600">
                            Inbox
                        </span>
                    </button>
                    <button className="flex p-2 rounded items-center hover:bg-gray-100 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="ml-1 font-semibold text-gray-600">
                            Calendar
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex border-b border-gray-300 justify-center p-2 gap-10 h-12">
                    <button className="flex justify-center rounded focus:outline-none w-20 py-1 hover:bg-gray-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-600"
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
                    </button>
                    <button className="flex justify-center rounded focus:outline-none w-20 py-1 hover:bg-gray-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                <div className="flex bg-gray-100 items-center justify-center h-full p-10">
                    <div
                        className="flex flex-1 bg-white rounded p-4 h-full"
                        contentEditable
                    ></div>
                </div>
            </div>
        </div>
    );
}

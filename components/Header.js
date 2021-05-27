const Header = (props) => {
  return (
    <div className="flex flex-col flex-shrink-0">
      <div className="flex items-center h-12 px-4 border-b border-gray-300">
        <span className="text-xl font-bold tracking-widest text-blue-800">
          Noteworthy
        </span>
        <div className="flex justify-center h-12 gap-10 p-2 border-b border-gray-300">
          <button className="flex justify-center w-20 py-1 rounded focus:outline-none hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
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
    </div>
  );
};

export default Header;

import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import { createElement, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import format from 'rehype-format';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import html from 'rehype-stringify';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';
import Preview from '../components/Preview';

const Home = props => {
    const [text, setText] = useState();
    const [render, setRender] = useState(false);
    useHotkeys('command+shift+e', e => {
        e.preventDefault();
        setRender(render => !render);
    });
    const [processedHtml, setProcessedHTml] = useState();

    const processor = unified()
        .use(markdown)
        .use(format)
        .use(remark2rehype)
        .use(highlight, {
            ignoreMissing: true,
            languages: {
                js: javascript,
                java: java
            }
        })
        .use(html)
        .use(rehype2react, {
            createElement: createElement,
            Fragment: Preview
        });

    async function processText() {
        const result = (await processor.process(text)).result;
        setProcessedHTml(result);
        setRender(!render);
    }

    return (
        <div className="flex h-screen mx-auto">
            <div className="flex flex-col flex-shrink-0 bg-gray-200 w-60">
                <div className="flex items-center h-12 px-4 border-b border-gray-300">
                    <span className="text-xl font-bold tracking-widest text-blue-800">
                        Noteworthy
                    </span>
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <button className="flex items-center p-2 bg-gray-100 rounded focus:outline-none">
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
                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <span className="ml-1 font-semibold text-gray-600">
                            All Notes
                        </span>
                    </button>
                    <button className="flex items-center p-2 rounded hover:bg-gray-100 focus:outline-none">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span className="ml-1 font-semibold text-gray-600">
                            Calendar
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col flex-1">
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
                <div className="flex flex-col h-full mx-10 my-5 overflow-hidden">
                    <div className="flex justify-end">
                        <button
                            onClick={processText}
                            className="p-2 m-1 text-gray-600 rounded-full hover:bg-blue-100 focus:outline-none"
                        >
                            {render ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-green-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex h-full overflow-hidden">
                        {render ? (
                            <div
                                className={`no-scrollbar p-2 overflow-y-auto ${
                                    render ? 'w-full' : 'hidden'
                                }`}
                            >
                                {processedHtml}
                            </div>
                        ) : (
                            <div className="w-full h-full">
                                <textarea
                                    placeholder="Start typing..."
                                    onChange={e => setText(e.target.value)}
                                    className="w-full h-full p-2 border resize-none focus:outline-none no-scrollbar"
                                    value={text}
                                ></textarea>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

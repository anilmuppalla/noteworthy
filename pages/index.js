import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import React, { useState } from 'react';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import html from 'rehype-stringify';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import unified from 'unified';
import Preview from '../components/Preview';

export default function Home() {
    const [text, setText] = useState();
    const [processedHtml, setProcessedHTml] = useState();
    const processor = unified()
        .use(markdown)
        .use(remark2rehype)
        .use(highlight, {
            languages: {
                js: javascript,
                java: java
            }
        })
        .use(html)
        .use(rehype2react, {
            createElement: React.createElement,
            Fragment: Preview
        });

    const processText = () => {
        console.log(text);
        const result = processor.processSync(text).result;
        setProcessedHTml(result);
    };

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
                <div className="flex h-full overflow-hidden">
                    <div className="flex flex-col w-1/2 gap-3 p-4 overflow-y-auto bg-white rounded">
                        <div className="">
                            <button
                                onClick={processText}
                                className="p-2 bg-blue-100 shadow-md focus:outline-none"
                            >
                                process
                            </button>
                        </div>
                        <div className="h-full p-2 border border-gray-200 rounded-md">
                            <textarea
                                onChange={e => setText(e.target.value)}
                                className="w-full h-full focus:outline-none"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex w-1/2 p-4 overflow-y-auto bg-green-50">
                        {processedHtml}
                    </div>
                </div>
            </div>
        </div>
    );
}

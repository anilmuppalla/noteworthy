import java from 'highlight.js/lib/languages/java';
import javascript from 'highlight.js/lib/languages/javascript';
import { createElement, useEffect, useRef, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import format from 'rehype-format';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import gfm from 'remark-gfm';
import parse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'remark-stringify';
import unified from 'unified';
import Preview from '../components/Preview';

const New = props => {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const [render, setRender] = useState(false);

    const [processedHtml, setProcessedHTml] = useState();

    const processor = unified()
        .use(parse)
        .use(gfm)
        .use(html)
        .use(remark2rehype)
        .use(format)
        .use(highlight, {
            ignoreMissing: true,
            languages: {
                js: javascript,
                java: java
            }
        })
        .use(rehype2react, {
            createElement: createElement,
            Fragment: Preview
        });

    async function processText() {
        const result = (await processor.process(text)).result;
        setProcessedHTml(result);
    }

    useEffect(() => {
        processText();
    }, [text]);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    useHotkeys('command+shift+e', () => {
        setRender(render => !render);
    });

    return (
        <div className="flex flex-col items-center h-full bg-gray-100">
            <div className="flex flex-col w-1/2 h-full my-5 overflow-hidden">
                <div className="flex justify-end">
                    <button
                        onClick={e => setRender(!render)}
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
                <div className="flex justify-center w-full h-full overflow-hidden rounded">
                    {render ? (
                        <div
                            className={`no-scrollbar p-8 overflow-y-auto bg-white ${
                                render ? 'w-full' : 'hidden'
                            }`}
                        >
                            {processedHtml}
                        </div>
                    ) : (
                        <div className="w-full h-full">
                            <textarea
                                ref={inputRef}
                                onChange={e => setText(e.target.value)}
                                className="w-full h-full p-8 bg-white shadow-lg resize-none focus:outline-none no-scrollbar"
                                value={text}
                            ></textarea>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default New;


const KeyPad = ({displayInput, deleteInput, computeInput, clearInput}: IkeyPadProps) => {
    return (
        <div className="bg-zinc-900 rounded-xl mt-10 py-8 px-8 font-chackra text-xl" >
            <div className="flex justify-between">
                <button
                 onClick={() => displayInput('7')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        7
                    </span>
                </button>
                <button
                 onClick={() => displayInput('8')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        8
                    </span>
                </button>
                <button
                 onClick={() => displayInput('9')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        9
                    </span>
                </button>
                <button
                 onClick={() => deleteInput()}
                 className="bg-red-500 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-red-400 w-full h-full rounded-lg text-center font-black pt-2 block">
                        DEL
                    </span>
                </button>
            </div>

            <div className="flex justify-between mt-4">
            <button
                 onClick={() => displayInput('4')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        4
                    </span>
                </button>
                <button
                 onClick={() => displayInput('5')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        5
                    </span>
                </button>
                <button
                 onClick={() => displayInput('6')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        6
                    </span>
                </button>
                <button
                 onClick={() => displayInput('+')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        +
                    </span>
                </button>
            </div>

            <div className="flex justify-between mt-4">
            <button
                 onClick={() => displayInput('1')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        1
                    </span>
                </button>
                <button
                 onClick={() => displayInput('2')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        2
                    </span>
                </button>
                <button
                 onClick={() => displayInput('3')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        3
                    </span>
                </button>
                <button
                 onClick={() => displayInput('-')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        -
                    </span>
                </button>
            </div>

            <div className="flex justify-between mt-4">
            <button
                 onClick={() => displayInput('.')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        .
                    </span>
                </button>
                <button
                 onClick={() => displayInput('0')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        0
                    </span>
                </button>
                <button
                 onClick={() => displayInput('/')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        /
                    </span>
                </button>
                <button
                 onClick={() => displayInput('*')}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-16"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block">
                        x
                    </span>
                </button>
            </div>


            <div className="flex justify-between mt-4">
                <button
                    onClick={() => clearInput()}
                    className="bg-red-500 pb-1 rounded-xl h-16 w-1/2 mr-2"
                    >
                        <span className="bg-zinc-800 text-red-400 w-full h-full rounded-lg text-center pt-2 block font-bold">
                            CLEAR
                        </span>
                </button>
                <button
                 onClick={() => computeInput()}
                 className="bg-green-800 pb-1 rounded-xl h-16 w-1/2 ml-3"
                 >
                    <span className="bg-zinc-800 text-green-600 w-full h-full rounded-lg text-center pt-2 block font-black text-lg ">
                        =
                    </span>
                </button>
            </div>
        </div>
    )
}


export default KeyPad
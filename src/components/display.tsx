import { commaHandling } from "../utils/utils"


const Display = ({ value }: IdisplayProps) => {
    return (
        <div className="bg-zinc-800 text-green-600 rounded-xl ml-5 mt-10 h-auto text-right p-6 overflow-auto overflow-y-hidden w-11/12 justify-center">
            <div className="text-6xl font-chackra" style={{
                direction: 'ltr',
                whiteSpace: 'nowrap',
                display: 'inline'
            }}>
                {commaHandling(value)}
            </div>
        </div>
    )
}

export default Display
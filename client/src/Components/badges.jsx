 export default function Badges({tool1, tool2, tool3}) {
    let color = "bg-pink-100 text-pink-800"
 
    return (

            <div>
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded w-auto ${color}`}>
                    {tool1}
                </span>
                <span className={`inline-block ml-2 px-2 py-0.5 text-xs font-medium rounded w-auto ${color}`}>
                    {tool2}
                </span>
                <span className={`inline-block ml-2 px-2 py-0.5 text-xs font-medium rounded w-auto ${color}`}>
                    {tool3}
                </span>
            </div>
    
    )
 }
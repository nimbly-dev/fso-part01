/* eslint-disable react/prop-types */


const Stat = ({label,count, appendToEndOfLine})=>{
    if(appendToEndOfLine)
        return(
            <>
                <p>{label} : {count} {appendToEndOfLine}</p>
            </>
        ) 
    else
        return(
            <>
                <p>{label} : {count} </p>
            </>
        )
}

export default Stat;
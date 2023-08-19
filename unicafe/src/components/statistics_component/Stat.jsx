/* eslint-disable react/prop-types */


const Statistics = ({label,count, appendToEndOfLine})=>{
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

export default Statistics;
/* eslint-disable react/prop-types */


const Stat = ({count, appendToEndOfLine})=>{
    if(appendToEndOfLine)
        return(
            <>
                <td>{count} {appendToEndOfLine}</td>
            </>
        ) 
    else
        return(
            <>
                <td>{count} </td>
            </>
        )
}

export default Stat;
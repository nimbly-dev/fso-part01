/* eslint-disable react/prop-types */


const Stat = ({label,count, appendToEndOfLine})=>{
    if(appendToEndOfLine)
        return(
            <tr>
                <td>{label} : {count} {appendToEndOfLine}</td>
            </tr>
        ) 
    else
        return(
            <tr>
                <td>{label} : {count} </td>
            </tr>
        )
}

export default Stat;
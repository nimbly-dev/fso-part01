/* eslint-disable react/prop-types */
import React from 'react';

const StatTableHeader = (props)=>{
    const childrenArray = React.Children.toArray(props.children);

    return(
        <thead>
            <tr>
                {
                childrenArray.map((text,index)=>{
                    return( <th key={index}>{text}</th>)
                })
                }
            </tr>
        </thead>
    )
}

export default StatTableHeader;
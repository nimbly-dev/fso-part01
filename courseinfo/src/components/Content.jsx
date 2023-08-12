/* eslint-disable react/prop-types */
import Part from "./Part";

const Content = (props)=>{
    console.log(props)
    return(
        <ul>
            {
                props.parts.map((part)=>{
                    return(
                        <li key={part.key}>
                            <Part contentName={part.name} contentExercise={part.exercises}/>
                        </li>
                    );

                })
            }
        </ul>
    )   
}

export default Content;
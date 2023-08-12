/* eslint-disable react/prop-types */
const Total = (props) => {
    // const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);

    const utility = {
      doTotal: (parts) =>{
        return parts.reduce((total, part) => total + part.exercises, 0);
      }
    }

    return (
      <p>
        Number of exercise = {utility.doTotal(props.parts)}
      </p>
    )
  }

export default Total;
/* eslint-disable react/prop-types */
const Total = (props) => {
    const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);

    return (
      <p>
        Number of exercise = {totalExercises}
      </p>
    )
  }

export default Total;
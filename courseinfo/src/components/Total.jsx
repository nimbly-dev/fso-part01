/* eslint-disable react/prop-types */
const Total = (props) => {
    // const totalExercises = props.parts.reduce((total, part) => total + part.exercises, 0);

    const utility = {
      parts: props.parts,
      doTotal: function(){
        return this.parts.reduce((total, part) => total + part.exercises, 0);
      }
    }

    return (
      <p>
        Number of exercise = {utility.doTotal()}
      </p>
    )
  }

export default Total;
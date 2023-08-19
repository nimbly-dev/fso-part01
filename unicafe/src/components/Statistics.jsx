/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Stat from './statistics_component/Stat'

//Done 1.10: unicafe step5 on 1.9: unicafe step4 commit
const Statistics = ({good,neutral,bad})=>{    
    const getTotal = ()=>{
        return good + neutral + bad
    }
      
    const getAverage = ()=>{
        if(!good || !neutral || !bad)
          return 0
        else
          return (good - bad)/(good + neutral +bad)
    }
    
    const getPositiveFeedback = ()=>{
        if(!good || !neutral || !bad)
          return 0
        else
          return (good / (good + neutral + bad)) * 100
    }

    if(good === 0 || bad === 0 || neutral === 0)
        return(<p>No Feedback Given</p>)
    else
        return(
            <>
                <Stat count={good} label={'Good'}/>
                <Stat count={neutral} label={'Neutral'}/>
                <Stat count={bad} label={'Bad'}/>
                <Stat count={getTotal()} label={('All')}/> 
                <Stat count={getAverage()} label={'Average'}/>
                <Stat count={getPositiveFeedback()} label={'Positive'} appendToEndOfLine={'%'}/>
            </>
        )

}

export default Statistics;
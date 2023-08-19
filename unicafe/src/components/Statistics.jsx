/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Stat from './statistics_component/Stat'
import StatTableHeader from './statistics_component/StatTableHeader'

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
            <table>
                    <StatTableHeader>
                        <>Good</>
                        <>Neutral</>
                        <>Bad</>
                        <>Total</>
                        <>Average</>
                        <>Postive Feedback</>
                    </StatTableHeader>
                <tbody>
                    <tr>
                        <Stat count={good}/>
                        <Stat count={neutral}/>
                        <Stat count={bad}/>
                        <Stat count={getTotal()}/> 
                        <Stat count={getAverage()}/>
                        <Stat count={getPositiveFeedback()} appendToEndOfLine={'%'}/>
                    </tr>
                </tbody>
            </table>
        )

}

export default Statistics;
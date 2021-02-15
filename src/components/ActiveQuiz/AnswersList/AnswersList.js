import React,{Component} from 'react'
import classes from './AnswersList.css'
import AnswersItem from './AnswerItem/AnswersItem'
const AnswersList = props =>(
    <ul className={classes.AnswersList}>
        {props.answers.map((answer,index)=>{
            return (
                <AnswersItem
                    state={props.state ? props.state[answer.id] : null}
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                ></AnswersItem>
            )
        })}
    </ul>
)
export default AnswersList
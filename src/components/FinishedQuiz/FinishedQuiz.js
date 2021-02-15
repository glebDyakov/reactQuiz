import {Link} from 'react-router-dom'
import React from 'react'
import Button from '../UI/Button/Button'
import classes from ''
const FinishedQuiz = props => {
    const successCount=Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key] === 'success'){
            total++
        }
        return total
    },0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem,index)=>{
                    const cls=[
                        'fa',
                        props.results[quizItem.id]==='error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
                {/* <li>
                    <strong>1.</strong>
                    How are you
                    <i className={'fa fa-times' + classes.error}/>
                </li>
                <li>
                    <strong>2.</strong>
                    How are you
                    <i className={'fa fa-check' + classes.success}/>
                </li> */}
            </ul>
            <p>правильно {successCount} из {props.quiz.length}</p>
            <div>
                {/* <button onClick={props.onRetry}>Повторить</button> */}
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Link to={/>}>
                <Button type="success">перейти в список тестов</Button>
                </Link>
                
            </div>
        </div>
    )
}
export default FinishedQuiz
import React, {useState, useEffect} from 'react'
import style from "./Content.module.css"
import Question from './question/Question.jsx'
import { v4 as uuidv4 } from 'uuid';


function Content(data) {

  const [answers, setAnswers] = useState([]);

  useEffect(() => { 
    makeAnswers()
  }, [])
  
  useEffect(( ) => {
    showSresult()
  }, [answers])

  function makeAnswers(){
    setAnswers([...data.data.options.map(item => ({
      fieldName: item.card__title,
      value: '',
      weight: '',
    }))])
  }

  function renderQuestion(){
    return data.data.options.map(el => (
      <div key={uuidv4()}>
        <Question data={el} setHandler={setAnswers}></Question>
      </div>
    )
   )
  }

  function showReTakeButton(){
    return (
      <div className={style.retake__button}>
         <button onClick={makeAnswers} className={style.btn}>ReTake</button>
      </div>
     
    )
  }

  function showSresult(){
    let temp = 0;

      answers.map(el => {
        temp += +el.weight
      })

      if(temp <= 8){
        return (
          <div className={style.answer__field}>
            <h1>Left Brained!</h1>
            <p>As a left brain person, you tend to be more logical, analytical, and orderly. You enjoy things like reading, writing, and mathematics. Just because you lean more on the left brain side doesn't mean you can't be just as creative or entertaining as your right brain counterparts. Cheers to that!</p>
          </div> 
        )
      }else{
        return (
          <div className={style.answer__field}>
            <h1>Right Brained!</h1>
            <p>As a right brain person, you tend to be more creative, adventurous, and spontaneous. You enjoy fun things like sports, crafts, and listening to music. Just because you lean more on the right brain side doesn't mean you can't be just as organized and goal-oriented as your left brain counterparts. Cheers to that!</p>
          </div>
        )
      }    
  }

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
          <div className={style.content__title}>
            <h1>{data.data.title}</h1>
          </div>
          <div className={style.buzz__list}>
          {renderQuestion()}
          {!answers.some(item => !item.value) && showSresult()}
          {!answers.some(item => !item.value) && showReTakeButton()}
          </div>
      </div>
    </div>
  );
}

export default Content;

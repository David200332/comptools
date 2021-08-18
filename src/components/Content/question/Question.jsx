import React, {useState, useEffect, useRef} from 'react'
import style from "./Question.module.css"
import { v4 as uuidv4 } from 'uuid';

function Question({data, setHandler}) {
    const buttonsRef = useRef(null)

    function сhoice(e){
        resetAllChoises()
        const currentValue = e.target.innerText
        const currentTitle = e.target.dataset.title
        const currentWeight = e.target.dataset.weight
        e.target.classList.add(style.active)
        console.log(e.target.classList)
        setHandler(prevState => [...prevState.filter(item => item.fieldName !== currentTitle), {fieldName: currentTitle, value: currentValue, weight: currentWeight}])
    }
    
    function resetAllChoises() {
        buttonsRef.current.childNodes.forEach(el => el.classList.remove(style.active))
    }

    function renderOptions(){
        return data.options.map( el => (
            <button 
                key={uuidv4()} 
                data-title={data.card__title}
                data-weight={el.weight}
                onClick={сhoice}
                className={style.btn}
              >{el.name}</button>
        ))
    }
    return (
        <div className={style.container}>
            <div className={style.card__title}>
                <h1>{data.card__title}</h1>
            </div>
            <div ref={buttonsRef} className={style.buttons}>
                {renderOptions()}
            </div>
        </div>
    );
}

export default Question;
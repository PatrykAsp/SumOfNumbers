import React, { useState } from 'react';

const App = () => {
    const [first_number, setFirstNumber] = useState('')
    const [second_number, setSecondNumber] = useState('')
  
    const handleFormSubmit = e => {
        e.preventDefault();
        const dataToSubmit = {
            first_number,
            second_number,
            
        }
        fetch('https://django-civil-85.herokuapp.com/api/civil_calcs/comp_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "Access-Control-Allow-Origin": "*"

            },
            body: JSON.stringify(dataToSubmit)
        }).then (res => res.json())
            .then(res => {
                console.log(res)
                setFirstNumber('')
                setSecondNumber('')
               
            })
    }

  return (
    <div className='app'>
        <h2>Działanie matematyczne będące sumą dwóch liczb: </h2>
        <form method='post' action='#' onSubmit={handleFormSubmit}>
            <div>
            <label> Wpisz liczbę nr 1:   
                <input type='number' value={first_number} onChange={e => setFirstNumber(e.target.value)} name='first_number'/>
            </label>
            </div>
            <div>
            <label> Wpisz liczbę nr 2:  
                <input type='number' value={second_number} onChange={e => setSecondNumber(e.target.value)} name='second_number'/>
            </label>
            </div>
            
            
            <input type='submit'/>
        </form>
    </div>

  )
}

export default App
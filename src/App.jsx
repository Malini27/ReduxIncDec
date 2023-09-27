import { useEffect, useState } from 'react';
import './App.css'
function App(){
    const cities=['aandipati','borur','cuddalore','cuddapah','dindugal','pondy','villupuram']

    const[search,setsearch]=useState('');          //declaring two state variable(search,setsearch) using usestate hook with empty string

    const[filtered,setfiltered]=useState(cities);  //declaring two state variables and initializing with cities array

    const onchangehandler=(event)=>{        // It updates the search state with the current value of the input field when the user types into it.
        setsearch(event.target.value)
    }

    useEffect(()=>{     //useEffect hook to run a side effect when the search state changes.
        const filtered=[...cities].filter(
            (element)=>(element?.toLocaleLowerCase()?.startsWith(search.toLocaleLowerCase()))  // filtering the cities array based on whether each city starts with the lowercase version of the search value. This will update the list of cities that match the search criteria.

        )
            setfiltered(filtered)

        
    }
    ,[search])



return(
    <div className='container'>
        <h1>Search</h1>
        <input className='searchbar' placeholder='type to search'value={search} onChange={onchangehandler}></input>
        <ol className='searchlist'>
            {
                filtered.map((element,idx)=>{
                    return(
                        <li className='result'key={idx} value={element}>{element}</li>
                    )

                })
            }

        </ol>
    </div>
)
}
export default App;
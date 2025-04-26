import { useState , useEffect } from 'react'
import axios from 'axios'

function SelectedContact({selectedContactId , setSelectedContactId}) {

    const [individual , setIndividual] = useState(null)
    console.log('individual', individual)

    useEffect(()=>{
        const fetchIndividual = async () => {
            const { data } = await axios.get(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            setIndividual(data)
            console.log(data)
        }
        fetchIndividual()
    }, [])


    return (
        <div>
           { console.log("individual", individual) }
           
           {/* <p>{ individual.name }</p>
           <p>{ individual.email }</p>
           <p>{ individual.id }</p>
           <p>{ individual.name }</p> */}
          
        
            <div onClick={()=>{
                    setSelectedContactId(null)
                }}>Go back
            </div>
        </div>
    )
}

export default SelectedContact
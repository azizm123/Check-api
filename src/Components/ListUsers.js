import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import CardUsers from "./CardUsers";

const ListUsers=()=>{
    const [users ,setusers] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setusers(res.data))
        .then(()=>setloading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div className="liste">
        {
          loading?  <Spinner animation="border" role="status"> <span className="visually-hidden">Loading...</span> </Spinner> : users.map((el,i,t)=> <CardUsers el ={el}/> )
        }
        </div>
    )
}
export default ListUsers
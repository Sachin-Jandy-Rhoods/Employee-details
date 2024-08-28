import { useParams } from "react-router-dom"

export const MonthlyReport=(prop)=>{
    const params=useParams()
    const {name}=params
    return(
        <div className="container">
            <h1>Monthly Report for {name}</h1>
        </div>
    )
}
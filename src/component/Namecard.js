import { ReusableFunction } from "../App"
import { useContext } from "react"

export const Namecard=({name,age})=>{
    const getInfo=useContext(ReusableFunction)
    return(
        <>
        <div className="div1">{getInfo.getName(name,age)}</div>
        <div>{getInfo.getResult(name,age)}</div>
        </>
    )

}
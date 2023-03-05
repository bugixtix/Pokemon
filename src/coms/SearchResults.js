
import React,{useEffect} from "react"
import { Card } from "./Card"
import '../App.css'

export function SearchResults({searchV_$, ResultsTrig_$}){

    useEffect(()=>{
        // console.log(searchV_$)
    },[searchV_$])
    
    function ShowResults(){
        if(searchV_$.length > 0) { return searchV_$.map((i,index)=>(<Card index_={index} name_={i.name} data_={i} key={index}/>))}
        return <div className="SR_noData_"> no data found</div> 
        // searchV_$.length > 0 ? searchV_$.map((i,index)=>(<Card index_={index} name_={i.name} data_={i} key={index}/>)) : 'no data found'
    }
    return(
        <div>
        {ResultsTrig_$ ?
            <div className="SearchResults_">
                <h1 className="C_h1">Search Result</h1>
                <div className="C_C">
                {<ShowResults/>}
                </div>
            </div>
        :''}
        </div>
    )
} 
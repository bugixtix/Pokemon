
import React,{useEffect} from "react"
import { Card } from "./Card"
import '../App.css'
import pokemon_404 from '../icons/pokemon_404.png'
import { getElementError } from "@testing-library/react"
export function SearchResults({searchV_$, ResultsTrig_$, scroll_$}){

    
    function ShowResults(){
        if(searchV_$.length > 0) {return searchV_$.map((i,index)=>(<Card index_={index} name_={i.name} data_={i} key={index}/>))}

        return <div className="SR_noData_"> <p className="SR_p_">sorry, there's no match </p> <img className="SR_img_" src={pokemon_404}/> </div> 
    }

    function scrollElement(percent=80){
        window.scroll(0,position(percent))
      }
      function position(percent){
        return (percent * window.screen.height)/100
      }
      useEffect(()=>{
        if(scroll_$>0){
            scrollElement()
        }
      },[scroll_$])
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
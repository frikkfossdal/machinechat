import { render } from "@testing-library/react";
import React from "react";

export default function Queue(props){
    props.commands.map((c)=>{
        console.log(c)
    })

    return(<div>
        <p>Commands lives here</p>
    {props.commands.map((c)=> (<p>{c.type}</p>))}
    </div>)

}
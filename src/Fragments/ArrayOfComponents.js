import React from  'react';

const FrontEnd=()=>{
    return [
        <h3>Frontend</h3>,
        <p>Javascript</p>,
        <p>React</p>
    ]
}

const Backend=()=>{
    return [
        <h3>Backend</h3>,
        <p>NodeJS</p>,
        <p>Python</p>
    ]
}

export default class ArrayOfComponents extends React.Component{
    render(){
        return(
            [
                <FrontEnd/>,
                <Backend/>
            ]
        )
    }
}
import React from 'react';

const preload={
    data:[
        {
            "name": "Reactjs",
            "url": "https://reactjs.org",
            "description": "A JavaScript library for building user interfaces",
          },
          {
            "name": "Vuejs",
            "url": "https://vuejs.org",
            "description": "The Progressive JavaScript Framework",
          },
          {
            "name": "Emberjs",
            "url": "https://www.emberjs.com",
            "description": "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern"
          }
    ]
}

const FragmentExample2=(props)=>{
    return(
        <React.Fragment>
            {props.items.data.map((el)=>{
            return   <React.Fragment key={el.name}>
                    <h2>{el.name}</h2>
                    <p>{el.url}</p>
                    <p>{el.description}</p>
                </React.Fragment>    
            })}
        </React.Fragment>
    )
}

export default class KeysInFragments extends React.Component{
    render(){
        return(
            <FragmentExample2 items={preload}/>
        )
    }

}
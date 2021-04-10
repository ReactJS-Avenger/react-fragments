import React from 'react';
import FragmentExample1 from './Fragments/FragmentsExample1'
import KeysInFragments from './Fragments/KeysInFragments'
import ArrayOfComponents from './Fragments/ArrayOfComponents'

const App=()=>{
    return(
        <div>
            <h1>Fragments</h1>
            <FragmentExample1/>
            <hr/>
            <h1>Keys in Fragments</h1>
            <KeysInFragments/>
            <hr/>
            <h1>ArrayOfComponents</h1>
            <ArrayOfComponents/>
        </div>
    )
}
export default App;
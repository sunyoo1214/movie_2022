import React from 'react';
import Potato from './Potato';

function Food(props) {
console.log(props);
return <h1> I like {props.fav} </h1> ;
}

function App() {
return (
<div>
 <h1> Hello </h1>
 <Food fav="kimchi" />
</div>
);
}

export default App;
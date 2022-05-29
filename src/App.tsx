import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

let student : string = 'opu';
let age : number = 22;
let isSmart : boolean = true;

let students : string[] = ['opu', 'dipu', 'tithy'];
let fees : number[] = [ 23, 43, 54];

interface Person {
  name : string,
  job : string,
  age : number,
  location?: string | number
}

const person : Person = {
    name : 'Bill Clinton',
    job : 'Bekar',
    age : 85,
    location : 24
}

function App() {
  return (
    <div className="App">
        <Counter></Counter>
        <Users></Users>
    </div>
  );
}

export default App;

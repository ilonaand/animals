import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Animal, Cat, Dog, State } from './animal';

const buttons: [string, State][] = [
  ['SEAT', 'SEATING'], 
  ['RUN', 'RUNNING'], 
  ['WALK', 'WALKING'],
  ['CLIMB', 'CLIMBING'],
  ['SAY', 'SAY']
];

function App() {

  const [animal, setAnimal] = useState<Animal | undefined>();
 
  return (
    <div className="App">
      <div>
        <button onClick={ () => setAnimal(new Cat()) } >cat</button>
        <button onClick={ () => setAnimal(new Dog()) } >dog</button>
      </div>
      <div>{ animal ? `${animal.getName()}${animal.state === 'SAY'? ' ' + animal?.makeSound() : ' is ' + animal.state}.` : 'No animal!' }</div>
      <div>
        {
          animal &&
            buttons
              .filter( ([_, state]) => state !== animal.state )
              .map( ([caption, state]) => {
                return <button onClick={ () => setAnimal(
                  state === 'CLIMBING'
                  ? animal.climb()
                  : state === 'RUNNING'
                  ? animal.run()
                  : state === 'SEATING'
                  ? animal.seat()
                  : state === 'SAY'
                  ? animal.say()
                  : animal.walk()
                ) }>{caption}</button>
              })
        }       
      </div>
    </div>
  );
}

export default App;

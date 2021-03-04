import React, { PureComponent, Fragment } from 'react';
import {Header, Footer} from './layouts';
import Exercises from './exercises';
import {exercises, muscles} from '../Store';

class App extends PureComponent {
    state = {
      exercises,
    }
    
    getExercisesByMuscles(){

      return Object.entries(this.state.exercises.reduce((exercises,exercise) =>{
        const {muscles} = exercise

        exercises[muscles]=exercises[muscles]
        ? [...exercises[muscles],exercise] : [exercise] 
         return exercises

      },{})
      )
    }

    render(){
      
      const exercises = this.getExercisesByMuscles()

      return (
        <>
       <Header />

       <Exercises exercises ={exercises}/>

       <Footer muscles={muscles}/>
      </>
      )}
}

export default App;

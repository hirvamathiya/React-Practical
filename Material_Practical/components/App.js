import React, { PureComponent, Fragment } from 'react';
import {Header, Footer} from './layouts';
import Exercises from './exercises';
import {exercises, muscles} from '../Store';

class App extends PureComponent {
    state = {
      exercises,
      category :'',
      exercise :{}

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

    handleCategorySelected = (category) =>{
        this.setState({
           category
        })
    } 

    handleExerciseSelected = (id) =>{
        this.setState(({exercises})=>({
          exercise :exercises.find(ex =>ex.id===id)
        }))
    }

    handleExerciseCreate = exercise =>{
      this.setState(({exercises}) =>({
          exercises :[
            ...exercises,exercise
          ]
      }))
    }

    render(){
      
      const exercises = this.getExercisesByMuscles()
       return (
        <>
       <Header muscles={muscles}  onExerciseCreate={this.handleExerciseCreate}  />

       <Exercises exercises ={exercises} category={this.state.category} onSelect={this.handleExerciseSelected} exercise={this.state.exercise}/>

       <Footer muscles={muscles} onSelect={this.handleCategorySelected} category={this.state.category}/>
        </>
      )}
}

export default App;

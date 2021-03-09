import React, { PureComponent, Fragment } from 'react';
import {Header, Footer} from './layouts';
import Exercises from './exercises';
import {exercises, muscles} from '../Store';

class App extends PureComponent {
    state = {
      exercises,
      category :'',
      exercise :{},
      editMode:false
    }
    
    getExercisesByMuscles(){

      const initialExercises = muscles.reduce((exercises,category)=>({
          ...exercises,
          [category]:[]
      }),{})

      return Object.entries(this.state.exercises.reduce((exercises,exercise) =>{
        const {muscles} = exercise

        exercises[muscles]=[...exercises[muscles],exercise] 
         return exercises

      },initialExercises)
      )
    }

    handleCategorySelected = (category) =>{
        this.setState({
           category
        })
    } 

    handleExerciseSelected = (id) =>{
        this.setState(({exercises})=>({
          exercise : exercises.find(ex =>ex.id===id),
          editMode:false 
        }))
    }

    handleExerciseCreate = exercise =>{
      this.setState(({exercises}) =>({
          exercises :[
            ...exercises,exercise
          ]
      }))
    }
     
    handleExerciseDelete = id =>{
      this.setState(({exercises ,exercise,editMode})=>({
          exercises:exercises.filter(ex=>ex.id !== id),
          editMode: exercise.id===id? false : editMode,
          exercise: exercise.id===id? {} : exercise
      }))
    } 
     
    handleExerciseEdit = id =>{
      this.setState(({exercises})=>({
        exercise :exercises.find(ex =>ex.id===id),
        editMode:true
      }))
    }
    handleExerciseSelectEdit = exercise =>{
        this.setState(({ exercises}) => ({
          exercises:[
            ...exercises.filter(ex => ex.id !== exercise.id),
            exercise
          ],
          exercise
        }))
    }

    render(){
      
      const exercises = this.getExercisesByMuscles()
       return (
        <>
       <Header muscles={muscles}  onExerciseCreate={this.handleExerciseCreate}  />

       <Exercises 
       exercises ={exercises} 
       muscles={muscles}
       category={this.state.category} 
       onSelect={this.handleExerciseSelected} 
       exercise={this.state.exercise} 
       editMode={this.state.editMode}
       onDelete={this.handleExerciseDelete}
       onSelectEdit={this.handleExerciseEdit}
       onEdit={this.handleExerciseSelectEdit}
       />

       <Footer muscles={muscles} onSelect={this.handleCategorySelected} category={this.state.category}/>
        </>
      )}
}

export default App;

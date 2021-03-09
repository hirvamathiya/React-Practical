import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

const styles = theme =>({
    FormControl:{
        width:500
    }
})
  export default withStyles(styles)(class extends Component{

    state= this.getInitState()

    getInitState(){
        const {exercise} =this.props
        return exercise ? exercise : {
            title:'',
            description :'',
            muscles :''
        }
    } 

    handleChange = name => ({target : {value}}) =>{
        this.setState({
                 [name] : value
            })    
     }

    handleSubmit = () =>{
     //validation before submit

     this.props.onSubmit({
         
         id:this.state.title.toLowerCase().replace(/ /g, '-'),
         ...this.state
     })

    }

    render(){

        const {title,description,muscles} =this.state,
              {classes, exercise, muscles:categories } = this.props

        return <form>
        <TextField value={title} margin="normal" label="Title " className={classes.FormControl} onChange={this.handleChange('title')}/><br/>
        <FormControl className={classes.FormControl}>
           <InputLabel htmlFor="muscles">Muscles</InputLabel>
             <Select
               value={muscles}
               onChange={this.handleChange('muscles')}
             >
                 {categories.map(category=>
                    <MenuItem value={category}>{category}</MenuItem>
                 )}
             </Select>
        </FormControl><br/>
        <TextField value={description} multiline rows="4" margin="normal" label="Description" className={classes.FormControl} onChange={this.handleChange('description')}/>
        <br />
        <Button 
        color="primary"
        variant="contained" 
        onClick={this.handleSubmit} 
        disabled={!title || !muscles} >
         {exercise ? 'Edit' : 'Create'}
        </Button>
        </form>
    }
})

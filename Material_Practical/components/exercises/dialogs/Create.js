import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/styles';
 
const styles = theme =>({
      FormControl:{
          width:500
      }
})

export default withStyles(styles) (class extends Component{
    state={
        open:false,
        exercise:{
            title:'',
            description:'',
            muscles:''
        }  
    }
     
    handleToggle =() =>{
        this.setState({
            open:!this.state.open
        })
    }
    
    handleChange = name => ({target : {value}}) =>{
           this.setState({
                exercise :{
                    ...this.state.exercise,
                    [name] : value
                } })    
    }

    handleSubmit = () =>{
        //validation before submit
        const { exercise } =this.state

        this.props.onCreate({
            ...exercise,
            id:exercise.title.toLowerCase().replace(/ /g, '-')
        })

        this.setState({
            open:false,
            exercise:{
                title:'',
                description:'',
                muscles:''
            }
        })
    }
   
     render(){
         const { open, exercise:{title,description,muscles} } = this.state,
              { classes, muscles :categories } = this.props
         
         return(
            <Fragment>
            <Fab aria-label="add" onClick={this.handleToggle} size='small'> 
             <AddIcon />
            </Fab>
            <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
             <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
             <DialogContent>
               <DialogContentText>
                 Please fill out the form below
               </DialogContentText>
                <form>
                <TextField value={title} margin="normal" label="Title " className={classes.FormControl} onChange={this.handleChange('title')}/><br/>
                <FormControl className={classes.FormControl}>
                   <InputLabel htmlFor="muscles">Muscles</InputLabel>
                     <Select
                       value={muscles}
                       onChange={this.handleChange('muscles')}
                     >
                         {categories.map(category=>
                            <MenuItem key={category} value={category}>{category}</MenuItem>
                         )}
                     </Select>
                </FormControl><br/>
                <TextField value={description} multiline rows="4" margin="normal" label="Description" className={classes.FormControl} onChange={this.handleChange('description')}/>
                </form>
               </DialogContent>
              <DialogActions>
               <Button color="primary" variant="contained" onClick={this.handleSubmit}>
                 Create
               </Button>
             </DialogActions>
           </Dialog>
       </Fragment>
         )
     }  
})
  

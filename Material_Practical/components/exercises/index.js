import React, { Fragment } from 'react';
import { Grid, IconButton, ListItemSecondaryAction, Paper, Typography } from "@material-ui/core";
import {List,ListItem,ListItemText} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Form';

const styles ={
    Paper :{
        padding :20,
        marginTop : 10,
        marginBottom :10,
        height : 700,
        overflow : 'auto'
        
    }
}

export default ({exercises, 
                category,
                muscles,
                editMode,
                onSelect,
                exercise,
                exercise:
                {id,title='Welcome',description='Please select an exercise from the list on left.'},
                onDelete,
                onSelectEdit,
                onEdit
              }) =>
  <Grid container>
       <Grid item sm>
           <Paper style={styles.Paper}>
           {exercises.map(([group,exercises]) =>
             !category || category===group
             ? <Fragment key={group}>
             <Typography 
             variant="h4"
             style={{textTransform:'capitalize'}}
             >
                 {group}
             </Typography>
              <List component="nav">
                  {exercises.map(({id,title}) =>
                   <ListItem key={id} button onClick={() => onSelect(id)} >
                   <ListItemText primary={title} />
                   <ListItemSecondaryAction>
                     <IconButton onClick={() => onSelectEdit(id)}>
                       <Edit />
                     </IconButton>
                     <IconButton onClick={() => onDelete(id)}>
                       <Delete />
                     </IconButton>
                   </ListItemSecondaryAction>
                 </ListItem>
             )} 
            </List>
            </Fragment> 
             :null
           )}
           </Paper>
       </Grid>
       <Grid item sm>
          <Paper style ={styles.Paper} >
            {editMode? 
            <Form key={id} muscles={muscles} onSubmit={onEdit} exercise={exercise} />:
            <Fragment>
              <Typography variant="h3"> 
             {title}
              </Typography>
              <Typography style={{margin:10}} variant="h6"> 
               {description}
              </Typography>  
            </Fragment>
            }
          </Paper>
       </Grid>
  </Grid>

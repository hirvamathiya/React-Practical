import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import {List,ListItem,ListItemText} from '@material-ui/core';


const styles ={
    Paper :{
        padding :20,
        marginTop : 10,
        marginBottom :10,
        height : 700,
        overflow : 'auto'
        
    }
}

export default ({exercises}) =>
  <Grid container>
       <Grid item sm>
           <Paper style={styles.Paper}>
           {exercises.map(([group,exercises]) =>
           <Fragment>
            <Typography 
            variant="h4"
            style={{textTransform:'capitalize'}}
            >
                {group}
            </Typography>
             <List component="nav">
                 {exercises.map(({title}) =>
                  <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
            )} 
           </List>
           </Fragment>
           )}
           </Paper>
          
       </Grid>
       <Grid item sm>
          <Paper style ={styles.Paper} >
           <Typography variant="h3"> 
               Welcome!!
           </Typography>
           <Typography style={{margin:10}} variant="h6"> 
               Please select an exercise from the list on left.
           </Typography>
          </Paper>
       </Grid>
  </Grid>
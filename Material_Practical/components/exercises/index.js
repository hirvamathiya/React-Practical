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

export default ({exercises, category,onSelect,exercise:{id,title='Welcome',description='Please select an exercise from the list on left.'}}) =>
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
           <Typography variant="h3"> 
             {title}
           </Typography>
           <Typography style={{margin:10}} variant="h6"> 
            {description}
           </Typography>
          </Paper>
       </Grid>
  </Grid>

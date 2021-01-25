import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({  
  card: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    height: '100%',    
    backgroundSize: "cover"
  },
  media: {
     height: 0,
     paddingTop: '50%'
  },
  action: {
      display: "flex",
      justifyContent: "space-between"
  
  }
});

const Publication = ({ item }) => {
    const classes = useStyles();
    const truncate = (input) => input.length > 5 ? `${input.substring(0, 60)}...` : input;
    return(       

        <Card className={classes.card}>            
            <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {truncate(item.title)}
                </Typography>                
                <Typography gutterBottom variant="body2" component="p">
                    {item.publisher}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item["publication date"]}
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <Button size="small" color="secondary">
                    Add to Card
                </Button>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}

const PubList = ({ publications }) => {  
    return(       
        <Grid container spacing={3}>
            {publications && publications.map((item ,index) => {
                return(
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Publication item={item} key={index}/>
                    </Grid>     
                ) 
        })  }
        </Grid>        
    )
}

export default PubList
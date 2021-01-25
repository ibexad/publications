import React, { useState,useEffect, Fragment } from 'react'
import PubList from './components/PubList'
import YearTabs from './components/YearTabs'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import Progress from './components/Progress'
import data from "./SampleData.json"

function App() {
  
  const [publications, setPublications] = useState('')
  const [loading, setLoading] = useState(false)  

  const [year, setYear] = useState()
  const [publicationCount, setPublicationCount] = useState(0)

  useEffect(() => {
     fetchPublications(year)
  }, [year])

  const fetchPublications = async (year) =>{        
    setLoading(true)        
    if(year){      
      let result = data.filter(function (item){
        return item["publication date"] === year
      })
      setPublications(result) 
      setPublicationCount(result.length)
    }
    else{      
      setPublications(data) 
      setPublicationCount(data.length)
    }
    setLoading(false) 
  }

  return (
    <Fragment > 
      <Container> 
      <Grid container spacing={3}>      
        <Grid item xs={12} sm={12} md={12}>        
            <YearTabs callback={setYear}/>   
        </Grid>            
      </Grid>
        <Progress open={loading}/> 
        <Typography>
          Results: {publicationCount}
        </Typography>
        <PubList publications={publications} />    
        <Grid item container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">                   
        </Grid>
      </Container>
    </Fragment>
  );
}

export default App;

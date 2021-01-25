import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    //maxWidth: 600,
  },
});

const YearTabs = ({ callback }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    callback(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab label="All" />
        <Tab label="2017" value="2017" />
        <Tab label="2016" value="2016" />
        <Tab label="2015" value="2015"/>
        <Tab label="2014" value="2014"/>
      </Tabs>
    </Paper>
  );
}

export default YearTabs;
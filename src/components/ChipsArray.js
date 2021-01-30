import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    borderRadius: '0',
    boxShadow: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    position: "fixed"
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const handleClick = () => {
    

  }
  const [chipData, setChipData] = React.useState([
      //This is a dynamic data. Write how to fetch suggestions based on time of the day, user's behavior and recently viewed items
    { key: 0, label: 'Lorem' },
    { key: 1, label: 'Ipsum' },
    { key: 2, label: 'Dolor' },
    { key: 3, label: 'Sit' },
    { key: 4, label: 'Amet' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip 
            
            onClick={handleClick}
              // icon={icon}
              label={data.label}
              //On delete it should find a new suggestion, "push" it to the array index[n]
              // onDelete={data.label === 'React' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}
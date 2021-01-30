import {React,useState, initialState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { id } from 'postcss-selector-parser';
import _ from "lodash";
import {v4} from "uuid";



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  draggableListItem: {
      padding: '16px',
      display: 'flex',
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: "2.5px",
  },
  content: {

  }
}));



const item = {
    id: v4(),
    name: "In vulputate tortor ut metus posuere lacinia",
    description: "Pellentesque porta magna eget elit laoreet lobortis. Duis dictum dolor non felis vulputate porta. Proin viverra vestibulum erat, eget pellentesque massa tempor et."
  }

  const item2 = {
    id: v4(),
    name: "Nunc velit tortor",
    description: "Donec volutpat sapien massa, quis pharetra diam aliquam ac. Aliquam consequat neque at commodo iaculis. Morbi dictum ullamcorper congue. Etiam eget dapibus elit"
  }

  const item3 = {
    id: v4(),
    name: "Lorem ipsum dolor sit amet",
    description: "Donec ex velit, posuere in ipsum ac, lobortis rutrum urna. Proin risus dui, vehicula ut eros at, pellentesque luctus massa. Morbi mattis aliquet placerat"
  }

//Note: You can have multiple DroppabaleContainer just add that as a new object


export default function DraggableList() {

    const [state, setState] = useState({
        "DroppableContainer": {
          title: "DroppableContainer",
          items: [item, item2, item3]
        }
      })

  const handleDragEnd = ({destination, source}) => {
    console.log("from", source)
    //capture what item it is, remove it from the source which is an index in DraggableContainer 
    console.log("to", destination)
    //move the captrued item to a new source which is different index in DraggableContainer
    if (!destination) {
      console.log("not dropped in")
      return
      //not dropped in
      //if there is no destination, don't do anything
    }
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      console.log("dropped in same place")
      return 
      //drops in the same place
    }

    //creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}
    setState(prev => {
        prev = { ...prev }
        //remove from previous items array
        prev[source.droppableId].items.splice(source.index, 1)
        //adding to new items array location
        prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)


        return prev
      })


  }

  const classes = useStyles();


  return (
    <div >
        <DragDropContext onDragEnd={handleDragEnd}>
            {_.map(state, (data, key) => {
                //data is the data in DraggableContainer
                //Key is DraggableContainer
                //Draggable should be one component and Droppable one component
                return (
                    <div key={key}>
                        {/* <h3>{data.title}</h3> */}
                        <Droppable droppableId={key}> 
                            {(provided) => {
                                return(
                                    //This div should be where all individual list items live. Our Droppable Container
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.droppableProps}
                                      className={classes.root}
                                    > 
                                      {data.items.map((el, index) => {
                                        return(
                                          <Draggable key={el.id} index={index} draggableId={el.id}>
                                            {(provided, snapshot) => {
                                              console.log(snapshot)
                                              return(
                                                <div className={classes.draggableListItem}
                                                //Change classNames with withStyles
                                                //change span with dragIcon
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                >
                                               
                                                  {/* <span   {...provided.dragHandleProps}> Drag by ME </span> */}
                                                  <ListItemText primary={el.name} secondary={el.description} />
                                                  {/* {el.name}
                                                  {el.description} */}
                                                     <span 
                                                  {...provided.dragHandleProps}
                                                  > 
                                                    <DragIndicatorIcon >
                                                      </DragIndicatorIcon> 
                                                    </span>
                                                </div>
                                              )
                                            }}
                                          </Draggable>
                                        )
                                      })}
                                      {provided.placeholder}
                                    </div>         
                                )
                            }}
                        </Droppable>
                    </div>
                    )
            })}

        </DragDropContext>
     
    </div>
  );
}
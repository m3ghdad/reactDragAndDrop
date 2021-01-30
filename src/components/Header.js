import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar} from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search'


const useStyles = makeStyles ({
    root: {
        backgroundColor: '#F4F4F4',
        boxShadow: "none"

    }, 
    searchInput: {
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '14px',
        '&:hover':{
            backgroundColor: "#FFFFFF",
            border: '1px solid #E1E1E1',
            borderRadius: '2.5px'
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px'
        }
    }
})


export default function Header() {
    const classes = useStyles();

    return (
        <div>
             {/* <AppBar position="static" style={{backgroundColor: '#F4F4F4'}}></AppBar> */}
            <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item >
                        <IconButton>
                            <MenuIcon color="primary" fontSize="small">
                            </MenuIcon>
                        </IconButton>
                        
                    </Grid>
                    <Grid item sm ></Grid>
                        <InputBase 
                        className={classes.searchInput} 
                        placeholder="Search topics"
                        startAdornment={<SearchIcon fontSize="small"></SearchIcon>}
                        /> 
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={1} color="secondary">
                                <NotificationsIcon fontSize="small" />
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={20} color="secondary">
                                <ChatBubbleIcon fontSize="small"/>
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <PersonIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Toolbar>
            </AppBar>
        </div>
    )
}

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginTop:theme.spacing.unit *10,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    boards:{
        marginTop:theme.spacing.unit *10,
        width:900,
        marginLeft: 'auto',
            marginRight: 'auto',
      }
})
)

export default useStyles;
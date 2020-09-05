import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
    },
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    icon: {
        maxHeight: '80%',
        height: '80%',
        marginLeft: 5,
        borderRadius: 5,
    },
    text: {
        marginLeft: 5,
    }
})

const ListWrapper = ({
    className,
    style,
    icon,
    text,
    link,
    handleClick,
}) => {
    const classes = useStyles();

    return (
        <a href={link} className={classes.link}>
            <div className={[classes.root, className].join(' ')} onClick={handleClick}>
                {typeof icon === 'string' && (
                    <img className={classes.icon} style={style} src={icon} alt='icon' draggable='false'/>
                )}
                {typeof icon === 'object' && (
                    <div className={classes.icon}>
                        {icon}
                    </div>
                )}
                <div className={classes.text} style={{fontSize: window.innerWidth >= 400? 16: 13}}>
                    {text}
                </div>
            </div>
        </a>
    );
};

export default ListWrapper;
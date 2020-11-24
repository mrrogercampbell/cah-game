import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    base: {
        border: 'solid black 1px',
        // height: '50px',
        // width: '100px',
        padding: '50px',
        margins: '10px'
    },
});

const Deck = (props) => {
    const classes = useStyles();
    console.log(props.deckData)
    let { black } = props.deckData
    let listOfBlackCards = black.map(blackCard => (
        <li>{blackCard.text}</li>
    ))

    return (
        <div className={classes.base}>
            <h1>{props.deckData.name}</h1>
            <ul>
                {listOfBlackCards}

            </ul>
        </div>
    );
};

export default Deck;
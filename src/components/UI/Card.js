//UI Components can also be made if used in multiple places with same CSS.

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className ={classes}>{props.children}</div>

}

export default Card;
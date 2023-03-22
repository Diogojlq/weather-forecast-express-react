import './BaseComponent.css'

function BaseComponent(props) {
    const classes = 'base ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default BaseComponent;
export const IconLink = (props) => {
    return (
        <a href = {props.to}>
            <img src = {props.iconSrc}/>
        </a>
    )
}
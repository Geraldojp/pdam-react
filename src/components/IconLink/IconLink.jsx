function IconLink({ to, iconSrc ,...props}) {
    return (
        <a href={to}>
            <img src={iconSrc} {...props} />
        </a>
    );
}

export default IconLink;

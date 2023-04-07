function IconLink({ to, iconSrc }) {
    return (
        <a href={to}>
            <img src={iconSrc} />
        </a>
    );
}

export default IconLink;

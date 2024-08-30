import PropTypes from 'prop-types';
function SkillsComponent({ SvgIcon, title, colorHover }) {
    return (
        <div
            className="flex group flex-col justify-center w-fit hover:scale-110"
            style={{ '--hover-color': colorHover }}
        >
            <SvgIcon
                className={"group-hover:fill-[var(--hover-color)]"} 
                size={80}
            />
            <span className='text-center'>{title}</span>
        </div>
    );
}

SkillsComponent.propTypes = {
    SvgIcon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    colorHover: PropTypes.string.isRequired
}

export default SkillsComponent;
import propTypes from "prop-types";

function HeroButton({ Icon, text, action, size = 24, color = "white" }) {
  return (
    <a href={action}>
      <div className="flex gap-2 items-center dark:bg-darkTheme-button-background hover:bg-primary-color hover:scale-110 w-fit rounded-2xl border-2 border-gray-400 px-2 py-1">
        <Icon size={size} color={color} />
        <span className="dark:text-white hidden sm:block">{text}</span>
      </div>
    </a>
  );
}

HeroButton.propTypes = {
  Icon: propTypes.elementType.isRequired,
  text: propTypes.string,
  action: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
};

export default HeroButton;

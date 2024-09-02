import propTypes from "prop-types";

function HeroButton({ Icon, text, action, size = 24, isHiddenText = true }) {
  return (
    <a className="cursor-pointer" href={action} rel="noopener">
      <div className="flex gap-2 items-center bg-darkTheme-button-background hover:bg-primary-color hover:scale-110 w-fit rounded-2xl border-2 border-gray-700 dark:border-gray-400 px-2 py-1">
        <Icon className="text-white" size={size} />
        <span className={`text-white ${isHiddenText ? 'hidden' : 'block'} sm:block`}>
          {text}
        </span>
      </div>
    </a>
  );
}

HeroButton.propTypes = {
  Icon: propTypes.elementType.isRequired,
  text: propTypes.string,
  action: propTypes.string,
  size: propTypes.number,
  isHiddenText: propTypes.bool

};

export default HeroButton;

import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button className={`${className} p-2 px-10 text-white font-bold uppercase rounded-lg`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;

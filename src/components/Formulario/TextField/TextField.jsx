import PropTypes from 'prop-types';

const TextField = ({ labelName, htmlFor, placeholder, type, textarea, value, onChange, name }) => {
  const Element = textarea ? 'textarea' : 'input';
  return (
    <div className="mb-5">
      <label htmlFor={htmlFor} className="block text-gray-700 uppercase font-bold">
        {labelName}
      </label>
      <Element
        name={name}
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextField.displayName = 'TextField';

TextField.propTypes = {
  labelName: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
  textarea: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;

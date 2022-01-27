import PropTypes from 'prop-types'

const Button = ({ color, text, textColor, onClick }) => {

  return (
    <button onClick={onClick} 
    style={{ backgroundColor: color, color: textColor}}
    className='btn'>
      {text}
    </button>
  )
}

Button.defaultProps = {
    color: '#125254',
    textColor: '#a6dab4',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;

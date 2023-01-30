import './style.css';

const IconButton = (props) => {

  const { data, handleClick } = props;
  return (
  
      <span onClick={handleClick} class="material-symbols-outlined">
        {data}
      </span>
  );
};
export default IconButton;
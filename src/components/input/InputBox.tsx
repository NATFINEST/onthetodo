import './InputBox.scss';

const InputBox = () => {
  return (
    <div className="input-box">
      <input
        className="todo-input"
        type="text"
        placeholder="What do you want to do?"
      />
      <button aria-label="Add Todo Item to List">
        <i className="fa fa-plus" />
      </button>
    </div>
  );
};

export default InputBox;

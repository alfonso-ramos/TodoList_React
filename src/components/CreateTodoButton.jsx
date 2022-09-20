import '../styles/components/CreateTodoButton.css'

const CreateTodoButton = () => {

  const onClickButton = (msg) => (
    alert(msg)
  )

  return (
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton('Haz creado un nuevo ToDo')}
      >
        +
      </button>
  )
}

export default CreateTodoButton


interface IButton {
    type: "button" | "submit" | "reset";
    className: string
}
const Button = ({ type,className }:IButton) => {
  return (
      <div>
          <button type={type} className={className}>Create Task</button>
    </div>
  )
}

export default Button
import { ChangeEventHandler } from "react";



interface IInput {
  type: string;
  label?:string;
  title:string;
  placeholder:string;
  onChange: ()=> ChangeEventHandler;
}

const InputField = ({label, title,type,placeholder,onChange}:IInput) => {
  return (
      <div>
          <label>{ label}</label>
          <input title={title} type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default InputField
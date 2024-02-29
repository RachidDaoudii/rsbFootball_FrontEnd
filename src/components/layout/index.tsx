import React from "react";

const Input = ({ Title, placeholder, type, name, onChange })=>{
    return (
        <label className="block">
        <span>{Title}:</span>
        <span className="relative mt-1.5 flex">
          <input
            className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-red-600  focus:z-5 focus:outline-none"
            placeholder={placeholder}
            type={type}
            name={name}
            onChange={onChange}
          />
        </span>
      </label>
    )
}

export default Input;
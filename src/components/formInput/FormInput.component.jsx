import React from 'react'
import st from 'assets/styles/pages/pay.pages.module.scss'
import '../../assets/styles/variables.scss'

const FormInput = ({ 
   autoFocus = false,
   id,
   className ,
   isvalid,
   name,
   type ,
   placeholder,
   value,
   onBlur,
   onChange,
   min,
   max
}) => {
   return (
      <input
         name = {name}
         min={min ? min : ''}
         max={max ? max : ''}
         autoFocus={autoFocus}
         style={isvalid 
            ? { backgroundColor: '#ff00002e', border:"1px solid red" } 
            : {  backgroundColor: '#f7f7f7' , border:'1px solid darkgrey'}}
         id={id}
         type={type}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         onBlur={onBlur}
         className = {className}
      />
   )
}

export {FormInput}

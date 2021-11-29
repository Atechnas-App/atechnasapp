import { useState } from "react"
import { postLogin } from "../../actions/actions";

export const useForm = (initialState= {}) => {
   
    const [values, setValues] = useState(initialState)

const reset = (newFormState= initialState)=>{
  setValues(newFormState);
}



     const handleInputChange = ({ target }) => {
             postLogin({
               ...values,
               [target.name]: target.value,
             });
     };

     return [values, handleInputChange, reset];

}

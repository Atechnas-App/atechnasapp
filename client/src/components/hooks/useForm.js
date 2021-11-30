import { useState } from "react"
import { postLogin } from "../../actions/actions";

export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState)

  // const reset = (newFormState = initialState) => {
  //   setValues(newFormState);
  // }



  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleInputChange, ];

}

import { useState } from "react";

type Validation = (value: string) => boolean

const useInput = (validateValue: Validation) => {
    let [enteredValue, setEnteredValue] = useState<string>("");
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const valueIsValid = validateValue(enteredValue);

    //Indicates whether there is an error in data entry
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = () => {
        setIsTouched(true);
    }


    //function that allows you to reset the state
    const reset = () => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

}

export default useInput;
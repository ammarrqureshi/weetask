import { ChangeEvent, useState } from "react";

export const useFormInput = (initialValue: string) => {
  const [input, setInput] = useState(initialValue);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const InputProps = {
    value: input,
    onChange: inputChangeHandler,
    setInput: setInput,
  };
  return InputProps;
};

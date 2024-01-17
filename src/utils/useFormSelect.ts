import { ChangeEvent, useState } from "react";

export const useFormSelect = (initialValue: string) => {
  const [select, setSelect] = useState(initialValue);

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const SelectProps = {
    value: select,
    onChange: selectChangeHandler,
    setSelect: setSelect,
  };
  return SelectProps;
};

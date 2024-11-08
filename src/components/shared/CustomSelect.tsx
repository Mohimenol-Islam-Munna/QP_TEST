import { FC } from "react";
import Select from "react-select";

type Props = {
  options: Array<{ label: string; value: string }>;
  selectChangeHandler: (selectedItems: any) => void;
  value: any;
  isLoading: boolean;
};

const CustomSelect: FC<Props> = ({
  value,
  options,
  selectChangeHandler,
}): JSX.Element => {
  return (
    <Select
      value={value}
      isMulti={false}
      options={options}
      defaultValue={options[0]}
      onChange={selectChangeHandler}
    />
  );
};

export default CustomSelect;

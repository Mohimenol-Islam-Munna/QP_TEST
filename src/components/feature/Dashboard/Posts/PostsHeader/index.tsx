import { FC } from "react";
import CustomSelect from "../../../../shared/CustomSelect";
import useUserList from "../../../../../hooks/useUserList";

type Props = {
  selectChangeHandler: (selectedItems: any) => void;
  selectedItem: any;
};

const PostHeader: FC<Props> = ({
  selectedItem,
  selectChangeHandler,
}): JSX.Element => {
  const { userList } = useUserList();
  const { isLoading, data, error } = userList;

  return (
    <div>
      <div className="w-full flex items-center">
        <h1 className="text-3xl font-bold">Posts</h1>

        <div className="flex-grow flex justify-end">
          <div className="w-1/2">
            <CustomSelect
              isLoading={isLoading}
              options={[
                {
                  label: "All",
                  value: "All",
                },
                ...(data
                  ? data.map((item: any) => ({
                      label: item.name,
                      value: item.id,
                    }))
                  : []),
              ]}
              value={selectedItem}
              selectChangeHandler={selectChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;

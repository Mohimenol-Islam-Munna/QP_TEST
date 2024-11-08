import { FC } from "react";
import useUserList from "../../../../../hooks/useUserList";
import CustomSelect from "../../../../shared/CustomSelect";
import usePostList from "../../../../../hooks/usePostList";

type Props = {
  selectChangeHandler: (selectedItems: any) => void;
  selectedItem: any;
};

const CommentsHeader: FC<Props> = ({
  selectChangeHandler,
  selectedItem,
}): JSX.Element => {
  const { postList } = usePostList();
  const { isLoading, data, error } = postList;

  return (
    <div>
      <div className="w-full flex items-center">
        <h1 className="text-3xl font-bold">Comments</h1>

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
                      label: item.title,
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

export default CommentsHeader;

import { FC, useState } from "react";
import PostList from "./PostList";
import PostHeader from "./PostsHeader";
import usePostList from "../../../../hooks/usePostList";

const PostsHeader: FC = (): JSX.Element => {
  const { postList } = usePostList();

  const [selectedItem, setSelectedItem] = useState<any>({
    label: "All",
    value: "All",
  });

  const selectChangeHandler = (selectedItem: any) => {
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <PostHeader
        selectedItem={selectedItem}
        selectChangeHandler={selectChangeHandler}
      />
      <PostList selectedItem={selectedItem} postList={postList} />
    </div>
  );
};

export default PostsHeader;

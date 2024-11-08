import { FC, useState } from "react";
import CommentsHeader from "./CommentsHeader";
import CommentList from "./CommentList";
import useCommentList from "../../../../hooks/useCommentList";

const Comments: FC = (): JSX.Element => {
  const { commentList } = useCommentList();

  const [selectedItem, setSelectedItem] = useState<any>({
    label: "All",
    value: "All",
  });

  const selectChangeHandler = (selectedItem: any) => {
    setSelectedItem(selectedItem);
  };

  return (
    <div>
      <CommentsHeader
        selectedItem={selectedItem}
        selectChangeHandler={selectChangeHandler}
      />
      <CommentList selectedItem={selectedItem} commentList={commentList} />
    </div>
  );
};

export default Comments;

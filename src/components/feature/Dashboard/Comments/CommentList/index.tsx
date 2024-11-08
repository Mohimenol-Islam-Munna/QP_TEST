import { FC } from "react";
import { CommentListType } from "../../../../../hooks/useCommentList";

type Props = {
  commentList: CommentListType;
  selectedItem: any;
};

const CommentList: FC<Props> = ({ commentList, selectedItem }): JSX.Element => {
  const { isLoading, data, error } = commentList;

  return (
    <div className="mt-8 p-3">
      <div>
        {isLoading && <div>Loading...</div>}
        {!isLoading && error && <div>Error</div>}
      </div>

      <div className="w-2/3">
        {!isLoading &&
          !error &&
          data &&
          data
            .filter((item: any) =>
              selectedItem?.value === "All"
                ? true
                : `${item?.postId}` === `${selectedItem?.value}`
            )
            .map((comment: any) => (
              <div
                key={comment.id}
                className="mb-4 p-3 rounded-md border border-green-500"
              >
                <h2 className="font-bold">{comment.name}</h2>
                <p>{comment.body}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CommentList;

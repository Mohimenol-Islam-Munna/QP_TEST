import { FC } from "react";
import { PostListType } from "../../../../../hooks/usePostList";

type Props = {
  selectedItem: any;
  postList: PostListType;
};

const PostList: FC<Props> = ({ postList, selectedItem }): JSX.Element => {
  const { isLoading, data, error } = postList;

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
                : `${item?.userId}` === `${selectedItem?.value}`
            )
            .map((post: any) => (
              <div
                key={post.id}
                className="mb-4 p-3 rounded-md border border-gray-200"
              >
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default PostList;

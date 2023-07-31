import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export const InfiniteScrollComponent = ({ data }: any) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${posts.length + 10}`
    );
    const newPosts = await res.json();
    setPosts((post: any) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data: any) => (
          <h3>{data.project}</h3>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

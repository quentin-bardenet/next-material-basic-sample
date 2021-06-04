import React from "react";
import axios from "axios";

function postDetail({ post }) {
  return (
    <div>
      <strong>{post?.id}</strong>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postId = params.id;

  console.log(postId);

  const post = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return {
    props: {
      post: post.data,
    },
    revalidate: 3600,
  };
}

export default postDetail;

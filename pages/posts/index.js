import React from "react";
import Link from "next/link";
import axios from "axios";
import Card from "./components/Card";

export async function getStaticProps() {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts"); // todo remplacer par appel axios

  return {
    props: {
      posts: data.data,
    },
    revalidate: 60,
  };
}

function posts({ posts }) {
  return (
    <div>
      {posts?.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </div>
  );
}

export default posts;

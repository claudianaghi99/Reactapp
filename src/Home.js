import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  // dependency array un useeffect - no loop

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* //conditional templating in react logical and - if false it doesnt bother  */}
      {/* //with the right . left-null---false -- when blogs = true, evaluates right and shows data */}
    </div>
  );
};

export default Home;

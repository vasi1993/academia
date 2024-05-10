import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";

import "./blog.css";

const Blog = (props) => {
  const { blg } = props;
  const lista = blg.map((act) => {
    return (
      <BlogCard
        key={act.id}
        type={act.type}
        date={act.date}
        title={act.title}
        desc={act.desc}
        cover={act.cover}
      />
    );
  });

  return (
    <>
      <Back title="Jurnal" />
      <section className="blog padding">
        <div className="container grid2">{lista}</div>
      </section>
    </>
  );
};

export default Blog;

import React from "react";

const BlogCard = (props) => {
  const { type, date, title, desc, cover } = props;
  return (
    <>
      <div className="items shadow">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <div className="admin flexSB">
            <span>
              <i className="fa fa-user"></i>
              <label htmlFor="">{type}</label>
            </span>
            <span>
              <i className="fa fa-calendar-alt"></i>
              <label htmlFor="">{date}</label>
            </span>
            <span>
              <i className="fa fa-comments"></i>
              <label htmlFor=""></label>
            </span>
          </div>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

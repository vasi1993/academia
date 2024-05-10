import React, { useState } from "react";
import "./blog.css";
import Back from "../common/back/Back";

const BlogAdd = (props) => {
  const [type, setType] = useState("Admin");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const blog = { type, date, title, desc, cover: `images/${cover}` };
    props.transmit(blog);
    setType("");
    setDate("");
    setTitle("");
    setDesc("");
    setCover("");
  };

  return (
    <>
      <Back title="Povestea ta" />
      <div className="blog flexSB">
        <form className="formblog" onSubmit={tratezSubmit}>
          <h1> Povestea ta </h1>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder=""
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titlu"
          />

          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            cols="10"
            row="10"
            placeholder="Scrie povestea ta aici"
          />
          <input
            type="text"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            placeholder="Avatar"
          />

          <button type="submit">Trimite</button>
        </form>
      </div>
    </>
  );
};

export default BlogAdd;

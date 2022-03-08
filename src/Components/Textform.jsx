import { useState } from "react";

const Textform = (props) => {
  const [text, setText] = useState("erase and enter your text");

  const toUpper = () => {
    let n = text.toUpperCase();
    setText(n);
  };
  const toLower = () => {
    let n = text.toLowerCase();
    setText(n);
  };

  const onChangefun = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={onChangefun}
            className="form-control"
            id="myBox"
            rows="3"
            value={text}
          ></textarea>
        </div>
        <button onClick={toUpper} className="btn btn-primary mx-3">
          convert to uppercase
        </button>
        <button onClick={toLower} className="btn btn-secondary my-3">
          convert to lowercase
        </button>
      </div>
      <div className="container">
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
      </div>
    </>
  );
};

export default Textform;

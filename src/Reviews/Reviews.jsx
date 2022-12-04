import React, { useState } from "react";
import people from "../data.js";
export default function Reviews() {
  const [index, setindex] = useState(0);
  let { id, name, job, image, text } = people[index];
  function checkNumber(number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  function getNext() {
    setindex((index) => {
      console.log(index);
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  }
  function getPreviouse() {
    setindex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  }
  function getSurprise() {
    setindex((index) => {
      let newindex = Math.floor(Math.random() * people.length);
      if (newindex === index) {
        newindex = index + 1;
      }
      console.log(newindex);
      return checkNumber(newindex);
    });
  }
  return (
    <>
      <div className=" m-auto bg-white shadow-lg p-4 w-50 text-center rounded">
        <div className="item">
          <figure className="m-auto my-4 ">
            <img
              src={image}
              alt="client"
              className="w-100  h-100 rounded-circle "
            />
            <i className="fa-solid fa-quote-left rounded-circle text-white"></i>
          </figure>
          <h5>{name}</h5>
          <p className="text-info">{job}</p>
          <p className="text-muted">{text}</p>
          <div className=" icons">
            <i
              className="fa-solid fa-angle-left p-3 fa-2x text-info cursor"
              onClick={getPreviouse}
            ></i>
            <i
              className="fa-solid fa-angle-right p-3 fa-2x text-info cursor"
              onClick={getNext}
            ></i>
          </div>
          <button className="btn btn-outline-info" onClick={getSurprise}>
            {" "}
            Surbrise me
          </button>
        </div>
      </div>
    </>
  );
}

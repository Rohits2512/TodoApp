import React, { useState } from "react";
import "../App.css";
import Buttons from "./Buttons";
import ListHead from "./ListHead";
const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const addActivity = () => {
    setListData((listData) => {
      let updated = [...listData, activity];
      console.log(updated);
      setActivity("");
      return updated;
    });
  };

  const handleRemove = (index) => {
    let updatedValue = listData.filter((ele, i) => {
      return i !== index;
    });
    setListData(updatedValue);
  };
  const handleRemoveAll = () => {
    setListData([]);
  };
  const removeAll = {
    backgroundColor: "gray",
    marginLeft: "36%",
  };
  return (
    <>
      <div className="container">
        <div className="header"> TODO LIST </div>
        <input
          type="text"
          placeholder="Add Task"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <Buttons handleClick={addActivity} value="Add" />
        {listData.length > 0 ? (
          <ListHead heading={"Here is your List"} />
        ) : (
          <ListHead heading={"List is Empty"} />
        )}
        {listData !== [] &&
          listData.map((item, index) => {
            return (
              <>
                <div className="data-wrapper" key={index}>
                  <div className="listData">{item}</div>
                  <div>
                    <Buttons
                      handleClick={() => {
                        handleRemove(index);
                      }}
                      value={"Remove"}
                    />
                  </div>
                </div>
              </>
            );
          })}
        {listData.length >= 1 && (
          <Buttons
            handleClick={handleRemoveAll}
            customStyle={removeAll}
            value={"Remove All"}
          />
        )}
      </div>
    </>
  );
};

export default Todo;

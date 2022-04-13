import React, { useState, useEffect } from "react";
import Vector from "../../assets/images/Vector.png";
import VectorTrue from "../../assets/images/VectorTrue.png";
import "../../assets/css/DropDown.css";
import EmployeeData from "../../Data.json";

const DropDown = () => {
  const [arrowShift, setArrowShift] = useState(false);
  const [allTechnologies, setAllTechnologies] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [checkIt, setCheckIt] = useState(false);

  const [allColors, setAllAssistants] = useState(false);
  const [isCheckedd, setIsCheckedd] = useState([]);
  const [checkItt, setCheckItt] = useState(false);

  const [search, setSearch] = useState("");

  const handleSingleCheck = (e) => {
    setCheckIt(false);
    const { title } = e.target;
    if (isChecked[title]) {
      setIsChecked(
        isChecked.filter((checked_title) => checked_title !== title)
      );
      return setAllTechnologies(false);
    }
    isChecked.push(title);
    setIsChecked([...isChecked]);
    setAllTechnologies(isChecked.length === EmployeeData.technologies.length);
  };

  const handleAllCheck = (e) => {
    setCheckIt(true);
    setAllTechnologies(!allTechnologies);
  };

  const handleSingleCheckk = (e) => {
    setCheckItt(false);
    const { title } = e.target;
    if (isCheckedd[title]) {
      setIsCheckedd(
        isCheckedd.filter((checked_title) => checked_title !== title)
      );
      return setAllAssistants(false);
    }
    isCheckedd.push(title);
    setIsCheckedd([...isCheckedd]);
    setAllAssistants(isCheckedd.length === EmployeeData.colors.length);
  };

  const handleAllCheckk = (e) => {
    setCheckItt(true);
    setAllAssistants(!allColors);
  };

  useEffect(() => {
    setIsChecked((current) => {
      const nextIsChecked = {};
      Object.keys(current).forEach((key) => {
        nextIsChecked[key] = allTechnologies;
      });
      return nextIsChecked;
    });
  }, [allTechnologies]);

  useEffect(() => {
    setIsCheckedd((current) => {
      const nextIsChecked = {};
      Object.keys(current).forEach((key) => {
        nextIsChecked[key] = allColors;
      });
      return nextIsChecked;
    });
  }, [allColors]);

  return (
    <div>
      <span className="dropdown-text">Select dropdown</span>

      <div className="dropdown-outer">
        <div className="dropdown-inner">
          <div className="dropdown-textt">Select</div>
        </div>
        <div
          onClick={() => setArrowShift(!arrowShift)}
          className="dropdown-arrow"
        >
          {arrowShift === false ? (
            <img src={Vector} alt="vector" />
          ) : (
            <img src={VectorTrue} alt="vectorTrue" />
          )}
        </div>

        <div
          style={{ top: 70 }}
          className={
            arrowShift === false ? "dropdown-box" : "dropdown-box-true"
          }
        >
          <input
            className="Search"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <span className="All-Technologies">All Technologies</span>

          <input
            style={{ float: "right" }}
            type="checkbox"
            checked={allTechnologies}
            onChange={handleAllCheck}
          />
          {EmployeeData.technologies
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => {
              return (
                <div>
                  <span className="All-Technologies-data">{data.title}</span>
                  <input
                    style={{ float: "right" }}
                    type="checkbox"
                    title={data.title}
                    checked={
                      checkIt === true ? allTechnologies : isChecked[data.title]
                    }
                    onChange={handleSingleCheck}
                  />
                </div>
              );
            })}
          <div>
            <span className="All-Technologies">All Colours</span>

            <input
              style={{ float: "right" }}
              type="checkbox"
              checked={allColors}
              onChange={handleAllCheckk}
            />
            {EmployeeData.colors
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (
                  val.title
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((data) => {
                return (
                  <div>
                    <span className="All-Technologies-data">{data.title}</span>
                    <input
                      style={{ float: "right" }}
                      type="checkbox"
                      title={data.title}
                      checked={
                        checkItt === true ? allColors : isCheckedd[data.title]
                      }
                      onChange={handleSingleCheckk}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

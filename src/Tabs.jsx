import React, { useState } from "react";

const Tabs = () => {
  const [value, setValue] = useState(null);
  const [tabIndex, setTabIndex] = useState(1);
  const [tab, setTab] = useState([{ value: 0 }]);
  const setValueHandler = (value) => {
    setValue(value);
  };
  const addTabHandler = () => {
    const newTab = { value: tabIndex };
    setTab([...tab, newTab]);
    setTabIndex(tabIndex + 1);
  };
  return (
    <div>
      <button onClick={addTabHandler}>add tab</button>
      {tab.map((item) => (
        <button key={item.value} onClick={() => setValueHandler(item.value)}>
          tab{item.value}
        </button>
      ))}
      {tab.map((item) => (
        <div
          key={item.value}
          className={`${value !== item.value && "hidden"} bg-red-500 w-32 h-32`}
        >
          value{item.value}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

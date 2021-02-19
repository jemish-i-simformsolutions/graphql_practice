import React, { useCallback, useEffect, useState } from "react";

function About() {
  const [color, setColor] = useState("yellow");
  const [c, setC] = useState("white");
  const changecolor = useCallback(() => {
    setC((val) => (val == "white" ? "green" : "white"));
  }, [c]);

  return (
    <div style={{ backgroundColor: `${color}`, color: `${c}` }}>
      About us
      <button
        onClick={async () => {
          await changecolor();
        }}
      >
        click to change color
      </button>
      {console.log("hello")}
    </div>
  );
}
export default React.memo(About);

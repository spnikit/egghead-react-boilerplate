import React, { useState } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = evt => {
    if (evt.type === "contextmenu") {
      evt.preventDefault();
      setCounter(counter - 1);
    } else if (evt.type === "click") {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <h1 className={counter > 3 ? "warning" : null}>Hello from react</h1>
      <button
        className="button"
        onClick={handleClick}
        onContextMenu={handleClick}
      >
        {counter}
      </button>
      {counter > 10 ? (
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
      ) : null}
    </>
  );
};

export default hot(module)(App);

import React, { useContext } from "react";
import Context from "../../context/context";

const Home = () => {
  const context = useContext(Context);

  return (
    <div>
      <p>home</p>
      <button onClick={() => context.changeTest()}>
        {context.test ? "True" : "False"}
      </button>
    </div>
  );
};

export default Home;

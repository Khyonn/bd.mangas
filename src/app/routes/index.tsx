import { Route, Routes } from "react-router-dom";
import HomePage from "../main/Home/pages/HomePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="*"
        element={
          <>
            <h1>404 ! Not found !</h1>
            <p>The page you're looking for does not exists</p>
          </>
        }
      />
    </Routes>
  );
};

export default Routing;

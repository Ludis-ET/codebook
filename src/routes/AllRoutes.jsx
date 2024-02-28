import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

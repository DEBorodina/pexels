import { Routes, Route, useParams } from "react-router-dom";
import HomePageContainer from "../pages/HomePageContainer";
import { ROUTE_NAMES } from "./routeNames";
export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomePageContainer/>} />
      <Route path={ROUTE_NAMES.CATHEGORY_PAGE} element={<h1>cathegory</h1>} />
    </Routes>
  );
};

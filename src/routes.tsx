import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./modules/common/components";
import pageList from "./modules/index.page";

export const RoutesRender = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {pageList.map(({ route, component: Component }) => {
        return <Route key={route} path={route} element={<Component />} />;
      })}
    </Route>
  </Routes>
);

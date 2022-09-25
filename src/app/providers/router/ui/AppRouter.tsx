import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {RouterConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(RouterConfig).map(({path, element}) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<div>Loading...</div>}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from "widgets/PageLoader/PageLoader";

const AppRouter = () => (
  <Routes>
    {Object.values(RouterConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);

export default AppRouter;

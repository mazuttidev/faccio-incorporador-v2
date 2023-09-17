import React from 'react';
import './index.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Empresa } from './pages/Empresa';
import { Empreendimentos } from './pages/Empreendimentos';
import { Wrapper } from './components/Wrappper';

import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
    // errorElement: < ErrorPage />
  },
  {
    path: "/empresa",
    element: < Empresa />,
  },
  {
    path: "/empreendimentos",
    element: < Empreendimentos />,
    children: [
      {
        path: "/empreendimentos/:name",
        // element: < PredioName />
      },
      {
        path: "/empreendimentos/:name",
        // element: < PredioName />
      },
      {
        path: "/empreendimentos/:name",
        // element: < PredioName />
      }
    ]
  },
  {
    path: "/contado",
    // element: < Contato />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Wrapper children={<RouterProvider router={router} />}/>
     {/* <App/> */}
  </React.StrictMode>
);

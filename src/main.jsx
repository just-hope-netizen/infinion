import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CreateCampaign from "./pages/createCampaign/CreateCampaign.jsx";
import Error from "./pages/error/Error.jsx";
import CampaignInformation from "./pages/campaign/campaign-information/CampaignInformation.jsx";
import Campaign from "./pages/campaign/Campaign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "create-campaign",
    element: <CreateCampaign />,
  },
  {
    path: "campaign",
    element: <Campaign />,
   
  },
  {
    path: "campaign-information",
    element: <CampaignInformation />,

  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

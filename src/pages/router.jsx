import { Route, Routes} from "react-router-dom";

// Routes URLs
import { ROUTES } from "../constants/routes";

// Components


import Home from "./Home";
import Layout from "@/components/Layout";


export function Router() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
            {/* <Route path={ROUTES.configurations} element={<Configurations />} />
            <Route path={ROUTES.projects} element={<Projects />} />
            <Route path={ROUTES.SingleProject} element={<SingleProject />} />
            <Route path={ROUTES.datasets} element={<Datasets />} />
            <Route path={ROUTES.connections} element={<Connections />} />
            <Route path={ROUTES.panelContol} element={<PanelControl />} />
            <Route path={ROUTES.Success} element={<SuccessfulConnection />} />
            <Route path={ROUTES.Cancelled} element={<CanceledConnection />} /> */}
          </Route>
       
      </Routes>

  );
}

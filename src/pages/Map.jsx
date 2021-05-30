import React from "react";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/layout/Navigation";
import Map from "../components/Map";
// import AuthStore from "../store/modules/Auth";
import { observer } from "mobx-react-lite";

const MapPage = observer(() => {
  return (
    <div className="page">
      <Navigation />
      <Map />
      <Sidebar />
    </div>
  );
});

export default MapPage;

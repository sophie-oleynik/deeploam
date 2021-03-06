import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navigation from "../components/Navigation";
import SavedLocations from "../components/sidebar/SavedLocations";
import NewLocation from "../components/NewLocation";
import Map from "../components/Map";
// import AuthStore from "../store/modules/Auth";
import { observer } from "mobx-react-lite";

const MapPage = observer(() => {
  return (
    <div className="page">
      <Navigation />

      <Map />

      {/* Card with checked locations */}
      <Sidebar />

      {/* Card with saved locations */}
      <SavedLocations />

      {/* Modal for creating location */}
      <NewLocation />
    </div>
  );
});

export default MapPage;

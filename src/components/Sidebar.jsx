import React from "react";
import Store from "../store/Store";
import { observer } from "mobx-react-lite";

const Sidebar = observer(() => {
  return (
    <div className="page-sidebar">
      <div
        className="d-flex flex-column p-3 text-white bg-dark"
        style={{ height: "100%" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          <span className="fs-4">Оберіть алгоритм:</span>
          <li
            className="list-group-item text-white bg-dark"
            style={{ listStyleType: "none", border: "none" }}
          >
            <input type="checkbox" className="form-check-input me-1" />
            Алгоритм 1
          </li>
          <li
            className="list-group-item text-white bg-dark"
            style={{ listStyleType: "none", border: "none" }}
          >
            <input type="checkbox" className="form-check-input me-1" />
            Алгоритм 2
          </li>
          <li
            className="list-group-item text-white bg-dark"
            style={{ listStyleType: "none", border: "none" }}
          >
            <input type="checkbox" className="form-check-input me-1" />
            Алгоритм 3
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-primary"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Показати маршрут
        </button>

        <button
          onClick={Store.toLocation}
          type="button"
          className="btn btn-primary mt-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Моя локація
        </button>
      </div>
    </div>
  );
});

export default Sidebar;

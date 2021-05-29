import React from "react";
import Icon from "./common/Icon";
import Store from "../store/Store";
import { observer } from "mobx-react-lite";

const Sidebar = observer(() => {
  return (
    <div className="page-sidebar">
      <form className="search-form">
        <fieldset>
          <input type="search" placeholder="Знайти місто..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </fieldset>
        <button
          onClick={Store.toLocation}
          type="button"
          className="btn btn-white button-location"
        >
          <Icon icon="geo" size="2rem" />
        </button>
      </form>
      <div className="town">Ваше місто:</div>
      <div className="selected-locations">
        {[0, 1].map((i) => (
          <div className="location" key={i}>
            <div className="location__title">Сільпо №1</div>
            <div className="location__address">вул. Степана Бандери 23</div>
            <div className="location__geo">50.450001, 30.523333</div>
          </div>
        ))}
      </div>
      <button type="button" className="btn btn-success button-route">
        Показати маршрут
      </button>
    </div>
  );
});

export default Sidebar;

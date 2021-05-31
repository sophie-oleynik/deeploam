import React from "react";
import Icon from "../common/Icon";
import Location from "./Location";
import ResultWay from "./ResultWay";
import Store from "../../store/Store";
import { observer } from "mobx-react-lite";
import MapStore from '../../store/modules/Map';

const Sidebar = observer(() => {
  const isShow = Store.isShowPanel;

  if (Store.resultWay) return (
    <div className={`page-sidebar ${isShow ? ' show' : null}`}>
      <ResultWay result={Store.resultWay} back={Store.clearResult} />
    </div>
  )

  return (
    <div className={`page-sidebar ${isShow ? ' show' : null}`}>
      <div className="town">Обрані локації:</div>
      <div className="selected-locations">
        {MapStore.markers.length === 0
          && <div style={{ textAlign: 'center' }}>Немає локацій <br /> Оберіть локації на карті</div>}
        {MapStore.markers.map((marker, i) => (
          <Location marker={marker} key={i} id={i} isCollapsable />
        ))}
      </div>

      <button
        disabled={MapStore.markers.length <= 2}
        onClick={Store.testTSPEndpoint}
        className="btn btn-success button-route">
        Показати маршрут
      </button>
    </div>
  );
});

export default Sidebar;

{/* <form className="search-form">
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
</form> */}
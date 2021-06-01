import { makeAutoObservable } from "mobx";
import MapStore from './modules/Map';
class Store {
  isShowPanel = false;
  isShowSaved = false;
  resultWay = null;
  resultTime = null;

  constructor() {
    makeAutoObservable(this);
  }

  togglePanel = () => {
    this.isShowSaved = false;
    this.isShowPanel = !this.isShowPanel;
  }
  toggleSaved = () => {
    this.isShowPanel = false;
    this.isShowSaved = !this.isShowSaved;
  }

  testTSPEndpoint = () => {
    // 614f849e3291d9b92cb8c4b6151b8d6c
    let markersQuery = MapStore.markers.reduce((s, el, index) => {
      s += el.longitude + "," + el.latitude;
      if (index !== MapStore.markers.length - 1) {
        s += "|";
      }
      return s;
    }, "");

    let indexes = null
    fetch(
      `https://api.visicom.ua/data-api/5.0/core/tsp.json?waypoints=${markersQuery}&key=614f849e3291d9b92cb8c4b6151b8d6c`
    ).then((res) => {
      res.json().then((res) => {
        indexes = res.list;
        this.resultWay = res.list.map(el => {
          return { ...MapStore.markers[el.index], id: el.index };
        })

        fetch(`https://api.visicom.ua/data-api/5.0/core/distancematrix.json?origins=${markersQuery}&destinations=${markersQuery}&key=614f849e3291d9b92cb8c4b6151b8d6c`)
          .then(res => {
            res.json().then(res => {
              let distance = 0;
              for (const key in indexes) {
                if (Number(key) < indexes.length - 2) {
                  distance += res.rows[indexes[key].index][indexes[Number(key) + 1].index].distance
                }
              }
              this.resultTime = Math.ceil(Number(distance / 1000 / 30));
            })
          })

      });
    })
  };
  getMarkers = () => {
    return this.resultWay ? this.resultWay : MapStore.markers;
  }
  clearResult = () => {
    this.resultWay = null;
  }
}

const store = new Store();

export default store;

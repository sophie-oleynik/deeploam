import React from 'react';
import Store from "../../store/Store";
import { observer } from "mobx-react-lite";
import LocationsStore from '../../store/modules/Locations';
import Location from './Location';

const SavedLocations = observer(() => {
    const isShow = Store.isShowSaved;

    return (
        <div className={`page-sidebar ${isShow ? ' show' : null}`}>
            <div className="town">Збережені локації:</div>
            <div className="selected-locations">
                {LocationsStore.locations.length === 0
                    && <div style={{ textAlign: 'center' }}>Немає збережених локацій</div>}
                {LocationsStore.locations.map((marker, i) => (
                    <Location marker={marker} key={i} id={i} />
                ))}
            </div>
        </div>
    );
});


export default SavedLocations
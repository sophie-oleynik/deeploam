import React, { useState } from 'react';
import Icon from '../common/Icon';
import MapStore from '../../store/modules/Map';
import LocationStore from '../../store/modules/Locations';
import { observer } from 'mobx-react-lite';
const Location = observer(({ marker, id, isSaved, isCollapsable }) => {
    const [active, setActive] = useState(false)

    const toggleLocation = () => {
        if (isCollapsable) setActive(!active)
    }
    const saveLocation = () => {
        LocationStore.saveLocation(marker);
    }
    const removeLocation = () => {
        MapStore.removeMarker(id);
    }
    const handleBookmark = e => {
        debugger
        e.stopPropagation();
        MapStore.setStartMarker(id);
    }
    return (
        <div className="location" onClick={toggleLocation}>
            {marker.name && <div className="location__title">{marker.name}</div>}
            <div className="location__address">{marker.address || "Адресу не визначенно"}</div>
            <div className="location__geo">{marker.latitude}, {marker.longitude}</div>

            {active && (
                <div className="d-flex align-center my-2">
                    <button className="btn btn-white" title="Зберегти локацію" onClick={handleBookmark}>
                        <Icon
                            icon={MapStore.startMarker === id ? "bookmark_active" : "bookmark"}
                            size="1.5rem" />
                    </button>
                    {!isSaved && <button className="btn btn-white ms-auto" title="Зберегти локацію" onClick={saveLocation}>
                        <Icon icon="remember" size="1.5rem" />
                    </button>}
                    <button className="btn btn-white ms-2" title="Видалити локацію" onClick={removeLocation}>
                        <Icon icon="remove" size="1.5rem" />
                    </button>
                </div>
            )}
        </div>
    );
});


export default Location
import React from 'react';
import Location from './Location';

const ResultWay = ({ result, back }) => {
    return (
        <>
            <div className="town">Обрані локації:</div>
            <div className="selected-locations">
                {result.map((marker, i) => (
                    <Location marker={marker} key={i} id={marker.id} />
                ))}
            </div>

            <button
                onClick={back}
                className="btn btn-success button-route">
                Повернутися
            </button>
        </>
    );
};


export default ResultWay
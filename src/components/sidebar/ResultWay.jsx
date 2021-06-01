import React from 'react';
import Location from './Location';

const ResultWay = ({ result, resultTime, back }) => {
    return (
        <>
            <div className="town">Маршрут:</div>
            <div className="selected-locations">
                {result.map((marker, i) => (
                    <Location marker={marker} key={i} id={marker.id} />
                ))}
            </div>

            <div className="time-result">
                <div className="time-result__label">Орієнтований час: <span>{resultTime} год.</span></div>
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
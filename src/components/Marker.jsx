import React from "react";

const eventNames = ["onDragStart", "onDrag", "onDragEnd"];

function round5(value) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

function ControlDrag(props) {
  return (
    <div>
      {eventNames.map((eventName) => {
        const { events = {} } = props;
        const lngLat = events[eventName];
        return (
          <div key={eventName}>
            {lngLat ? lngLat.map(round5).join(", ") : <em>null</em>}
          </div>
        );
      })}
    </div>
  );
}

export default ControlDrag;

import React from "react";

function Maps({ latitud, longitud }) {
  return (
    <div>
      <iframe
        title="Mapa"
        width="100%"
        height="300"
        src={`https://www.google.com/maps?q=${latitud},${longitud}&z=15&output=embed`}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Maps;

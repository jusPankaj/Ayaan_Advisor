import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function WorldMaps() {
  const [activePark, setActivePark] = useState(null);

  const parkData = [
    {
      id: 1,
      name: 'Park 1',
      description: 'Description of Park 1',
      coordinates: [45.4, -75.7],
    },
    {
      id: 2,
      name: 'Park 2',
      description: 'Description of Park 2',
      coordinates: [45.5, -75.8],
    },
  ];

  return (
    <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkData.map((park) => (
        <Marker key={park.id} position={park.coordinates}>
          <Popup>
            <div>
              <h2>{park.name}</h2>
              <p>{park.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default WorldMaps;

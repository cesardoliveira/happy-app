import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet';

import mapMarketImg from '../assets/images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarketImg,
  iconAnchor: [58, 68],
  iconSize: [29, 68],
  popupAnchor: [120, 2]
});

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarketImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Minas Gerais</strong>
          <span>Belo Horizonte</span>
        </footer>
      </aside>

      <Map
        center={[-19.9026615, -44.1041363]}
        zoom={11}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url={`${process.env.REACT_APP_MAPBOX_URL}${process.env.REACT_APP_MAPBOX_TOKEN}`} 
        />
        <Marker icon={mapIcon} position={[-19.9026615, -44.1041363]}>
          <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
            Casa dos Meninos
            <Link to="/orphanages/1"> 
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup> 
        </Marker>
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
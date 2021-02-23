import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarketImg from '../assets/images/map-marker.svg';

import '../styles/components/sidebar.css';

function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarketImg} alt="Happy"/>

      <footer className="app-sidebar">
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF"/>
        </button>
      </footer>
    </aside>
  );
}

export default Sidebar;
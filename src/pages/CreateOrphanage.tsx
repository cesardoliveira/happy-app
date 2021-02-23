import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Marker, Map, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from "leaflet";

import PrimaryButton from "../components/PrimaryButton";
import Sidebar from "../components/Sidebar";

import { FiPlus } from "react-icons/fi";
import happyMapIcon from '../utils/mapIcon';
import api from "../services/api";

import '../styles/pages/create-orphanages.css';

function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleOnClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng
    });
  }

  async function handleSumit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    })

    await api.post('orphanages', data);

    alert('Cadastro Realizado com Sucesso!');
    history.push("/app");
  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });
    setPreviewImages(selectedImagesPreview);
  }

  return (
    <div id="page-create-orphanage">
      <Sidebar />
      <main>
        <form className="create-orphanage-form" onSubmit={handleSumit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-19.9207425, -43.9393314]}
              style={{ width: '100%', height: 280 }}
              zoom={16}
              onClick={handleOnClick}
            >
              <TileLayer
                url={`${process.env.REACT_APP_MAPBOX_URL}${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker interactive={false} icon={happyMapIcon} position={[position.latitude, position.longitude]} />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={evt => setName(evt.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="about" value={about} onChange={evt => setAbout(evt.target.value)} maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={name} />
                  );
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple type="file" id="image[]" onChange={handleSelectImage} />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" value={instructions} onChange={evt => setInstructions(evt.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={evt => setOpeningHours(evt.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
      </main>
    </div>
  );
}

export default CreateOrphanage;
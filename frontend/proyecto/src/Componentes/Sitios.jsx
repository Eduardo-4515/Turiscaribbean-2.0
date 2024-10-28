import React, { useEffect } from 'react';
import {Input} from 'antd';
import './Sitios.css'


const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function MapComponent() {
useEffect(() => {
    const iniciarMap = () => {
    const coord = { lat: 10.3932, lng: -75.4832 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: coord,
    });
    new window.google.maps.Marker({
        position: coord,
        map: map,
    });
    };

    const cargarMapa = () => {
    const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap`; //key: AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
    script.async = true;
    window.iniciarMap = iniciarMap;
    document.body.appendChild(script);
    };

    cargarMapa();
}, []);

return (
    <div style={{display: 'flex'}}>
    <div id="modalContainer" class="container hidden">
        <div class="modal">
            <div class="modal__header">
                <span class="modal__title">Añadir sitio</span>
                <button id="closeModal" class="button button--icon">
                    <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                    </svg>
                </button>
            </div>
            <div class="modal__body">
                <div class="input">
                    <label class="input__label">Project title</label>
                    <input class="input__field" type="text"/> 
                    <p class="input__description">El título debe contener un máximo de 32 caracteres.</p>
                </div>
                <div class="input">
                    <label class="input__label">Descripcion</label>
                    <textarea class="input__field input__field--textarea"></textarea>
                    <p class="input__description">Danos una buena descripción para que todos sepan donde se ubica.</p>
                </div>
                
                  <form class="file-upload-form">
                    <label for="file" class="file-upload-label">
                      <div class="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em">
                          <path
                           d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                          ></path>
                        </svg>
                        <p>Arrastrar y soltar</p>
                        <p>or</p>
                        <span class="browse-button">Explorar archivo</span>
                      </div>
                     <input id="file" type="file" />
                    </label>
                 </form>
                 </div>
            <div class="modal__footer">
                <button class="button button--primary">Subir sitio</button>
            </div>
        </div>
    </div>
    
      {/* Contenedor del mapa */}
    <div id="map" style={{ width: '50%', height: '570px' }}></div>
    </div>
    
);
}

export default MapComponent;


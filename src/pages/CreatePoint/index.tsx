import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
   return (
      <div id="page-create-point">
         <header>
            <img src={ logo } alt="Ecoleta"/>

            <Link to="/">
               <FiArrowLeft />
               Voltar para home
            </Link>
         </header>

         <form action="">
            <h1>Cadastro do <br /> ponto de coleta</h1>

            <fieldset>
               <legend>
                  <h2>Dados</h2>
               </legend>

               <div className="field">
                  <label htmlFor="name">Email</label>
                  <input type="text" name="name" id="name" />
               </div>

               <div className="field-group">
                  <div className="field">
                     <label htmlFor="email">Nome da entidade</label>
                     <input type="text" name="email" id="email" />
                  </div>

                  <div className="field">
                     <label htmlFor="whatsapp">Whatsapp</label>
                     <input type="text" name="whatsapp" id="whatsapp" />
                  </div>
               </div>
            </fieldset>

            <fieldset>
               <legend>
                  <h2>Endereço</h2>
                  <span>Selecione o endereço no mapa</span>
               </legend>

               <Map center={[-30.0350373,-51.1271811  ]} zoom={15}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />

                  <Marker position={[-30.0350373,-51.1271811  ]} />
               </Map>

               <div className="field-group">
                  <div className="field">
                     <label htmlFor="uf">Estado (UF)</label>
                     <select name="uf" id="uf">
                        <option value="0">Selecione uma UF</option>
                     </select>
                  </div>

                  <div className="field">
                     <label htmlFor="city">Cidade</label>
                     <select name="city" id="city">
                        <option value="0">Selecione uma cidade</option>
                     </select>
                  </div>
               </div>
            </fieldset>

            <fieldset>
               <legend>
                  <h2>Itens de coleta</h2>
                  <span>icone um ou mais ítens abaixo</span>
               </legend>

               <ul className="items-grid">
                  <li>
                     <img src="" alt=""/>
                  </li>
               </ul>
            </fieldset>

            <button>Cadastrar ponto de coleta</button>
         </form>
      </div>
   )
}

export default CreatePoint;
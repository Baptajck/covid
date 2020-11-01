import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './GlobalFrance.scss';

// import function from /utils
import { formatDate, separatorNumber } from '../../utils';

const GlobalFrance = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
      .then(response => response.json())
      .then((response) => {
        setData(response.FranceGlobalLiveData[0]);
      })
  }

  useEffect(() => {
    getData();
  }, []);

  const { casConfirmes, date, deces, decesEhpad, gueris, hospitalises, nouvellesHospitalisations, nouvellesReanimations, reanimation } = data;

  return (
    <div className="global">
      <h1 className="global-title">Coronavirus en France</h1>
      <p className="global-desc">Situation globale</p>
      <div className="global-container">

      <p className="global-container-date">{formatDate(date)}</p>

      {/* Cas Globaux */}
      <div className="global-container-box-casConfirm _global-box">
        <p className="global-container-box-casConfirm-item">
          {separatorNumber(+casConfirmes)} <br />
          <span className="_global-box-item">Cas confirmés</span>
        </p>
      </div>

      {/* Décès */}
      <div className="global-container-box-dead _global-box">
        <p className="global-container-box-dead-item">
          {separatorNumber(+deces)} <br />
          <span className="_global-box-item">Décès</span>
        </p>
      </div>

      {/* Hospitalisation */}
      <div className="global-container-box-hospital _global-box">
        <p className="global-container-box-item">
          {separatorNumber(+hospitalises)} <br />
          <span className="global-container-box-item--plus">( + {separatorNumber(+nouvellesHospitalisations)} )</span> <br />
          <span className="_global-box-item">Hospitalisations</span>
         </p>
      </div>

      {/* Réanimations */}
      <div className="global-container-box-reanimation _global-box">
        <p className="global-container-box-item">
          {separatorNumber(+reanimation)} <br />
          <span className="global-container-box-item--plus">( + {separatorNumber(+nouvellesReanimations)} )</span>  <br />
          <span className="_global-box-item">Réanimations</span> 
         </p>
      </div>
      
      {/* Décès */}
      <div className="global-container-box-dead--others _global-box">
        <p className="global-container-box-dead--others-item">
          {separatorNumber(+decesEhpad)} <br />
          <span className="_global-box-item">Décès EHPAD et EMS</span>
        </p>
      </div>
            
      {/* Guéris */}
      <div className="global-container-box-gueris _global-box">
        <p className="global-container-box-gueris-item">
          {separatorNumber(+gueris)} <br />
          <span className="_global-box-item">Guéris</span>
        </p>
      </div>
      
      </div>
    </div>
  )
}

export default GlobalFrance;
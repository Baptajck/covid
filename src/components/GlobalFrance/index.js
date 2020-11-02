import React, { useState, useEffect } from 'react';
import './GlobalFrance.scss';
import Spinner from './Spinner';

// import function from /utils
import { formatDate, separatorNumber } from '../../utils';

const GlobalFrance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getData = () => {
    setLoading(true);
    fetch('https://coronavirusapi-france.now.sh/FranceLiveGlobalData')
      .then(response => response.json())
      .then((response) => {
        setLoading(false);
        setData(response.FranceGlobalLiveData[0]);
      })
  }

  useEffect(() => {
    getData();
  }, []);
  
  // if (loading) {
  //   return <Spinner loading={loading}/>
  // }

  const { casConfirmes, date, deces, decesEhpad, gueris, hospitalises, nouvellesHospitalisations, nouvellesReanimations, reanimation } = data;

  // console.table(data);

  return (
    <div className="global">
      <h1 className="global-title">Coronavirus en France</h1>
      <p className="global-desc">Situation globale</p>
      
      {!loading && <p className="global-container-date">{formatDate(date)}</p>}
      <div className="global-container">
      {
        !loading ? (
          <>
            {/* Cas Globaux */}
            <div className="global-container-box-casConfirm _global-box">
              <div className="global-container-box-item">
                <p>{separatorNumber(+casConfirmes)}</p>
                <span className="_global-box-item">Cas confirmés</span>
              </div>
            </div>

            {/* Décès */}
            <div className="global-container-box-dead _global-box">
              <div className="global-container-box-item">
                <p>{separatorNumber(+deces)}</p>
                <span className="_global-box-item">Décès</span>
              </div>
            </div>

            {/* Hospitalisation */}
            <div className="global-container-box-hospital _global-box">
              <div className="global-container-box-item">
                {separatorNumber(+hospitalises)}
                <p className="global-container-box-item--plus">( + {separatorNumber(+nouvellesHospitalisations)} )</p>
                <p className="_global-box-item">Hospitalisations</p>
              </div>
            </div>

            {/* Réanimations */}
            <div className="global-container-box-reanimation _global-box">
              <div className="global-container-box-item">
                {separatorNumber(+reanimation)}
                <p className="global-container-box-item--plus">( + {separatorNumber(+nouvellesReanimations)} )</p>
                <p className="_global-box-item">Réanimations</p> 
              </div>
            </div>
            
            {/* Décès */}
            <div className="global-container-box-dead--others _global-box">
              <div className="global-container-box-item">
                <p>{separatorNumber(+decesEhpad)}</p>
                <p className="_global-box-item">Décès EHPAD et EMS</p>
              </div>
            </div>
                  
            {/* Guéris */}
            <div className="global-container-box-gueris _global-box">
              <div className="global-container-box-item">
                <p>{separatorNumber(+gueris)}</p>
                <p className="_global-box-item">Guéris</p>
              </div>
            </div>
          </>
        ) : <Spinner loading={loading}/>
      }
     
      
      </div>
    </div>
  )
}

export default GlobalFrance;
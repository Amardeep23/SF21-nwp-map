import React, { useState} from 'react';
import mapImg from './images/india map.jpg';
// import pinImg from './images/pin-trans.png';
import './Map.css';
// import data from './data.json';
import MapCard from './MapCard';
import DATA from './data';
// import Aos from 'aos';
// import "aos/dist/aos.css";
import Modal from 'react-modal';


Modal.setAppElement('#root');


const Map = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [num, setNum] = useState(0);
    return (
        <>
            <div className="map-div">
                <div className="map">
                    <img src={mapImg} alt="India Map" className="map-img" />
                    {DATA.map((city, key) => (
                        <div key={key}>
                            <div id={`pin ${city.id}`} className="pin" style={{ left: city['pinx'], top: city['piny'] }}>
                                <svg className="svgPinClass" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
                                    <path fill="" fillRule="evenodd" d="M457.457,440.463C457.457,475.554,367.262,504,256,504c-111.262,0-201.457-28.446-201.457-63.537
                                        c0-27.566,55.666-51.028,133.475-59.825c9.324,12.538,18.423,24.389,26.899,35.24c-29.606,4.208-49.899,12.82-49.899,22.762
                                        c0,14.086,40.734,25.505,90.982,25.505c50.248,0,90.982-11.419,90.982-25.505c0-9.933-20.257-18.539-49.821-22.751
                                        c8.526-10.867,17.662-22.711,27.014-35.229C401.883,389.473,457.457,412.919,457.457,440.463L457.457,440.463z M256,8
                                        C167.988,8,96.64,79.348,96.64,167.36c0,73.139,106.233,208.215,155.462,269.667c0.979,1.223,2.328,1.87,3.897,1.87
                                        c1.567,0.003,2.915-0.645,3.897-1.865c47.19-58.805,155.463-194.524,155.463-269.672C415.36,79.348,344.012,8,256,8L256,8z
                                        M256,83.664c46.116,0,83.502,37.386,83.502,83.502c0,46.117-37.385,83.502-83.502,83.502c-46.117,0-83.502-37.385-83.502-83.502
                                        C172.498,121.05,209.883,83.664,256,83.664z" clipRule="evenodd" />
                                </svg>
                            </div>
                            {/* <img src={SvgImg} alt={`${city.name} pin`} id={`pin ${city.id}`} class="pin" style={{left: city['pinx'], top: city['piny']}}/> */}
                            <MapCard city={city} />

                        </div>
                    ))}
                </div>
            </div>

            <div className="mobile_grid">
                <div className="mobile_grid_container">
                    {DATA.map((city, key) => (
                        <div key={key}>

                            <div className="mobile_grid_item1 grid_child">
                                <div onClick={() => {
                                    setModalIsOpen(true);
                                    setNum(key);
                                }}>
                                    {/*<ScrollAnimation animateIn='flipInY'animateOut='flipOutY'> */}

                                    {city.name}
                                </div>

                            </div>


                            {/* </ScrollAnimation> */}



                        </div>
                    ))}
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                content:
                                {
                                    height: '60%',
                                    zIndex: '4000',
                                    border: 'none',
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'

                                },
                                overlay: {
                                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                }

                            }
                        }>
                        <div className="mobile-modal-card-parent">
                            {DATA.filter(DATA => DATA.id).map((c, i) => {
                                if (num == i) {
                                    return (
                                        <div key={i}>
                                            <div class="mobile-a-box">
                                                <div class="mobile-img-container">
                                                    <div class="mobile-img-inner">
                                                        <div class="mobile-inner-skew">
                                                            <img src={c.image} alt={c.name} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mobile-text-container">
                                                    <h3>{c.name}</h3>
                                                    <div>
                                                        This a demo experiment to skew image container. It looks good.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </Modal>

                </div>

            </div>
        </>
    );
}

export default Map;

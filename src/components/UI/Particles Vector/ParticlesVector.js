import React from 'react';
import Particles from 'react-particles-js';

const particlesVector = (props) => {

    let increasedAmount = 0;

    if(props.addExtra > 0) { increasedAmount += props.addExtra; }

    let config = {

        "particles": {
            "number": {
                "value": 80 + increasedAmount
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "#ccc"
                },
                "image": {
                    "src": "http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#fff",
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "straight": false
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "repulse": {
                    "distance": 50,
                    "duration": 0.4
                },
                "bubble": {
                    "distance": 100,
                    "size": 10
                }
            }
        }
    }




    return (

        <div>
        <Particles params = {config} style = {props.style} />
        </div>
    )
}

export default particlesVector;
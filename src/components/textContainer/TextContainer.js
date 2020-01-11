import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import './TextContainer.css'
import { DiNodejs,DiReact, } from "react-icons/di"
import {MdLiveTv,MdColorLens} from 'react-icons/md'


const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h2>Realtime Chatting <MdLiveTv /><br/>
       customizing the theme color<MdColorLens /></h2>
      <h5>built with React<DiReact style={{fontSize:'35px'}}/>, Express, Node <DiNodejs  style={{fontSize:'40px'}} /> and Socket.IO</h5>
      <hr/>

    </div>
    {users
        ? (
          <div>
            <h4>Currently Chatting:</h4>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
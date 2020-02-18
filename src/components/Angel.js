import React from "react"
import  "./Angel.css"
import {faAngellist} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image';


const AngelCard = ({angel}) => {
  return <div className="angel" key={angel.Name}>
    <Img alt={angel.Name} fixed={angel.Attachments.localFiles[0].childImageSharp.fixed} />
    <h3>{angel.Name}</h3>
    <a href={angel.Profile}>
     <FontAwesomeIcon icon={ faAngellist} className="icon" />
     <span>Profile</span>
    </a>
  </div>
}

export default AngelCard;

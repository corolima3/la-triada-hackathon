import React from 'react'
import { useState } from 'react';
import nftOne from "../../assets/1.jpeg"
import nftTwo from "../../assets/2.jpeg"
import nftThree from "../../assets/3.jpeg"
import nftFour from "../../assets/4.jpeg"
import nftFive from "../../assets/5.jpeg"
import nftSix from "../../assets/6.jpeg"
import nftSeven from "../../assets/7.jpeg"
import nftEight from "../../assets/8.jpeg"
import nftNine from "../../assets/9.jpeg"
import nftTen from "../../assets/10.jpeg"
import emumu2 from "../../assets/img-celu/emumu2.jpg"
import nftEleven from "../../assets/11.jpeg"
import chuwbacca from "../../assets/img-celu/chuwbacca.jpg"
import Modal from "../modal/Modal";
import {Link} from "react-router-dom"


const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setIsModalOpen(false);
    };
  
    const galleryImages = [
      nftOne, nftTwo, nftThree, nftFour, nftFive,
      nftSix, nftSeven, nftEight, nftNine, nftTen
    ];
  

  return (
    <body>
        <header className="header">
            <div className="contenedor contenido-header">
                <div className="barra">
                    <div className="logo">
                        <h1 className="nombre-sitio">
                             Triada<span>Hackathon</span>
                        </h1>
                    </div>

                    <div className="contacto">
                        <a className="telefono" href="tel:01-800-0000-000">01-800-0000-000</a>

                        <nav className="navegacion">
                            <a className="link" href="#">Inicio</a>
                            <a className="link" href="#nosotros"><Link to={"/about"} >Nosotros</Link></a>
                            <a className="link" href="#modelos">Navegacion</a>
                        </nav>
                    </div>
                </div>
                <div className="slogan">
                    <h1>NFT</h1>
                    <p>La Triada - Hackathon</p>
                </div>
            </div>
        </header>

        <section id="galeria" className="contenedor mt-5">
        <h2>Galería</h2>

        <div className="galeria">
          {galleryImages.map((image, index) => (
            <div className="imagen" key={index} onClick={() => openModal(image)}>
              <img src={image} alt={`imagen galeria ${index + 1}`} />
            </div>
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          imageURL={selectedImage}
        />
      </section>
      <section id="createNFT">
  <h2 className='h2'>Cree su cuenta y comercialice imágenes, videos y audios</h2>
  <p className='p'>En Triada, usted, particular aficionado al gaming, arte, anime, fútbol, etc., podrá subir su imagen, video, audio, y comercializarlos digitalmente. Mediante la tecnología blockchain.</p>
  <div className="container">
          <img src={emumu2} alt="emumu" />
          <img src={chuwbacca} alt="chuwbacca" />
        </div>
  <p className='p'>Por ejemplo, si usted, aficionado del anime, cuenta con una colección de doscientos muñecos, estatuillas u otro tipo de colección de Pokémon, necesitará capturar las imágenes de cada uno, estilizarlas, y como último paso, registrarlas.</p>
  <h6>¿Cómo se hace?</h6>
  <p className='p'>Inicialmente debe registrarse <span className="link">aquí</span>. Se solicitará información personal: nombre, apellido, domicilio, teléfono, etc. Es importante recordar que para las operaciones de compra o venta, tiene la obligación de registrar una wallet. Por practicidad, recomendamos MetaMask.</p>
  <p className='p'>Posterior al registro, en su perfil encontrará un botón, Crear NFT, en la parte superior derecha. Para más información, descargue el manual de instrucciones.</p>
</section>

      <footer className="footer">
        <div className="contenedor">
            <div className="barra">
                <div className="logo">
                    <h1 className="nombre-sitio">
                        La Triada<span>Hackathon</span>
                    </h1>
                </div>

                <div id="contacto" className="contacto">

                    <nav className="navegacion">
                        <a className="link" href="#">Inicio</a>
                        <a className="link" href="#">Nosotros</a>
                        <a className="link" href="#">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>

        <p className="copyright">Todos los derechos reservados 2024 &copy; </p>
    </footer>

    </body>
  )
}

export default LandingPage
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
import nftEleven from "../../assets/11.jpeg"
import Modal from "../modal/Modal"

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
        <header class="header">
            <div class="contenedor contenido-header">
                <div class="barra">
                    <div class="logo">
                        <h1 class="nombre-sitio">
                            La Triada<span>Hackathon</span>
                        </h1>
                    </div>

                    <div class="contacto">
                        <a class="telefono" href="tel:01-800-0000-000">01-800-0000-000</a>

                        <nav class="navegacion">
                            <a class="link" href="#">Inicio</a>
                            <a class="link" href="#nosotros">Navegacion</a>
                            <a class="link" href="#modelos">Navegacion</a>
                        </nav>
                    </div>
                </div>
                <div class="slogan">
                    <h1>NFT</h1>
                    <p>La Triada - Hackathon</p>
                </div>
            </div>
        </header>

        <section id="galeria" class="contenedor mt-5">
        <h2>Galería</h2>

        <div class="galeria">
          {galleryImages.map((image, index) => (
            <div class="imagen" key={index} onClick={() => openModal(image)}>
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

      <footer class="footer">
        <div class="contenedor">
            <div class="barra">
                <div class="logo">
                    <h1 class="nombre-sitio">
                        La Triada<span>Hackathon</span>
                    </h1>
                </div>

                <div id="contacto" class="contacto">

                    <nav class="navegacion">
                        <a class="link" href="#">Inicio</a>
                        <a class="link" href="#">Nosotros</a>
                        <a class="link" href="#">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>

        <p class="copyright">Todos los derechos reservados 2024 &copy; </p>
    </footer>

    </body>
  )
}

export default LandingPage
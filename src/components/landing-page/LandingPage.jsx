import React from 'react'

const LandingPage = () => {
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
    </body>
  )
}

export default LandingPage
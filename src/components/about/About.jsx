import NFT from "../../assets/img-celu/NFT.svg";
import "./About.css"

function About() {

    return (
        <div className="container-about" >
            <h1 className="h1">Construyendo una economía digital abierta</h1>
            <div className="container-jr" >
                <article>
                <p className="p">Bienvenidos a Triada, una organización latina compuesta por el Ingeniero Informático Quilcaro Manuel, el Licenciado Lona Tomás y el desarrollador Coro Lima José. En el corazón de nuestra
                    misión se encuentra la construcción de una economía digital abierta y vibrante.</p>
                <p className="p">En Triada, creemos en el poder transformador de los tokens no fungibles, o NFT. Estos activos digitales únicos, que van desde obras de arte y música hasta videos y tweets,
                    son creados en una cadena de bloques, lo que les confiere inmutabilidad y verificabilidad. Además, los NFT pueden comprarse y venderse en linea, abriendo un nuevo mundo de posibilidades.</p>
                <p className="p">Lo fascinante de los NFT es que poseen propiedades únicas: son inimitables, escasos, comercializables y utilizables en diversas aplicaciones. Similar a los bienes físicos,
                    los NFT te otorgan la libertad de hacer lo que desees con ellos: desde regalarlos a un amigo al otro lado del mundo hasta venderlos en un mercado abierto. Sin embargo,
                    a diferencia de los bienes físicos, los NFT están imbuidos con toda la programabilidad de los bienes digitales.</p>
                <p className="p">En el núcleo de nuestra visión está la convicción de que los protocolos abiertos, como Ethereum, y los estándares, como ERC-721 y ERC-1155, permitirán el surgimiento de
                    nuevas y dinámicas economías. En Triada, estamos comprometidos en crear herramientas que empoderen a los consumidores para intercambiar sus artículos libremente, a los
                    creadores para lanzar nuevas obras digitales, y a los desarrolladores para construir mercados integrados para sus productos digitales.</p>
                <p className="p">Únete a Triada en la exploración de un universo donde la creatividad, la innovación y la libertad se fusionan en una experiencia única. ¡Descubre un nuevo horizonte
                    digital con nosotros!</p>
                </article>
                <div className="IMG">
                <img src={NFT} alt="img de nft" />

                </div>

            </div>
        </div>
    )
}
export default About;
import Celia from "./assets/Celia.png";
import anuncio from "./assets/anuncio.jpeg";


export default function Sobre() {

    return (
        <div className="bg-azul-escuro w-100">

            <div className="container py-4">

                <div className="row align-items-center">

                    {/* Foto */}
                    <div className="col-12 col-md-4 text-center">
                        <img
                            className="w-75 w-md-75 border-roxo-claro shadow-lg rounded-circle"
                            src={Celia}
                            alt="Foto da Dra. Celia"
                        />
                    </div>

                    {/* Carrossel */}
                    <div className="col-12 col-md-8 mt-4 mt-md-0">

                        <div
                            id="sobreCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                            data-bs-interval="5000"
                        >

                            <div className="carousel-inner">

                                {/* SOBRE */}
                                <div className="carousel-item active">
                                    <div className="bg-white rounded-4 p-4 p-md-5">

                                        <h2 className="fw-semibold mb-3">
                                            Sobre a Dra. Celia
                                        </h2>

                                        <p className="text-secondary lh-lg">
                                            Dra. Celia A. W. Yamauchi formou-se pela
                                            Faculdade de Odontologia de Santo Amaro
                                            (atual UNISA) em 1994, estagiou por 3 anos
                                            em odontopediatria, concluiu o curso de
                                            odontologia miofuncional, prótese fixa
                                            imediata e Auriculoterapia.
                                        </p>

                                        <div className="border-start border-4 border-primary bg-light p-3 mt-4">
                                            <p className="fst-italic text-secondary mb-2">
                                                “Prezo, além de conhecimento de materiais
                                                e técnicas novas, através da participação
                                                de congressos, cursos de atualização e
                                                aperfeiçoamento, uma odontologia
                                                humanizada, onde o paciente seja tratado
                                                de maneira individualizada e acolhedora.”
                                            </p>

                                            <small className="fw-semibold text-primary">
                                                Dra. Celia A. W. Yamauchi
                                            </small>
                                        </div>

                                    </div>
                                </div>

                                {/* BANNER */}
                                <div className="carousel-item">
                                    <img
                                        src={anuncio}
                                        className="d-block w-100 rounded-4"
                                        alt="Consultório odontológico"
                                    />
                                </div>

                                {/* OUTRO TEXTO */}
                                <div className="carousel-item">
                                    <div className="bg-white rounded-4 p-4 p-md-5">

                                        <h2 className="fw-semibold mb-3">
                                            Atendimento humanizado
                                        </h2>

                                        <p className="text-secondary lh-lg">
                                            Cada paciente é atendido de forma
                                            individualizada, buscando oferecer uma
                                            experiência acolhedora e personalizada.
                                        </p>

                                    </div>
                                </div>

                            </div>

                            {/* Indicadores */}
                            <div className="carousel-indicators">

                                <button
                                    type="button"
                                    data-bs-target="#sobreCarousel"
                                    data-bs-slide-to="0"
                                    className="active"
                                />

                                <button
                                    type="button"
                                    data-bs-target="#sobreCarousel"
                                    data-bs-slide-to="1"
                                    
                                />

                                <button
                                    type="button"
                                    data-bs-target="#sobreCarousel"
                                    data-bs-slide-to="2"
                                />

                            </div>

                            {/* Anterior */}
                           <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#sobreCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" />
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#sobreCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon bg-dark rounded-circle p-3" />
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
        
    )
}
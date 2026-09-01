import { useState } from "react";

import imagem1 from "./assets/imagem1.jpeg";
import imagem2 from "./assets/imagem2.jpeg";
import imagem3 from "./assets/imagem3.jpeg";

export default function Carrossel() {
    const imagens = [
        imagem1,
        imagem2,
        imagem3
    ];

    const [atual, setAtual] = useState(0);

    function anterior() {
        setAtual((atual - 1 + imagens.length) % imagens.length);
    }

    function proximo() {
        setAtual((atual + 1) % imagens.length);
    }

    return (
        <div className="position-relative w-100">

            <img
                src={imagens[atual]}
                alt={`Consultório ${atual + 1}`}
                className="img-fluid rounded-3 w-100"
                style={{
                    height: "300px",
                    objectFit: "cover"
                }}
            />

            <button
                onClick={anterior}
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle shadow"
            >
                ←
            </button>

            <button
                onClick={proximo}
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle shadow"
            >
                →
            </button>

        </div>
    );
}
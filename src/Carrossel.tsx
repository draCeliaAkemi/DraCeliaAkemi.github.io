import { useState } from "react";

export default function Carrossel() {
    const imagens = [
        "src/assets/imagem1.jpeg",
        "src/assets/imagem2.jpeg",
        "src/assets/imagem3.jpeg"
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

            {/* Seta esquerda */}
            <button
                onClick={anterior}
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle shadow"
            >
                ←
            </button>

            {/* Seta direita */}
            <button
                onClick={proximo}
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle shadow"
            >
                →
            </button>

        </div>
    );
}
import Celia from "./assets/Celia.png";

export default function Sobre() {

    return (
        <div className="bg-azul-escuro w-100">

            <div className="d-flex justify-content-center align-items-center container">

                <img
                    className="w-25 border-roxo-claro shadow-lg m-5 rounded-circle"
                    src={Celia}
                    alt="Foto da Dra. Celia"
                />

                <div className="branco p-2">

                    <p className="vw-1-5">
                        Dra Celia A. W. Yamauchi formou-se pela faculdade de
                        Odontologia de Santo Amaro (Atual Unisa) em 1994,
                        estagiou por 3 anos em odontopediatria, concluiu o curso
                        de odontologia miofuncional, prótese fixa imediata e
                        Auriculoterapia.
                    </p>

                    <p className="vw-1-5">
                        "Prezo além de conhecimento de materiais e técnicas
                        novas, através da participação de congressos, cursos de
                        atualização e aperfeiçoamento, uma odontologia
                        humanizada, onde o paciente seja tratado de maneira
                        individualizada e acolhedora"
                    </p>

                </div>

            </div>

        </div>
    )
}
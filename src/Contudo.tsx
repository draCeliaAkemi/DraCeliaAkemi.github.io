import Carrossel from "./Carrossel";

export default function Conteudo()
{
    return(
        <main >
            <section className=" shadow-lg w-100 bg-azul mt-5 p-5 ">
                <div>
                    <h2 className="display-5 roxo-claro bold text-center container" >Atendemos somente com hora marcada</h2>

                    <p className="text-center branco">
                        Agende seu horário previamente para garantir
                        um atendimento tranquilo e exclusivo.
                    </p>
                    
                </div>
                
                
            </section>


            <section id="tratamentos" className="container py-5">

            <div className="text-center mb-5">
                <h1>Atendimento odontológico personalizado</h1>

                <p>
                    Cuidamos do seu sorriso com atenção,
                    conforto e atendimento humanizado.
                </p>
            </div>

            <div className="row g-4">

                <div className="col-12 col-lg-6">

                    <div className="border rounded-3 shadow p-4 h-100">

                        <h2 className="mb-4">Tratamentos</h2>

                        <ul className="list-group">

                            <li className="list-group-item">
                                Odontologia Geral
                            </li>

                            <li className="list-group-item">
                                Clareamento Dental
                            </li>

                            <li className="list-group-item">
                                Prótese Fixa Imediata
                            </li>

                            <li className="list-group-item">
                                Próteses Removíveis
                            </li>

                            <li className="list-group-item">
                                Auriculoterapia
                            </li>

                            <li className="list-group-item">
                                Odontologia Miofuncional
                            </li>

                            <li className="list-group-item">
                                Odontologia Humanizada
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="col-12 col-lg-6">

                    <div className="border rounded-3 shadow p-4 h-100">

                        <h2 className="mb-4">Consultório</h2>

                        <Carrossel />

                    </div>

                </div>

            </div>

        </section>

                
            
            
        </main>
    )
}

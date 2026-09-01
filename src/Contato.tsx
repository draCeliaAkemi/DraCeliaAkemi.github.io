

export default function Contato() {
    return (
        <section className="container ">
            <h2>Onde estamos</h2>
            <div className="d-flex flex-wrap justify-content-around align-items-center">
                <iframe
                src="https://www.google.com/maps?q=Av.+Cupecê,+2899,+São+Paulo+-+SP&output=embed"
                width="400"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                />

                <div className="border p-3 border-roxo-claro">
                     <address>
                        Avenida Cupecê, 2899 - Sala 04<br />
                        São Paulo - SP
                    </address>
                    <p>Email - draceliaodonto@gmail.com</p>
                    <p>Whatsapp - +55 11 97848-8334</p>
                    
                    
                </div>
               

            </div>
            
        </section>

    );
}
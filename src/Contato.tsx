

export default function Contato() {
    return (
        <section className="container ">
            <h2>Onde estamos</h2>
            <div className="d-flex justify-content-around align-items-center">
                <iframe
                src="https://www.google.com/maps?q=Av.+Jo%C3%A3o+Dias,+1946,+S%C3%A3o+Paulo+-+SP&output=embed"
                width="400"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                />

                <div className="border p-3 border-roxo-claro">
                     <address>
                        Av. João Dias, 1946<br />
                        São Paulo - SP
                    </address>
                    <p>Email - draceliaodonto@gmail.com</p>
                    <p>Whatsapp - +55 11 97848-8334</p>
                    
                    
                </div>
               

            </div>
            
        </section>

    );
}
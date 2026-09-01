
import './Style/index.css'

export default function App() {

  return (
    <div className="sticky-top w-100  p-2 shadow-sm bg-cinza d-flex justify-content-between align-items-center ">
        <div>
            <img className="w-25 " src="src/assets/Logo2.png" alt="texto" />
        </div>
        
        <a className="w-25 btn btn-clinica" href="https://wa.me/5511978488334?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" >
            Agendar
        </a>
    </div>

    
  )
}


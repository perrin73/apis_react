import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import MiApi from './components/MiApi/MiApi'

function App() {


  return (
    <div>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center py-3 mb-5 mt-2  bg-light rounded text-dark bg-opacity-50">
          <div className="col-10 col-sm-8 col-lg-6 p-5">
            <img src="copa.jpg" className="d-block img-fluid rounded" style={{ maxWidth: "80%" }} alt="copa" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center"> Desafío 4 </h1>
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center"> Consumo de API</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center">🍹Cocktails🍸</h1>
            <h5 className="m-4 text-center rounded p-2 ">Una semana difícil con muchas tareas tanto del trabajo como de los estudios en Desafío Latam. Sin duda complicada pero aquí estamos ,hemos cumplido y merecemos nuestra recompensa como buen día Viernes les dejo variados tragos, con y sin alcohol espero les guste. </h5>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <a type="button" href="#cocteles" className="btn btn-primary rounded-5 btn-lg px-4 me-md-2">Vamos a la barra!</a>

            </div>
          </div>
        </div>

        <MiApi />
      </div>
      <div className='text-center text-light'>&copy; Copyright CGARATEA 2022  Todos los derechos reservados</div>
    </div>
  );

}

export default App;

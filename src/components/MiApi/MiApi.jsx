import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Lista from "../Lista/Lista";
import Receta from "../Receta/Receta";
import { useState, useEffect } from 'react'


function MiApi() {
  const [ambito, setAmbito] = useState('a')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?'
  const urlOps = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
  const urlRec = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  const [opciones, setOpciones] = useState([])
  const [opcion, setOpcion] = useState('Alcoholic')
  const [busqueda, setBusqueda] = useState()
  const [idreceta, setIdReceta] = useState()
  const [cocktails, setCocktails] = useState([]);
  const [receta, setReceta] = useState([])
  const [orden, setOrden] = useState()


  useEffect(() => {
    consultarOpciones();
  }, [ambito]);
   const consultarOpciones = async () => {
    const apiUrl = url + ambito + '=list'
    const response = await fetch(apiUrl)
    const data = await response.json()
    setOpciones(data.drinks)
    setOpcion(Object.values(data.drinks[0]).toString())
    //console.log()
  }


  useEffect(() => {
    consultarTragos();
  }, [opcion]);
  const consultarTragos = async () => {
    const apiUrlOp = urlOps + ambito + '=' + opcion
    const responseOp = await fetch(apiUrlOp)
    const dataOp = await responseOp.json()

    //console.log(dataOp.drinks)
    setCocktails(dataOp.drinks)
  }

  useEffect(() => {
    if (idreceta) { consultarReceta() }
  }, [idreceta]);
  const consultarReceta = async () => {
    const apiRec = urlRec + idreceta
    const responseRec = await fetch(apiRec)
    const dataRec = await responseRec.json()
    //console.log(dataOp.drinks)
    setReceta(dataRec.drinks[0])
  }

  useEffect(() => {
    cocktails.reverse()
  }, [orden]);




  return (<div>
    <div id="lareceta">
      <Receta drink={receta} />
    </div>
    <div id="cocteles" className=" bg-white rounded-top  mt-5" >
      <div className="fade show active " id="nav-home" role="" aria-labelledby="" tabIndex="0">
        <div className='row p-5'>
          <div className="col-sm">
            <label htmlFor="ambito" className="form-label">Buscar segun :</label>
            <select className="form-select" id="ambito" onChange={(e) => setAmbito(e.target.value)}>
              <option value="a">Si contiene alcohol</option>
              <option value="i">Si contiene ingrediente</option>
              <option value="c">Sus categorías</option>
              <option value="g">Sus recipientes</option>
            </select>
          </div>
          <div className="col-sm">
            <label htmlFor="opcion" className="form-label">Opciones :</label>
            <select className="form-select" id="opcion" onChange={(e) => setOpcion(e.target.value)}>
              {opciones.map((e, i) => <option key={i} value={Object.values(e)} >{Object.values(e)}</option>)}

            </select>
          </div>
          <div className="col-sm">
            <label htmlFor="busqueda" className="form-label">Filtrar nombre :</label>
            <input id="busqueda" type="text" className="form-control" onChange={(e) => setBusqueda(e.target.value)} placeholder="Escriba aquí nombre a buscar..." />
          </div>
        </div>
      </div>

    </div>
    <div className='row m-0 px-3  bg-white'>
      <table className="table text-center bg-white align-middle bg-opacity-50">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre <div role="button" onClick={(e) => orden == 'no' ? setOrden('si') : setOrden('no')} className="badge bg-primary ms-4"><i className="bi bi-arrow-down-up "></i></div></th>
            <th scope="col">Detalles</th>
            <th scope="col">Receta</th>
          </tr>
        </thead>
        <tbody>
          <Lista setIdReceta={setIdReceta} arr={busqueda ? cocktails.filter(cock => cock.strDrink.toLowerCase().includes(busqueda)) : cocktails} />
        </tbody>
      </table>
    </div>
  </div>)
};

export default MiApi;
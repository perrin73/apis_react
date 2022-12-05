import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Lista from "../Lista/Lista";
import Receta from "../Receta/Receta";
import { useState, useEffect } from 'react'


function MiApi() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?'
  const urlOps = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?'
  const urlRec = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  const [ambito, setAmbito] = useState('a')
  const [opciones, setOpciones] = useState([])//array con opciones cargadas
  const [opcion, setOpcion] = useState('Alcoholic')//opcion seleccionada en el select
  const [busqueda, setBusqueda] = useState()//termino de busqueda del input busqueda
  const [idreceta, setIdReceta] = useState()// id del cocktail seleccionado al presionar id receta
  const [cocktails, setCocktails] = useState([]);//array de los cocktails listados de acuerdo a seleccion
  const [receta, setReceta] = useState([])//array con los datos de una receta
  const [orden, setOrden] = useState()//variable para activar orden de la lista de cocktails


  useEffect(() => {  //gatilla la carga de select opciones  linea 84
    consultarOpciones();
  }, [ambito]); 
   const consultarOpciones = async () => { //trae opciones para el combo de opciones
    const apiUrl = url + ambito + '=list'
    const response = await fetch(apiUrl)
    const data = await response.json()
    setOpciones(data.drinks)
    setOpcion(Object.values(data.drinks[0]).toString())
    //console.log()
  }


  useEffect(() => { // gatilla carga de datos en listado de acuerdo a opciones seleccionadas
    consultarTragos();
  }, [opcion]);
  const consultarTragos = async () => { //trae datos de la API de acuerdo a opciones 
    const apiUrlOp = urlOps + ambito + '=' + opcion
    const responseOp = await fetch(apiUrlOp)
    const dataOp = await responseOp.json()
    setCocktails(dataOp.drinks)
  }

  useEffect(() => {// gatilla la carga de datos en la receta al hacer click en botones del componente lista linea 106
    if (idreceta) { consultarReceta() }
  }, [idreceta]);
  const consultarReceta = async () => { // trae datos a la receta usando el id del listado
    const apiRec = urlRec + idreceta
    const responseRec = await fetch(apiRec)
    const dataRec = await responseRec.json()
    //console.log(dataOp.drinks)
    setReceta(dataRec.drinks[0])
  }

  useEffect(() => { // gatilla reversion del arreglo al presionar boton de orden nombre de listado
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
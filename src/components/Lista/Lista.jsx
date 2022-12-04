

const Lista = ({arr,setIdReceta}) => {
  const coctails = arr.map((coctail) => (
    <tr key={coctail.idDrink} className="fs-6">
      <th scope="row">{coctail.idDrink}</th>
      <td>{coctail.strDrink}</td>
      <td>
        <div className="col align-self-center" >
          <img src={coctail.strDrinkThumb+'/preview'}  style={{width:"100px"}} className="img-fluid rounded" alt="..." />
        </div>
      </td>
      <td>
      <a href="#lareceta"type="button" id={coctail.idDrink} value={coctail.idDrink} onClick={(e) => setIdReceta(e.target.getAttribute('value'))} className="btn btn-primary rounded-5 btn-md px-4 me-md-2">Ver receta</a>
         
      </td>
    </tr>
  ));
  return coctails;
};
export default Lista;

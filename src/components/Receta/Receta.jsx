import {useEffect,useState} from 'react'






const Receta = ({drink}) => {
  
    //console.log(drink)
    if(drink.length !== 0){
     return( <div key={ drink.idDrink } className="fs-6 card mb-3 p-4 " >
      <div className="row g-0 bg-opacity-75">
      <div className="col-md-4 p-3">
      <img src={ drink.strDrinkThumb} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
      
      <div className="card-body px-5">
      <h2 className="card-title text-center">{drink.strDrink}</h2>
        <h5 className="card-title">Instrucciones :</h5>
        <p className="card-text">{drink.strInstructions}</p>
        <h5 className="card-title">Ingredientes :</h5>
        <p className="card-text m-0">{drink.strIngredient1? drink.strIngredient1+' - ':null}{drink.strMeasure1?drink.strMeasure1:null}</p>
        <p className="card-text m-0">{drink.strIngredient2? drink.strIngredient2+' - ':null}{drink.strMeasure2?drink.strMeasure2:null}</p>
        <p className="card-text m-0">{drink.strIngredient3? drink.strIngredient3+' - ':null}{drink.strMeasure3?drink.strMeasure3:null}</p>
        <p className="card-text m-0">{drink.strIngredient4? drink.strIngredient4+' - ':null}{drink.strMeasure4?drink.strMeasure4:null}</p>
        <p className="card-text m-0">{drink.strIngredient5? drink.strIngredient5+' - ':null}{drink.strMeasure5?drink.strMeasure5:null}</p>
        <p className="card-text "><small className="text-muted">sirva en vaso {drink.strGlass}</small></p>
        <p className="card-text "><small className="text-muted">¿lleva alcohol? : {drink.strAlcoholic}</small></p>
      </div>
      </div>
      </div>
      </div> )}
      else{
        return ''
      }
      
      



      
    
  };
   
    
  
  

export default Receta;

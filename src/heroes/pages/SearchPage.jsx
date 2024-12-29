import { HeroCard } from "../components/HeroCard"
import { useForm } from "../../../hooks/useForm"
import queryString from "query-string"
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q = ""} = queryString.parse( location.search )

  const heroess = getHeroesByName(q)
    
  const { searchText, onInputChange } = useForm({ 
    searchText: q 
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if(searchText.trim().length <= 1) return;
    
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        
        <div className="col-5">
          <h3>Searching</h3>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            
            <input type="text" placeholder="Search hero" name="searchText" className="form-control" autoComplete="off"
            value={ searchText }  
            onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-1" >
              search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q == '')
            ? <div className="alert alert-primary animate__animated animate__fadeIn">Search Hero</div>
            : (heroess.length === 0 ) 
            && <div className="alert alert-danger animate__animated animate__fadeIn"> No hero with <b>{ q }</b> </div>
            
          }


        </div>

        {
          heroess.map( hero => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
    </>
  )
}
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bands: null,
        albums: null, 
        genre: null,
    }
  }

  componentDidMount() {
    this.getDataFromApi("bands");
    this.getDataFromApi("albums");
    this.getDataFromApi("genre");
   // window.setTimeout(() => { this.setState({ loaded: true}) }, 5000);
    
  }

  getDataFromApi(path) {
      fetch(`${localStorage.getItem('APIURL')}/${path}`)
        .then( res => {
            return res.json();
        })
            .then( data => {
                this.setState({ [path]: data });
                
            })
  }

  render() {
    const { bands, albums, genre } = this.state;
    let loaded = bands && albums && genre;
    if (!loaded) {
        return <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                className="loader"
              />
    } else {

    return <article className="container">
        <p className="example-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
        </p>
        <div className="espaciado">
            <div className="results">
                {bands && 
                    <ul>
                        {bands.map((band, index) => 
                            <li key={index}> {band.id} , {band.name} , {band.genreCode}, {band.year}, {band.country}, </li>
                        )}
                    </ul>
                }
            </div>
        </div>
        <div className="espaciado">
            <div className="results">
                {albums && 
                    <ul>
                        {albums.map((album, index) => 
                            <li key={index}> {album.id} , {album.bandId}, {album.name} , {album.year}</li>
                        )}
                    </ul>
                }
            </div>
        </div>
        <div className="espaciado">
            <div className="results">
                {genre && 
                    <ul>
                        {genre.map((gen, index) => 
                            <li key={index}> {gen.code} , {gen.name}</li>
                        )}
                    </ul>
                }
            </div>
        </div>
    </article>;
    }
  }
}

export default HomePage;

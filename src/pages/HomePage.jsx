import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Filter from "../components/filter/Filter";
import Album from "../components/album/Album";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bands: null,
        albums: null, 
        genre: null,
        genreSelected: null,
        bandSelected: null,
    }
    this.handleGenreSelected = this.handleGenreSelected.bind(this);
    this.handleBandSelected = this.handleBandSelected.bind(this);
  }

  componentDidMount() {
      const { bands, albums, genre } = this.state; //this will be uploaded by reducer / sagas / api, when the user was authenticated
      if (!genre)
        this.getDataFromApi("genre");
      if (!bands)
        this.getDataFromApi("bands");
      if (!albums)
        this.getDataFromApi("albums");
    
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

  handleGenreSelected(genre) {
    const { genreSelected } = this.state;
    if (!genreSelected || !genre || genre.code !== genreSelected.code){
        this.setState({ genreSelected: genre, bandSelected: null });
    }
  }

  handleBandSelected(band) {
    this.setState({ bandSelected: band })
  }

  render() {
    const { bands, albums, genre, genreSelected, bandSelected } = this.state;
    let loaded = bands && albums && genre;
    let genreBands = bands;
    let bandAlbums = null;
    if (genreSelected && bands) {
        genreBands = bands.filter(band => band.genreCode === genreSelected.code);
    }
    if (bandSelected && albums) {
        bandAlbums = albums.filter(album => album.bandId === bandSelected.id);
    }
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
        <h1 className="example-text">
            Here you can find albums and bands that we have, sorted and filtered
        </h1>
        
        {genre && 
            <div className="espaciado">
                <Filter list={genre} handleClick={this.handleGenreSelected} selected={genreSelected} />
            </div>
            /*{gen.code} , {gen.name}*/
        }
        <div className="espaciado">
            <div className="results">
                {bands && 
                    <div>
                        <h2>Bands</h2>
                        <ul>
                            {genreBands.map((band, index) => 
                                <li key={index} onClick={() => this.handleBandSelected(band)}> {band.id} , {band.name} , {band.year}, {band.country}, </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        </div>
        {bandSelected && 
            <div className="columns">
                <div className="espaciado">
                    <h2>{bandSelected.name} members</h2>
                    <ul>
                        {bandSelected.members.map((member, index) => 
                            <li key={index}> {member.name} </li>
                        )}
                    </ul>
                </div>
                {bandAlbums &&
                    <div className="espaciado">
                        <h2>Albums created by {bandSelected.name}</h2>
                        <ul>
                            {bandAlbums.map((album, index) => 
                                <li key={index}> <Album album={album}></Album> </li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        }
        <div className="espaciado">
            <div className="results">
                {albums && 
                    <ul>
                        <h2>Albums</h2>
                        {albums.map((album, index) => 
                            <li key={index}>
                                <Album album={album}></Album>
                            </li>
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

import React, { Component } from "react";
import Button from "../components/button/Button";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bands: null
    }
  }

  componentDidMount() {
    this.getBands()
  }

  getBands() {
      const { bands } = this.state;
      fetch(`${localStorage.getItem('APIURL')}/bands`)
        .then( res => {
            return res.json();
        })
            .then( data => {
                this.setState({ bands: data })
            })
  }

  render() {
    const { bands } = this.state;
    return <article className="container">
        <p className="example-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
        </p>
        <div className="espaciado">
        {bands && 
            <ul>
                {bands.map((band, index) => 
                    <li key={index}> {band.name} - {band.genreCode}</li>
                )}
            </ul>
        }
        </div>
    </article>;
  }
}

export default HomePage;

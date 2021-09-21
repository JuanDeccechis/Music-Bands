import React, { Component } from "react";

class Album extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
  }

  render(){
      const { album } = this.props;
      if (album)
        return <span> {album.name} , {album.year}</span>
  }
}

export default Album;

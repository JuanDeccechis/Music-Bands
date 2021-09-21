import React, { Component } from "react";
import './row.css'

class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, selected } = this.props;
    return (
        <tr onClick={this.props.onClick} className={`${selected && 'selected'}`}>
            <td>{content.name}</td>
            <td>{content.country}</td>
            <td>{content.year}</td>
        </tr>
    );
  }
}

export default Row;
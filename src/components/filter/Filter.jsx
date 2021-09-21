import React, { Component } from 'react'
import './filter.css'


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { list, selected } = this.props;
        return (
            <div className="tabs">
                <ul>
                    <li className="tab-li-item" onClick={() => this.props.handleClick(null)}> 
                        <div className={`tab-item ${!selected ? 'selected' : ''}`}>
                            All genres</div>
                    </li>
                    { list && list.map((item, index) => 
                        <li key={index} className="tab-li-item" onClick={() => this.props.handleClick(item)}> 
                            <div className={`tab-item ${selected && (item.code === selected.code) ? 'selected' : ''}`}>
                            {item.name}</div>
                        </li>
                    )}                        
                </ul>
            </div>
        )
    }
}

export default Filter;
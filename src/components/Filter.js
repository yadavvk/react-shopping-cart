import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option Value="">ALL</option>
                        <option Value="XS">XS</option>
                        <option Value="S">S</option>
                        <option Value="M">M</option>
                        <option Value="L">L</option>
                        <option Value="XL">XL</option>
                        <option Value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sortProducts, filterProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ? (
                <div>Loading...</div>
            ) : (
                <div className="filter">
                    <div className="filter-result">
                        {this.props.filteredProducts.length} Products
                    </div>
                    <div className="filter-sort">
                        Order{" "}
                        <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                    <div className="filter-size">
                        Filter{" "}
                        <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
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
        )
    }
}

export default connect((state) => ({
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems
}), { filterProducts, sortProducts })(Filter)

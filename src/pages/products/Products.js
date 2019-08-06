import React from 'react';

import './Products.css';
import ItemList from "../../components/item/list/ItemList";
import componentWithLayout from "../../components/layout/Layout";

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fetchedItems: null };
    }
    render() {
        return (
            <div className="App">
                <ItemList items={this.state.fetchedItems} />
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ fetchedItems: json }));
    }
}

export default componentWithLayout(Products);

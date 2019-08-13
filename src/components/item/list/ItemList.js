import React from 'react';
import ItemCard from '../ItemCard';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    handleOnChange = event => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="search">
                    <form>
                        <input
                            placeholder="Buscar item..."
                            onChange={this.handleOnChange}
                        />
                    </form>
                </div>
                {this.props.items &&
                this.props.items
                    .filter(item =>
                        item.name
                            .toLowerCase()
                            .includes(this.state.searchTerm.toLowerCase())
                    )
                    .map(item => <ItemCard key={item.id} {...item} />)}
            </div>
        );
    }
}

export default ItemList;
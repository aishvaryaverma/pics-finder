import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onInputChange = e => {
        const { value } = e.target;
        this.setState({ term: value })
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term);
        this.setState({ term: '' })
    }

    render() {
        const { term } = this.state;
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Search Images</label>
                    <input
                        className="feild"
                        type="text"
                        value={term}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar

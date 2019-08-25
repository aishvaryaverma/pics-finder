import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
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
        this.inputRef.current.value = '';
    }

    render() {
        const { term } = this.state;
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Search Images</label>
                    <input
                        type="text"
                        className="feild"
                        value={term}
                        ref={this.inputRef}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar
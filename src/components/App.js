import React from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }

    submitHandler = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params : { query: term }
        });
        this.setState({ images: res.data.results })
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <progress id="requestProgress" value="1" max="100" />
                <SearchBar onSearchSubmit={this.submitHandler} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App

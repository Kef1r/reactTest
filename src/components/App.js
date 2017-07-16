import React, {Component} from 'react';
import '../font-awesome.min.css'
import '../App.css';
import ArtistList from "./ArtistList";


class App extends Component {
    render() {
        return (
            <div className="App">
                <ArtistList/>
            </div>
        );
    }
}

export default App;

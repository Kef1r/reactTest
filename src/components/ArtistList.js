import React from 'react';
import Artist from "./Artist";
import ArtistInput from "./ArtistInput"

export default class ArtistList extends React.Component{
    constructor (props) {
        super (props);

        this.state = {
            artist: {},
            isEdit : false,
            artists : [
                {
                    id: 1,
                    name: 'Nirvana',
                    place: 'Kharkiv',
                    performance: '1000000'
                },

                {
                    id: 2,
                    name: 'Deftonse',
                    place: 'Kiev',
                    performance: '300000'
                }
            ]
        }
    }
    addArtist(artist) {
        let oldState = this.state.artists;
        artist.id = this.state.artists[oldState.length - 1].id + 1;
        oldState.push(artist);
        this.setState({artists:oldState});
    }
    remArtist(id) {
        let state = this.state.artists;
        let artist = state.find(artist => artist.id === id);
        let index = state.indexOf(artist);
        state.splice(index, 1);
        this.setState({artists: state});
    }

    artistEdit(id) {
        let state = this.state.artists;
        let tempArtist = state.find(artist => artist.id === id);
        this.setState({artist: tempArtist});
    }

    changeEdit(edit) {
        this.setState({isEdit: edit})
    }
    changeArtist(artist) {
        let oldState = this.state.artists;
        let tempArtist = oldState.find(a => a.id === artist.id);
        let index = oldState.indexOf(tempArtist);
        oldState[index] = artist;
        this.setState({artists: oldState});
    }



    render() {
        let artist = this.state.artists.map(artist =>
            <Artist artist={artist} key={artist.id}
                    removeArtist={this.remArtist.bind(this)}
                    editArtist={this.artistEdit.bind(this)}
                    changeEdit={this.changeEdit.bind(this)}

        />);
        return(
            <div className="container">
            <table className="artistList">
                <thead>
                    <tr>
                        <td>Artists</td>
                        <td>Places</td>
                        <td>Performances</td>
                    </tr>
                </thead>
              <tbody>
              {artist}
              </tbody>
            </table>
            <ArtistInput isEdit={this.state.isEdit}
                         saveArtist={this.addArtist.bind(this)}
                         artist={this.state.artist}
                         changeEdit={this.changeEdit.bind(this)}
                         changeArtist={this.changeArtist.bind(this)}
            />
            </div>
        )
    }

}
import React from 'react';

export default class Artist extends React.Component {

    constructor (props) {
        super (props)
    }

    artistDel(){
        let id = this.props.artist.id;
        this.props.removeArtist(id);
    }

    artistEdit() {
        let id = this.props.artist.id;
        this.props.editArtist(id);
        this.props.changeEdit(true);
    }

    render () {
        return (

            <tr>
                <td>{this.props.artist.name}</td>
                <td>{this.props.artist.place}</td>
                <td>{this.props.artist.performance}</td>
                <td>
                    <button onClick={this.artistDel.bind(this)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
                <td>
                    <button onClick={this.artistEdit.bind(this)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
            </tr>
        );
    }
}
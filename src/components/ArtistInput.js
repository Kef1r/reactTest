import React from 'react'

export default class ArtistInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            place: '',
            performance: ''
        }
    }

    handlChange(event) {
        //this.setState({[key] : event.target.value});
        this.setState({[event.target.id]: event.target.value})
    }

    handleClick(e) {

        if (this.props.isEdit) {
            this.props.changeArtist({
                id: this.props.artist.id,
                name: this.state.name,
                place: this.state.place,
                performance: this.state.performance
            });
        }
        else {
            this.props.saveArtist({
                name: this.state.name,
                place: this.state.place,
                performance: this.state.performance
            });
        }
        this.props.changeEdit(false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isEdit) {
            this.setState({
                name: nextProps.artist.name,
                place: nextProps.artist.place,
                performance: nextProps.artist.performance
            });
        }
    }

    render() {

        return (
            <div className="addDialog">
                <label className="descInput">Artist: <input id="name" type="text" value={this.state.name}
                                      onChange={this.handlChange.bind(this)}/></label>
                <br/>
                <label className="descInput">Place: <input id="place" type="text" value={this.state.place}
                                                 onChange={this.handlChange.bind(this)}/></label>
                <br/>
                <label className="descInput">Performance: <input id="performance" type="text" value={this.state.performance}
                                                             onChange={this.handlChange.bind(this)}/></label>
                <br/>
                <div >
                    <button className="btn" onClick={this.handleClick.bind(this)}>Ok</button>
                    <button className="btn">Cancel</button>
                </div>
            </div>
        )
    }
}
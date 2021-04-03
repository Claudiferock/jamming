import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    let buttonType = this.props.isRemoval ? '-' : '+';
    let clickType = buttonType === '+' ? this.addTrack : this.removeTrack;
    return  <button className="Track-action" onClick={ clickType }>
              { buttonType }
            </button>
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{ this.props.track ? this.props.track.name : 'Track' }</h3>
          <p>{ this.props.track ? this.props.track.artist : 'Artist' } | { this.props.track ? this.props.track.album : 'Album' }</p>
        </div>
        { this.renderAction() }
      </div>
    );
  }
}

export default Track;
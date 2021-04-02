import React from 'react';
import './Track.css';

class Track extends React.Component {
  renderAction() {
    let buttonType = this.props.isRemoval ? '-' : '+';
    return <button className="Track-action">{ buttonType }</button>
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
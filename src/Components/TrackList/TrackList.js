import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    const trackList = this.props.tracks.map(track => {
      return <Track track={ track } key={ track.id } />
    });

    return(
      <div className="TrackList">
        { trackList }
      </div>
    );
  }
}

export default TrackList;
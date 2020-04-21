import React from 'react';
import Header from '../components/Header'
import SongList from '../components/SongList';

class Top20Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         };
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

        fetch(url)
        .then(res => res.json())
        .then(songs => this.setState({songs: songs.feed.entry}))
    }
    render() { 
        return (
            <div>
            <Header title="Top 20 Uk From Itunes"/>
            <SongList songs={this.state.songs}/>
            </div>
          );
    }
}
 
export default Top20Container;
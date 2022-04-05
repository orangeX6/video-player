import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  searchTerms = [
    'kpop',
    'league of legends',
    'girls generation',
    'taeyeon',
    'sejeong',
    'bts',
    'indie folk',
    'kindie',
  ];

  componentDidMount() {
    const random =
      this.searchTerms[Math.floor(Math.random() * this.searchTerms.length)];

    this.onTermSearch(random);
  }

  onTermSearch = async (term) => {
    const response = await youtube.get(`/search`, {
      params: {
        q: term,
      },
    });

    // console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSearch={this.onTermSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div
              className="five wide column"
              style={{ height: '50vh', overflowX: 'hidden' }}
            >
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

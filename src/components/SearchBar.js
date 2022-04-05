import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => this.setState({ term: e.target.value });

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onTermSearch(this.state.term);
    //? TODO: Make sure to call callback parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Search YT"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

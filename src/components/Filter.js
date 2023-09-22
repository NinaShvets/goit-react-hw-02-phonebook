import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <input
        type="text"
        name="filter"
        value={this.props.value}
        onChange={this.props.onFilterChange}
        placeholder="Search contacts"
      />
    );
  }
}

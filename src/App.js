import React from 'react';

export default class FetchApparatus extends React.Component
{
  state = {
    loading: true,
    apparatus: null,
  };


  render(){
    return this.state.loading || !this.state.apparatus ? 
    (
      <div>Loading...</div> 
      ):( 
      <div>
        <div>{this.state.apparatus.name}</div>
        <div>{this.state.apparatus.abbreviation}</div>
      </div>
      )
  }
}

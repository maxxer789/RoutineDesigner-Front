import React from 'react';

export default class FetchApparatus extends React.Component
{
  state = {
    loading: true,
    apparatus: null,
  };

  async componentDidMount(){
    const url = "http://localhost:5000/api/apparatus/all";
    const respone = await fetch(url);
    const data = await respone.json();
    this.setState({apparatus: data[0], loading: false});
    console.log(data);
  }

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

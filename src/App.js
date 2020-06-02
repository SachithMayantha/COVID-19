import React from 'react';
import './App.css';

//to create more functions used a class
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      countries:[],
      stats:[] 
    }
  }
  async componentDidMount(){
     const resp = await fetch('https://api.covid19api.com/countries')
     const countries = await resp.json()
     this.setState({countries})
     this.state.countries.forEach(async country => {
       const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
       const data = await resp.json()

       //if statement use to remove countries that have no data. 
       if(data.length)
       this.setState(prevState => (
         //length-1 use to get latest data of that country
         {stats:prevState.stats.concat(data[data.length - 1])}))
     })
  }
  render(){
    return (
      <div className="App">
        {
          this.state.stats.map(country => <h1>{country.Country}</h1>)
        }
      </div>
    )
  }
}

export default App;

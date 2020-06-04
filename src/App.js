import React from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import SearchBox from './components/SearchBox/SearchBox';

//to create more functions used a class
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      countries:[],
      stats:[],
      searchField: ''
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
         {stats:prevState.stats.concat({...data[data.length - 1],CountryCode:country.ISO2})}) )
     })
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  render(){
    const {stats,searchField} = this.state
    const filteredCountries = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <div className="App"> 
        <SearchBox placeholder="Enter country name..."
        handleChange={this.handleChange}/>
        <CountryList stats = {filteredCountries}/><br></br>
        <footer><b>Owner - sachithfernando599@gmail.com</b></footer>
        <br></br>
      </div>
    )
  }
}

export default App;

import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {itemId: countryAndCapitalsList[0].id}

  onChangeState = e => {
    this.setState({itemId: e.target.value})
  }
  //  on select change the value of country gets assigned to the option
  //  so used country as state to change it if dropdown changes.

  render() {
    const {itemId} = this.state
    const filterCountryAndCapitalList = countryAndCapitalsList.filter(
      eachItem => eachItem.id === itemId,
    )
    const {country} = filterCountryAndCapitalList[0]
    return (
      <div className="main-container">
        <div className="elements-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select className="dropdown" onChange={this.onChangeState}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="text">is capital of which country?</p>
          </div>
          <h1 className="country-heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

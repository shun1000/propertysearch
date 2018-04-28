import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Shun'
    }
  }
  render () {
    return (<section id="filter">
      <div className="inside">
    <h4>Filter</h4>
    <label htmlFor="city">City</label>
    <select name="city" className="filters city" onChange={this.props.change}>
      <option value="All">All Areas</option>
      <option value ="Chula Vista">Chula Vista</option>
      <option value ="San Diego">San Diego</option>
      <option value ="National City">National City</option>
    </select>
    <select name="homeType" className="filters homeType" onChange={this.props.change}>
    <option value="All">SFR</option>
      <option value="SFR">SFR</option>
      <option value="Apartment">Apartment</option>
      <option value="Studio">Studio</option>
      <option value="Townhome">Townhome</option>
      <option value="Ranch">Ranch</option>
      </select>
    <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
      <option value="0">0+ BR</option>
      <option value="1">1+ BR</option>
      <option value="2">2+ BR</option>
      <option value="3">3+ BR</option>
      <option value="4">4+ BR</option>
      <option value="5">5+ BR</option>
      <option value="6">6+ BR</option>
    </select>
    <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min_price" className="min_price" onChange={this.props.change} value={this.props.globalState.min_price} />
      <input type="text" name="max_price" className="max_price" onChange={this.props.change} value={this.props.globalState.max_price} />
    </div>
    <div className="filters floor-space">
      <span className="title">SQ FT</span>
      <input type="text" name="min_floor_space" className="min_floor_space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
      <input type="text" name="max_floor_space" className="max_floor_space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
    </div>
    <div className="filters extras">
      <span className="title">
      Extras
      </span>
      <label htmlFor="extras">
      <span>Elevators</span>
      <input name="extras" value="elevators" type="checkbox" onChange={this.props.change} />
    </label>
    <label htmlFor="extras">
      <span>Swimming Pool</span>
      <input name="extras" value="swimming_pool" type="checkbox" onChange={this.props.change} />
    </label>
      <label htmlFor="extras">
      <span>One Story Building</span>
      <input name="extras" value="one_story_building" type="checkbox" onChange={this.props.change} />
    </label>
    <label htmlFor="extras">
      <span>Gym</span>
      <input name="extras" value="gym" type="checkbox" onChange={this.props.change} />
    </label>

     </div>
     </div>
    </section>)
  }
}

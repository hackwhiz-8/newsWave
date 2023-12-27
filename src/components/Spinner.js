import React, { Component } from 'react'
import icon from './Loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className=''>
        <img src={icon} alt='icon'></img>
      </div>
    )
  }
}

export default Spinner

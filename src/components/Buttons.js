import React, { Component } from 'react'

export class Buttons extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between'>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    )
  }
}

export default Buttons

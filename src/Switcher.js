import React from 'react';

class Switcher extends React.Component {
  state = { flipped: true } 

  flip = () => {
    this.setState({flipped: false})
  }

  flipBack = () => {
    this.setState({flipped: true})
  }

  render () {
    return (
      <div>
        <p>{this.props.name}</p>
        <div>
          {this.state.flipped ?<button onClick={this.flip}>Frontside</button> : 'fronty'}
        </div>
        <div>
          {this.state.flipped ? <button onClick={this.flipBack}>Backside</button> : 'backkk'}
        </div>
      </div>
    )
  }
}

export default Switcher;
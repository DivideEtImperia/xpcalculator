import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xp: '',
      level: ''
    };
  }

  calculateXP(level) {
    level = parseInt(level, 10);
    if (level >= 0) {
      return Math.floor((level / 0.15) * (level / 0.15));
    }
    return '';
  }

  updateState(event) {
    this.setState({
      level: event.target.value,
      xp: this.calculateXP(event.target.value)
    });
  }

  render() {
    return (
      <main>
        <div className="container">
          <form id='xpcalculator'>
            <div className="input-group">
              <input type="text" name="level" pattern="[0-9]*" placeholder="Level" value={this.state.level} onChange={event => this.updateState(event)} />
            </div>
            <div className="input-group">
              <input type="text" name="xp" pattern="[0-9]*" placeholder="Required XP" value={this.state.xp} disabled />
            </div>
            <button type="button">Calculate</button>
          </form>
        </div>
      </main>
    );
  }
}

export default Footer;

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="back-to-home">
          <a href="https://bastionbot.org"><img src="https://bastionbot.org/assets/image/arrow_left.png" alt="" /></a>
        </div>
        <div title="Calculate XP required to level up to a certain level, or vice versa, in Bastion.">Experience Points Calculator</div>
      </header>
    );
  }
}

export default Header;

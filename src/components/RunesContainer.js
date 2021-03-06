import React, { Component } from 'react';

class RunesContainer extends Component {
  render() {
    return (
      <div>
        <div className="tableTitle">Upcoming Bounty Runes</div>
        <div className="runeTable">
          <div className="runeCol">
            <div className="runeTitle"># of Runes</div>
            <div className="runeRow odd">1</div>
            <div className="runeRow">2</div>
            <div className="runeRow odd">3</div>
            <div className="runeRow">4</div>
          </div>
          <div className="runeCol">
            <div className="runeTitle">Per Player</div>
            <div className="runeRow odd">{(this.props.goldGiven + 40) * 1}</div>
            <div className="runeRow">{(this.props.goldGiven + 40) * 2}</div>
            <div className="runeRow odd">{(this.props.goldGiven + 40) * 3}</div>
            <div className="runeRow">{(this.props.goldGiven + 40) * 4}</div>
          </div>
          <div className="runeCol">
            <div className="runeTitle">Per Team</div>
            <div className="runeRow odd">{((this.props.goldGiven + 40) * 1) * 5}</div>
            <div className="runeRow">{((this.props.goldGiven + 40) * 2) * 5}</div>
            <div className="runeRow odd">{((this.props.goldGiven + 40) * 3) * 5}</div>
            <div className="runeRow">{((this.props.goldGiven + 40) * 4) * 5}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RunesContainer;

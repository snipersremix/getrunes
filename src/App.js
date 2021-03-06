import React, { Component } from 'react';
import Timer from './components/Timer.js';
import Title from './components/Title.js';
import ButtonContainer from './components/ButtonContainer.js';
import RunesContainer from './components/RunesContainer.js';
import SoundButtonContainer from './components/SoundButtonContainer.js';
import {Howl, Howler} from 'howler';
import './App.css';

import BountySound from './sounds/Rune_of_Bounty.mp3';

import BulldogAvatar from './images/bulldog.jpg';
import BulldogRoons1 from './sounds/roons_short.mp3';
import BulldogRoons2 from './sounds/love_of_god.mp3';
import BulldogRoons3 from './sounds/get_the_runes_bulldog.mp3';
import BulldogRoons4 from './sounds/roonsX5.mp3';

import GorgcAvatar from './images/gorgc.jpg';
//import GorgcRoons1 from './sounds/gorgc_bounty.mp3';
import GorgcRoons2 from './sounds/gorgc_pesant_work.mp3';

import SingsingAvatar from './images/singsing.png';
import SingsingRoons from './sounds/sing_bounty_runes.mp3';
import SingsingRoons1 from './sounds/yellow_fucking_runes.mp3';

import MasonAvatar from './images/mason.jpeg';
import MasonRoons from './sounds/mason.mp3';

import PurgeAvatar from './images/purge.jpeg';
import PurgeRoons from './sounds/purge1.mp3';
import PurgeRoons1 from './sounds/purge4.mp3';
// import PurgeRoons2 from './sounds/purge5.mp3';

import PudgeAvatar from './images/pudge_avatar.png';
import PudgeRoons from './sounds/Pud_arc_bounty_01.mp3';

import KunkkaAvatar from './images/Avatar_kunkka.png';
import KunkkaRoons from './sounds/Kunk_bounty_02.mp3';

let helperFunc = function(howl,text="",imageURL) {
  return [howl,text,imageURL];
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      started: false,
      interval: null,
      seconds: '-45',
      minutes: '00',
      alertRunes: false,
      goldGiven: 0,
      sounds: [],
      volume: 0.5,
      mute: false,
      avatar: "",
      textbubble: "",
      prevIndex: null,
      bountyS: null,
    }
  }

  componentDidMount() {

    let BulldogRoon1 = new Howl({
      src: [BulldogRoons1]
    });
    let BulldogRoon2 = new Howl({
      src: [BulldogRoons2]
    });
    let BulldogRoon3 = new Howl({
      src: [BulldogRoons3]
    });
    let BulldogRoon4 = new Howl({
      src: [BulldogRoons4]
    });
    let MasonRoon = new Howl({
      src: [MasonRoons]
    });
    let PudgeRoon1 = new Howl({
      src: [PudgeRoons]
    });
    let PurgeRoon = new Howl({
      src: [PurgeRoons]
    });
    let PurgeRoon1 = new Howl({
      src: [PurgeRoons1]
    });
    // let PurgeRoon2 = new Howl({
    //   src: [PurgeRoons2]
    // });
    let KunkkaRoon1 = new Howl({
      src: [KunkkaRoons]
    });
    let SingsingRoon1 = new Howl({
      src: [SingsingRoons]
    });
    let SingsingRoon2 = new Howl({
      src: [SingsingRoons1]
    });
    // let GorgcRoon1 = new Howl({
    //   src: [GorgcRoons1]
    // });
    let GorgcRoon2 = new Howl({
      src: [GorgcRoons2]
    });
    let Bounty = new Howl({
      src: [BountySound]
    });
    Howler.volume(0.5);
    let BulldogSounds1 = helperFunc(BulldogRoon1,'ROOONS!',BulldogAvatar);
    let BulldogSounds2 = helperFunc(BulldogRoon2,'Get the runes! For the love of God!',BulldogAvatar);
    let BulldogSounds3 = helperFunc(BulldogRoon3,'Get the Roons!',BulldogAvatar);
    let BulldogSounds4 = helperFunc(BulldogRoon4, 'roons, roons, roons...',BulldogAvatar);
    let PudgeSounds = helperFunc(PudgeRoon1,'Bounty!',PudgeAvatar);
    let PurgeSounds1 = helperFunc(PurgeRoon, 'Bounty Runes', PurgeAvatar);
    let PurgeSounds2 = helperFunc(PurgeRoon1, 'Bounty Runes', PurgeAvatar);
    // let PurgeSounds3 = helperFunc(PurgeRoon2, 'The Ruunes', PurgeAvatar);
    let KunkkaSounds = helperFunc(KunkkaRoon1,'Bounty!',KunkkaAvatar);
    let SingsingSounds = helperFunc(SingsingRoon1,'Bounty Runes!',SingsingAvatar);
    let SingsingSounds1 = helperFunc(SingsingRoon2, 'The Yellow F$%^ing Runes!',SingsingAvatar);
    let MasonSounds = helperFunc(MasonRoon, 'ROooOones', MasonAvatar);
    // let GorgcSounds1 = helperFunc(GorgcRoon1, 'Bounty!', GorgcAvatar);
    let GorgcSounds2 = helperFunc(GorgcRoon2, 'This is peasant work, why do I have to pick up the bounty rune.', GorgcAvatar);

    let newSoundArr = [];
    newSoundArr.push(BulldogSounds1);
    newSoundArr.push(BulldogSounds2);
    newSoundArr.push(BulldogSounds3);
    newSoundArr.push(BulldogSounds4);
    newSoundArr.push(PudgeSounds);
    newSoundArr.push(PurgeSounds1);
    newSoundArr.push(PurgeSounds2);
    // newSoundArr.push(PurgeSounds3);
    newSoundArr.push(KunkkaSounds);
    newSoundArr.push(SingsingSounds);
    newSoundArr.push(SingsingSounds1);
    newSoundArr.push(MasonSounds);
    // newSoundArr.push(GorgcSounds1);
    newSoundArr.push(GorgcSounds2);

    this.setState({
        sounds: newSoundArr,
        bountyS: Bounty,
    })

  }

  tick(){
    if(this.state.started) {
      let currentTime = 0;
      let newMinutes = 0;

      if(parseInt(this.state.minutes) > -1) {
        currentTime = parseInt(this.state.seconds) + parseInt(this.state.minutes) * 60;
      } else {
        currentTime = parseInt(this.state.seconds)
      }

      let updatedTime = currentTime + 1;
      let newSeconds = updatedTime % 60;

      if(newMinutes > -1) {
        newMinutes = Math.floor(updatedTime / 60);

        if (newMinutes === -1) {
          newMinutes = 0;
        }
      }

      if(newMinutes > -1 && newMinutes < 10) {
        newMinutes = '0' + newMinutes.toString();
      }
      if(newSeconds > -1 && newSeconds < 10) {
        newSeconds = '0' + newSeconds.toString();
      }

      this.setState({
        seconds: newSeconds,
        minutes: newMinutes,
      });


      if(updatedTime % 300 === 0){
        this.state.bountyS.play();
        let goldGiven = 2 * (parseInt(this.state.minutes) + 5);
        this.setState({
          goldGiven: goldGiven,
          alertRunes: false,
        });
      }

      if((updatedTime + 30) % 300 === 0 || (updatedTime + 10) % 300 === 0){
        let randomIndex = Math.floor(Math.random()*(this.state.sounds.length));
        while(randomIndex === this.state.prevIndex) {
          randomIndex = Math.floor(Math.random()*(this.state.sounds.length));
        }
        let pickedHowl = this.state.sounds[randomIndex][0];
        let pickedText = this.state.sounds[randomIndex][1];
        let pickedImage = this.state.sounds[randomIndex][2];
        this.setState({
          alertRunes: true,
          avatar: pickedImage,
          textbubble: pickedText,
          prevIndex: randomIndex,
        });
        pickedHowl.play();
      }
    }
  }

  startButtonHandle(){
    if(this.state.minutes < 0) {
      window.alert("minutes cannot be negative")
      this.setState({
        minutes: "00",
        seconds: "-45",
        started: false,
        goldGiven: 0,
      });
    }
    else {
      if(this.state.interval == null){
        let interval = setInterval(() => this.tick(), 1000);
        this.setState({
          started: true,
          interval: interval,
        });
      }
      else {
        this.setState({
          started: true,
        });
      }
    }
  }

  stopButtonHandle(){
    clearInterval(this.state.interval);
    this.setState({
      interval: null,
      seconds: '-45',
      minutes: '00',
      alertRunes: false,
      goldGiven: 0,
      started: false,
    });
  }

  pauseButtonHandle(){
    this.setState({
      started: false,
    });
  }

  handlePlus() {
    let updatedVol = this.state.volume + 0.1;
    if(updatedVol > 1) {
      updatedVol = 1;
    }
    this.setState({
      volume: updatedVol,
    });
    Howler.volume(updatedVol)
  }

  handleMinus() {
    let updatedVol = this.state.volume - 0.1;
    if(updatedVol < 0) {
      updatedVol = 0;
    }
    Howler.volume(updatedVol)
    this.setState({
      volume: updatedVol,
    });
  }

  handleMute() {
    if(this.state.mute) {
      Howler.mute(false);
      this.setState({
        mute: false,
      });
    } else {
      Howler.mute(true);
      this.setState({
        mute: true,
      });
    }
  }

  handleInputMins(event) {
    if(isNaN(event.target.value)) {
      this.setState({
        minutes: "00",
      });
    }
    if(event.target.value !== undefined){
      let mins = parseInt(event.target.value)
      this.setState({
        minutes: mins,
      });
      let goldGiven = 2 * ((Math.floor(mins/5)) * 5 + 5);
      this.setState({
        goldGiven: goldGiven,
      });
    }
  }

  handleInputSecs(event) {
    if(isNaN(event.target.value)) {
      this.setState({
        seconds: "00",
      });
    }
    if(event.target.value !== undefined){
      let secs = parseInt(event.target.value)
      this.setState({
        seconds: secs,
      });
    }
  }

  handleOnFocusMins(event) {
    event.preventDefault();
    this.setState({
      minutes: "",
    });
  }

  handleOffFocusMins(event) {
    if(this.state.minutes === ""){
      this.setState({
        minutes: "00",
      });
    }
  }

  handleOnFocusSecs(event) {
    event.preventDefault();
    this.setState({
      seconds: "",
    });
  }

  handleOffFocusSecs(event) {
    if(this.state.seconds === ""){
      this.setState({
        seconds: "00",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <Title
            alert={this.state.alertRunes}
            avatar={this.state.avatar} textbubble={this.state.textbubble}></Title>
          <div className="description">Match the timer to your in-game time to be reminded of bounty runes spawn times and gold received.</div>
          <Timer
                  handleOffFocusSecs={(e) => this.handleOffFocusSecs(e)}
                  handleOffFocusMins={(e) => this.handleOffFocusMins(e)}
                  handleOnFocusMins={(e) => this.handleOnFocusMins(e)}
                  handleOnFocusSecs={(e) => this.handleOnFocusSecs(e)}
                  started={this.state.started}
                  alert={this.state.alertRunes}
                  minutes={this.state.minutes}
                  seconds={this.state.seconds}
                  handleSecs={(e) => this.handleInputSecs(e)}
                  handleMins={(e) => this.handleInputMins(e)}></Timer>

          <ButtonContainer started={this.state.started}
                           vol={this.state.volume}
                           mute={this.state.mute}
                           handleClickStart={() => this.startButtonHandle()}
                           handleClickStop={() =>this.stopButtonHandle()}
                           handleClickPause={() =>this.pauseButtonHandle()}>
                           </ButtonContainer>

          <SoundButtonContainer
          handlePlus={() => this.handlePlus()}
          handleMinus={()=> this.handleMinus()}
          handleMute={() => this.handleMute()}
          vol={this.state.volume}
          mute={this.state.mute}></SoundButtonContainer>

          <RunesContainer goldGiven={this.state.goldGiven}></RunesContainer>
          <footer>
            Made by TK and Rob
          </footer>
          <div>
           email sound clips to getrunes@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default App;

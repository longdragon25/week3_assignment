import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import constants from 'expo-constants';
import GameStatus from './components/GameStatus';
import ButtonGroup from './components/ButtonGroup';
import PlayerCard from './components/PlayerCard';
import {CHOICES} from './constants';
const randomComputerChoice = () =>CHOICES[Math.floor(Math.random() * CHOICES.length)];
const getRoundOutcome = (userChoice,computerChoice) => {
  let resultText;
  
  if (userChoice === 'rock') {
    resultText = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    resultText = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    resultText = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) resultText = 'Tie game!';
  return resultText;
};
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      playerChoice: {},
      computerChoice: {},
      result:"",
      game:0,
      gameWin:0,
      gameLose:0,
      gameTie:0,
    }
    this.onPressButton = this.onPressButton.bind(this);
  }
  
  onPressButton = playerChoice =>{
    const foundChoice= CHOICES.find(choice=>choice.name===playerChoice);
    const computerChoice=randomComputerChoice();
    const result = getRoundOutcome(foundChoice.name,computerChoice.name);
    if(result==='Victory!'){
      this.setState({gameWin:this.state.gameWin+1})
    }
    if(result==='Defeat!'){
      this.setState({gameLose:this.state.gameLose+1})
    }
    if(result==='Tie game!'){
      this.setState({gameTie:this.state.gameTie+1})
    }

    this.setState({
      playerChoice:foundChoice,
      computerChoice: computerChoice,
      result,
      game:this.state.game+1,
    })
  }
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.gameStatusWrapper}>
        <GameStatus result={this.state.result}/>
        <View style={styles.infoWrapper}>
            <Text style={styles.score}>Game:{this.state.game}</Text>
            <Text style={styles.scoreWin}>Win:{this.state.gameWin}</Text>
            <Text style={styles.scoreLose}>Lose:{this.state.gameLose}</Text>
            <Text style={styles.scoreTie}>Tie:{this.state.gameTie}</Text>
        </View>
        <View style={styles.rate}>
            <Text style={styles.scoreWin}>WinRate:{Math.round((this.state.gameWin/this.state.game)*100)}%</Text>
            <Text style={styles.scoreLose}>LoseRate:{Math.round((this.state.gameLose/this.state.game)*100)}%</Text>
            <Text style={styles.scoreTie}>TieRate:{Math.round((this.state.gameTie/this.state.game)*100)}%</Text>
        </View>
        
      </View>
      <View style={styles.gamePlayWrapper}>
        <PlayerCard playerName="Player" choice={this.state.playerChoice} />
        <PlayerCard playerName="Computer" choice={this.state.computerChoice} />
      </View>
      <View style={styles.buttonGroupWrapper}>
        <ButtonGroup onPressButton={this.onPressButton}/>
      </View>
    </View>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:constants.statusBarHeight,
  },
  gameStatusWrapper:{
    flex:0.2,
    alignItems:"center",
  },
  infoWrapper:{
    flexDirection:"row",
    width:400,
    justifyContent:"space-around"
  },
  rate:{
    marginTop:5,
    flexDirection:"row",
    width:450,
    justifyContent:"space-around"
  },
  score:{
    fontSize:20,
    fontWeight:"bold"
  },
  scoreWin:{
    fontSize:20,
    fontWeight:"bold",
    color:"green"
  },
  scoreLose:{
    fontSize:20,
    fontWeight:"bold",
    color:"red"
  },
  scoreTie:{
    fontSize:20,
    fontWeight:"bold",
    color:"lightblue"
  },
  gamePlayWrapper:{
    flex:0.45,
    flexDirection:"row",
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  buttonGroupWrapper:{
    flex:0.35,
    alignItems:"center",
    justifyContent:"center"
  },


});

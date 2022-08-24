import React from 'react';

import data from '../data';
import './styles.scss';

import Pokemon from './components/Pokemon';

class App extends React.Component {
  //Browser wraps this inside of a constructor
  //Don't have to type out the constructor for this reason
    state = {
      pokemon: [],
      highlightedPokemon: {}
    };

    //set up componentDidMount(), set 'data' to the pokemon state
    componentDidMount(){
      //Mimic API call taking 2 seconds to run
      setTimeout(() => {
        this.setState({pokemon: data})
      }, 2000)
    }

  //Runs only after state + props have changed AND after re-rendering the component
    componentDidUpdate(prevProps, prevState){
      //only run if this.state.pokemon has been changed/updated:
      if(this.state.pokemon !== prevState.pokemon)
      //!== -> tells us that the pokemon state had changed  
      {
      console.log('Component has Re-rendered: Pokemon state has been updated')
      }

      //console.log() only if highlightedPokemon changes:
      if(this.state.highlightedPokemon !== prevState.highlightedPokemon){
        console.log('Component had Re-rendered: Highlighted Pokemon has been updated')
      }    
      //The above console.log() should never render b/c of the way the code is currently
      //there is nothing to change highlightedPokemon
    }
  

  render() {
    console.log('App is rendering')

    //Can do this if statement before (below) or within the return statement:
    // if(this.state.pokemon.length === 0){
    //   return(<h3>Loading Pokemon Deck...</h3>)
    // }

    return (
      <div className="App">
        {this.state.pokemon.length === 0 ? <h3>Loading Pokemon Deck...</h3> : <Pokemon pokemon={this.state.pokemon} />}
      </div>
    );
  }
}

export default App;

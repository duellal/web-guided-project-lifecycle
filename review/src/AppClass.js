import React from "react";

class AppClass extends React.Component {
  //Purpose of Constructor:
  //Set up initial state (so renders don't break)
  //Set up bindings if needed - w/ arrow functions binding is not needed
  constructor() {
    super();
    this.state = {
      name: "Warren"
    };
    console.log('AppClass: Component Constructed - 1st')
  }

  handleNameButtonClick = (e) => {
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  //Lifecycle Methods (componentDidMount, componentDidUpdate, etc): 
  // a way to run code at a very specific point in time in the lifecycle of a component

  //Purpose of componentDidMount (CDM):
  //Fetch initial data from API
  //set up event listeners
  //set up timers/intervals
  componentDidMount() {
    console.log('AppClass: Component Mounted - 3rd')
  }

//Purpose of componentDidUpdate:
// Fetch new data based on props or state
// Update REFs
// Update state based on new data
  componentDidUpdate(prevProps, prevState){
    console.log('AppClass: Component Updated - 5th')
    console.log('Props------- 6th')
    console.log(prevProps, this.props, '7th')
    console.log('State------- 8th')
    console.log(prevState, this.state, '9th')

    if(this.state.name !== prevState.name){

    }
  }
  
  //Purpose of Render Function:
  //To render things!
  render() {
    console.log('AppClass: Component Rendered - 2nd/4th')
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IT ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

import React from 'react';
import axios from 'axios';

//Set up a class component that has state for doggos
//Fetch data from "https://dog.ceo/api/breed/husky/images"
//Set that data to state when it returns 
// Render the data in the render function

 const doggies = 'https://dog.ceo/api/breed/husky/images'

class App extends React.Component{
   state = {
      doggos: [],
      doggoText: ''
   }

   //My Code:
   // componentDidMount(){
   //    fetch(doggies)
   //    .then(res => res.json())
   //    .then(dogs => this.setState({doggos: dogs.message}))
   //    .catch(err => console.log(err))
   // }

   //Class Code:
   componentDidMount(){
      axios
         .get(doggies)
         .then(res => {
            this.setState({
               doggos: res.data.message
            })
         })
         .catch(err => console.log(err))
   }

   handleChanges = (e) => {
      this.setState({
         doggoText: e.target.value
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()

      axios
         .get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
         .then(res => {
            this.setState({
               doggos: res.data.message
            })
         })
         .catch(err => console.log(err))
   }


   render(){
      console.log('Rendering')

      return(
         <div className='App'>
            <h1> Hello Doggos </h1>
            <form onSubmit={this.handleSubmit}> 
               <input
               value={this.state.doggoText}
               onChange={this.handleChanges}
               />
            </form>
            <div className='doggos'>
               {this.state.doggos.map(doggo => (
                  <img width='200' src={doggo} key={doggo} alt={doggo}/>
               ))}
               </div>
            </div>
      )
   }
}

export default App
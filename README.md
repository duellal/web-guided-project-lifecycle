# React Lifecycles Notes:


## Mounting Phase:
Purpose of Constructor:
- Set up initial state (so renders don't break)
- Set up bindings if needed - w/ arrow functions binding is not needed

Purpose of componentDidMount (CDM):
- Fetch initial data from API
- Set up event listeners
- Set up timers/intervals

Purpose of Render Function:
- To render things!

Order:
- Constructor
- Render
- CDM


## Updating Phase - Rerendering:
Rerendering happens when props or state is updated
- when this happens, the component will hit a new lifecycle (componentDidUpdate - CDU)

forceUpdate():
- try to avoid ALL uses of forceUpdate() + only use this.state and/or this.props in render()
- this tells react to re-render

Purpose of componentDidUpdate:
- Fetch new data based on props or state
- Update REFs
- Update state based on new data


## Unmounting Phase:
componentWillUnmount - death of the component
- will happen only once

Purpose of componentWillUnmount (CWU):
- cleanup of dangerous things that happened in CDM
   - remove all manual event listeners
   - remove/stop any timers/intervals
   - warn users they are about to leave the form/page - making sure they want to leave (ex: before saving changes)


# Q+A:
What's the difference between being mounted and being rendered?
- Mounting is a phase that includes many lifecycle methods - many points in time where we can run code 
- Rendering is a single lifecycle method - one point in time where we can run some code

Is CDM and useEffect the same thing? One for a class and one for a functional component?
- They're close, but not exactly - there is an important distinction to keep in mind

Will update below:
CDM() - 

useEffect() - 

What are the cases where calling super() is required vs. simply using state={}?
- If you remove constructor(), you can have a class property called state={}
   - b/c the browser wraps the state={} inside of a constructor

If CDU() is a method that you could use to stop a component from calling render, when would that be an appropriate time to use?
- 

When would you use prevProps? Can you give an example?
- componentDidUpdate(prevProps, prevState){
   if(this.props.id !== prevProps.id){
      fetch data
   }
}

Can you explain what is happending "under the hood" that allows us to NOT need to spread state in setState() like we needed to do in useState() or reducers?
- both are tracking something through the life of the component

Function Component:
creates the state + a setter function for that state
const [name, setName] = useState('')

Class Component:
creates own class property called state:
state = {
   key1: value,
   key2: value
   }

this.setState.key1
this.setState.key2

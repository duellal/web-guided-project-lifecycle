React Lifecycles Notes:


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

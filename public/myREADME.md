React component phases:
Mounting -> component inserted in the DOM
Updating -> can be updated through states and props hence trigger rendering
Unmounting ->component removed from the DOM

!! in each of these phases React provides lifecycle methods:
render() -> only required lifecycle method!!!
componentDidMount() => called after component is rendered
componentDidUpdate() -> called after updating occurs
componentWillUnmount -> just before Unmounting a component

-------------------------
fetch() -> from native Fetch API, use to perform and handle responses and requests from server
!! Can also use Axios !!

https://jsonplaceholder.typicode.com/todos -> use to mimic a server.... look under resources for all types of jsons they provide
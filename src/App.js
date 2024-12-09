import CounterComponent from './modules/CounterComponent';
import ListComponent from './modules/ListComponent';
import './App.css';
import RenderComponent from './modules/RenderComponent';
import SimpleList from './modules/SimpleList'
import PostRequestComponent  from './serverside/PostRequestComponent'

function App() {

  const rows = [
    {id: 1, name:'row-1'},
    {id: 2, name:'row-2'},
    {id: 3, name:'row-3'},
    {id: 4, name:'row-4'}
  ];

  

  return (
    <div className='App'>
      <header className='App-header'>
      <PostRequestComponent />
      <SimpleList rows={rows} />
      <RenderComponent />
      <div><CounterComponent /></div>
      <div><ListComponent /></div>
      </header>
    </div>
  );
}

export default App;

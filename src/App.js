
import './App.css';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import data from './util/data'



function App() {
  console.log(data)
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div className='container'>
      {data.map((item , index) => {
        const {title,image,description} = item
        return <div className='card'><Card key={index} title={title} image={image} description={description} /> </div>
      })}
      </div>
    </div>
  );
}

export default App;

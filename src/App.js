
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="React App[Atul Singh]" homeTitle="Home" contactTitle="Contact"/>
      <div className="container my-5">
        <TextForm  heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;

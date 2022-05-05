import './App.css';
import Header from '../src/component/Header'
import NavbarPage from '../src/component/Navbar'
import About from './component/About';
import Point from './component/Point';
import ContainerCard from './component/ContainerCard';
import Button from './component/Button';
import CommentList from './component/CommentList';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <NavbarPage/>
      <Header/>
      <About/>
      <Point/>
      <ContainerCard/>
      <Button text="see all product"/>
      <CommentList/>
      <Footer/>
    </div>
  );
}

export default App;

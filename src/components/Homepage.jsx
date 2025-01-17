import bg from '../assets/images/bg.jpg';
import logo from '../assets/images/logoa.png';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../fonts.css';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  return (
    <div 
      className="homepage-container"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className="content-wrapper">
        <Container className="content-container">
          <div>
            <h2 className="brand-name">MICROLOT COFFEE</h2>
            <h1 className="main-heading">Skip the Line, Savor the Time</h1>
            <p className="subheading">Pre-order your favorite brews and treats with ease</p>
            <button
              className="order-button"
              onClick={() => navigate('/menu')}
            >
              ORDER NOW
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
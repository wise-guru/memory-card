import Logo from '../assets/adventureTime.webp';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Adventure Time Logo" />
      <div className="headerText">
        <h1>Memory Time</h1>
        <div className="instructions" style={{ textAlign: 'center' }}>
          <div>
            Click through all of the characters only once to win
            <span className="exclamation">!</span>
          </div>
        </div>
      </div>
      <img className="second logo" src={Logo} alt="Adventure Time Logo" />
    </header>
  );
};

export default Header;

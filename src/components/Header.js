import Logo from '../assets/adventureTime.webp';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Adventure Time Logo" />
      <div className="headerText">
        <h1>Memory Time</h1>
        <div className="instructions">
          Click through all of the cards without clicking on any more than once
          {/* <div className="exclamation">!</div> */}
        </div>
      </div>
      <img className="logo" src={Logo} alt="Adventure Time Logo" />
    </header>
  );
};

export default Header;

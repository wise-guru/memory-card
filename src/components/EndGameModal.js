function EndGameModal(props) {
  const { resetGame, endGameModal } = props;

  document.body.classList.add('modal');
  return (
    <div className="bgModal">
      <div className="modalContent">
        <h1>You {endGameModal}! Try again:</h1>
        <div className="button-container">
          <button type="button" onClick={() => resetGame()}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
}

export default EndGameModal;

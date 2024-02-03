function Card() {
  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__question">What property flips the axes in flexbox?</h2>
        <button type="button" className="card__button card__button--answer">
          show answer
        </button>
      </div>
      <div className="card__body">
        <p className="card__answer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A itaque corporis maiores modi quaerat minus tenetur
        </p>
      </div>
      <div className="card__tags">
        <button type="button" className="card__button">
          #css
        </button>
        <button type="button" className="card__button">
          #html
        </button>
        <button type="button" className="card__button">
          #flexbox
        </button>
        <button type="button" className="card__button card__button--bookmark">
          heart
        </button>
      </div>
    </div>
  );
}
export default Card;

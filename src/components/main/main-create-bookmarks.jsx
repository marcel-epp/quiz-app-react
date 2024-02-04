function MainCreateBookmarks() {
  return (
    <main className="main">
      <form className="form">
        <div className="form--group">
          <label htmlFor="form--question">Your question:</label>
          <textarea rows="4" name="form--question" id="form--question"></textarea>
          <span className="form--charactersleft">150 Characters left</span>
        </div>
        <div className="form--group">
          <label htmlFor="form--answer">Your answer:</label>
          <textarea rows="4" name="form--answer" id="form--answer"></textarea>
          <span className="form--charactersleft">150 Characters left</span>
        </div>
        <div className="form--group">
          <label htmlFor="form--tags">Tag:</label>
          <input type="text" name="form--tags" id="form--tags"></input>
        </div>
        <input className="form--submit" type="submit" value="Submit"></input>
      </form>
    </main>
  );
}
export default MainCreateBookmarks;

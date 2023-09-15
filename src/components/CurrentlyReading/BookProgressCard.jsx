import ProgressBar from "@ramonak/react-progress-bar";

export function BookProgressCard({
  bookTitle,
  bookAuthor,
  bookProgression = 0,
  colorCard,
}) {
  const bookCover = "./src/assets/" + bookTitle + "_cover.jpg";
  const cardStyle = {
    "--card-color": colorCard,
  };

  return (
    <div className="book-progress-card" style={cardStyle}>
      <img className="book-progress-cover" alt="Book cover" src={bookCover} />
      <div className="book-progress-info">
        <a className="book-progress-title">{bookTitle}</a>
        <span className="book-progress-author">{bookAuthor}</span>
        <ProgressBar
          completed={bookProgression}
          maxCompleted={100}
          bgColor={colorCard}
        />
      </div>
    </div>
  );
}

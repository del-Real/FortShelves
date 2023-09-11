import ProgressBar from "@ramonak/react-progress-bar";

export function BookProgressCard({
  bookTitle,
  bookAuthor,
  bookProgression = 0,
}) {
  const bookCover = "./src/assets/" + bookTitle + "_cover.jpg";

  return (
    <div className="book-progress-card">
      <img className="book-progress-cover" alt="Book cover" src={bookCover} />
      <div className="book-progress-info">
        <a className="book-progress-title">{bookTitle}</a>
        <span className="book-progress-author">{bookAuthor}</span>
        <ProgressBar completed={bookProgression} maxCompleted={100} />
      </div>
    </div>
  );
}

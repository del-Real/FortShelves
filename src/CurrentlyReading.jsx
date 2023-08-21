import ProgressBar from "@ramonak/react-progress-bar";

export function CurrentlyReading({
  bookTitle,
  bookAuthor,
  bookProgression = 0,
}) {
  const bookCover = "./src/assets/" + bookTitle + "_cover.jpg";

  return (
    <div className="currently-reading">
      <img
        className="currently-reading-cover"
        alt="Book cover"
        src={bookCover}
      />
      <div className="currently-reading-info">
        <a className="currently-reading-title">{bookTitle}</a>
        <span className="currently-reading-author">{bookAuthor}</span>
        <ProgressBar completed={bookProgression} maxCompleted={100} />
      </div>
    </div>
  );
}

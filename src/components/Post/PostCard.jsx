export function PostCard({
  BookTitle,
  PostType,
  UserNick,
  PostTitle,
  PostContent,
  PostImage,
  IconImage,
}) {
  const typeColors = {
    Opinion: "#ff7171",
    Doubt: "#9871ff",
    Review: "#e6de6b",
  };

  const postTypeColor = typeColors[PostType] || "#fff";

  const cardStyle = {
    "--card-color": postTypeColor,
  };

  return (
    <article className="post-card">
      <div className="post-card-header">
        <img className="post-card-icon" alt="Icon Image" src={IconImage} />
        <a className="post-card-book">/ {BookTitle}</a>
        <span className="post-card-type" style={cardStyle}>
          {PostType}
        </span>
        <span className="post-card-usernick">{UserNick}</span>

        <div className="post-like">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        </div>
      </div>

      <div className="post-card-body">
        <h3 className="post-card-title">{PostTitle}</h3>
        <p className="post-card-content">{PostContent}</p>
      </div>
      <img
        className="post-card-image"
        alt="Post Image"
        src={PostImage}
        width="750"
      />
    </article>
  );
}

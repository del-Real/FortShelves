import { useState } from "react";

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

  const [isLiked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!isLiked);
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

        {/* Ternary conditional in fill */}
        <div className="post-like" onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill={isLiked ? "currentColor" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        </div>
      </div>

      <div className="post-card-body">
        <h3 className="post-card-title">{PostTitle}</h3>
        <span className="post-card-content">{PostContent}</span>
      </div>
      {PostImage && (
        <img
          className="post-card-image"
          alt="Post Image"
          src={PostImage}
          width="750"
        />
      )}
    </article>
  );
}

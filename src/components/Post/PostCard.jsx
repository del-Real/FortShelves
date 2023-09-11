export function PostCard({
  BookTitle,
  PostType,
  UserNick,
  PostTitle,
  PostContent,
  PostImage,
}) {
  return (
    <article className="post-card">
      <div className="post-card-header">
        <a className="post-card-book">/ {BookTitle}</a>
        <span className="post-card-type">{PostType}</span>
        <span className="post-card-usernick">{UserNick}</span>
      </div>

      <div className="post-card-body">
        <h3 className="post-card-title">{PostTitle}</h3>
        <p className="post-card-content">{PostContent}</p>
        <img
          className="post-card-image"
          alt="Post Image"
          src={PostImage}
          width="750"
        />
      </div>
    </article>
  );
}

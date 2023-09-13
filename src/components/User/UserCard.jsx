export function UserCard({ userName, userNick }) {
  return (
    <div className="user-card">
      <img
        className="user-image"
        alt="Book cover"
        src={`https://unavatar.io/twitter/${userNick}`}
      />
      <div className="user-info">
        <a className="user-name">{userName}</a>
        <span className="user-nick">@{userNick}</span>
      </div>
    </div>
  );
}

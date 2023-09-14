import { PostCard } from "./PostCard";
import { postArray } from "./PostExample";

export function PostFeed() {
  return (
    <div className="post-feed">
      <PostCard
        BookTitle="Game of Thrones"
        PostType="Doubt"
        UserNick="Stark_fan"
        PostTitle="Should I buy the limited edition?"
        PostContent={postArray[4]}
        PostImage={"./src/assets/post_images/Game Of Thrones.jpg"}
      />

      <PostCard
        BookTitle="V of Vendetta"
        PostType="Opinion"
        UserNick="mooreBoole"
        PostTitle="I have a theory about who V really is..."
        PostContent={postArray[3]}
        PostImage={"./src/assets/post_images/V of Vendetta.jpg"}
      />

      <PostCard
        BookTitle="The Lord of the Rings"
        PostType="Doubt"
        UserNick="Ferchudec"
        PostTitle="Is Tom Bombadil a vala or a maia?"
        PostContent={postArray[1]}
        PostImage={"./src/assets/post_images/The Lord of the Rings.jpg"}
      />

      <PostCard
        BookTitle="Akira"
        PostType="Opinion"
        UserNick="mikelchan"
        PostTitle="Akira is a critique of militarization and drug use"
        PostContent={postArray[2]}
        PostImage={"./src/assets/post_images/Akira.jpg"}
      />

      <PostCard
        BookTitle="Dune"
        PostType="Review"
        UserNick="AwesomePaul"
        PostTitle="A deep comprenhensive guide about Arrakis"
        PostContent={postArray[0]}
        PostImage={"./src/assets/post_images/Dune.jpg"}
      />
      <PostCard
        BookTitle="The Art of Loving"
        PostType="Review"
        UserNick="cozyblanket"
        PostTitle="This book has change my view about relationships"
        PostContent={postArray[5]}
        PostImage={""}
      />
    </div>
  );
}

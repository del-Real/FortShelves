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
        PostImage={"/assets/post_images/Game Of Thrones.jpg"}
        IconImage={"/assets/post_icons/Got_icon.jpg"}
      />

      <PostCard
        BookTitle="V of Vendetta"
        PostType="Opinion"
        UserNick="mooreBoole"
        PostTitle="I have a theory about who V really is..."
        PostContent={postArray[3]}
        PostImage={"/assets/post_images/V of Vendetta.jpg"}
        IconImage={"/assets/post_icons/Vendetta_icon.jpg"}
      />

      <PostCard
        BookTitle="The Lord of the Rings"
        PostType="Doubt"
        UserNick="Ferchudec"
        PostTitle="Is Tom Bombadil a vala or a maia?"
        PostContent={postArray[1]}
        PostImage={"/assets/post_images/The Lord of the Rings.jpg"}
        IconImage={"/assets/post_icons/Lotr_icon.jpg"}
      />

      <PostCard
        BookTitle="Akira"
        PostType="Opinion"
        UserNick="mikelchan"
        PostTitle="Akira is a critique of militarization and drug use"
        PostContent={postArray[2]}
        PostImage={"/assets/post_images/Akira.jpg"}
        IconImage={"/assets/post_icons/Akira_icon.jpg"}
      />

      <PostCard
        BookTitle="Dune"
        PostType="Review"
        UserNick="AwesomePaul"
        PostTitle="A deep comprenhensive guide about Arrakis"
        PostContent={postArray[0]}
        PostImage={"/assets/post_images/Dune.jpg"}
        IconImage={"/assets/post_icons/Dune_icon.jpg"}
      />
      <PostCard
        BookTitle="The Art of Loving"
        PostType="Review"
        UserNick="cozyblanket"
        PostTitle="This book has change my view about relationships"
        PostContent={postArray[5]}
        PostImage={""}
        IconImage={"/assets/post_icons/ArtLoving_icon.jpg"}
      />
    </div>
  );
}

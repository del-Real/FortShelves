import { PostCard } from "./PostCard";

export function PostFeed() {
  return (
    <div className="post-feed">
      <PostCard
        BookTitle="Game of Thrones"
        PostType="Doubt"
        UserNick="Stark_fan"
        PostTitle="Should I buy the limited edition?"
        PostContent="Donec sit amet urna non dui dignissim auctor. Quisque at risus vestibulum, porta est quis, mollis felis. Vivamus tincidunt mi non faucibus pharetra. Duis bibendum, nibh a tincidunt molestie, neque augue tempus nulla, sodales dictum purus est sit amet felis. Cras vitae bibendum ex. Praesent sit amet sollicitudin leo"
        PostImage={"./src/assets/Game Of Thrones.jpg"}
      />

      <PostCard
        BookTitle="The Art of Loving"
        PostType="Review"
        UserNick="cozyblanket"
        PostTitle="This book has change my view about relationships"
        PostContent="Quisque at risus vestibulum, porta est quis, mollis felis. Vivamus tincidunt mi non faucibus pharetra. Duis bibendum, nibh a tincidunt molestie, neque augue tempus nulla, sodales dictum purus est sit amet felis. Cras vitae bibendum ex. Praesent sit amet."
        PostImage={""}
      />

      <PostCard
        BookTitle="V of Vendetta"
        PostType="0hmio"
        UserNick="Stark_fan"
        PostTitle="I have a theory about who V really is..."
        PostContent="Vivamus tincidunt mi non faucibus pharetra. Duis bibendum, nibh a tincidunt molestie, neque augue tempus nulla, sodales dictum purus est sit amet felis. Cras vitae bibendum ex. Praesent sit amet sollicitudin leo"
        PostImage={""}
      />
    </div>
  );
}

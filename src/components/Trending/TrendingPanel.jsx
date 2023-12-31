import { TrendingCard } from "./TrendingCard";

export function TrendingPanel() {
  return (
    <>
      <div className="category-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-flag-3-filled"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M19 4c.852 0 1.297 .986 .783 1.623l-.076 .084l-3.792 3.793l3.792 3.793c.603 .602 .22 1.614 -.593 1.701l-.114 .006h-13v6a1 1 0 0 1 -.883 .993l-.117 .007a1 1 0 0 1 -.993 -.883l-.007 -.117v-16a1 1 0 0 1 .883 -.993l.117 -.007h14z"
            strokeWidth={0}
            fill="currentColor"
          ></path>
        </svg>

        <h2>Trending</h2>
      </div>

      <div className="trending">
        <TrendingCard CommunityName="Scifi" />
        <TrendingCard CommunityName="GirlsOnWriting" />
        <TrendingCard CommunityName="BrandonSanderson" />
        <TrendingCard CommunityName="Sandman" />
        <TrendingCard CommunityName="TopTierSagas" />
        <TrendingCard CommunityName="Fanfics" />
        <TrendingCard CommunityName="Twilight" />
      </div>
    </>
  );
}

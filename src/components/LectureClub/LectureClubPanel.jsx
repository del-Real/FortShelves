import { LectureClubCard } from "./LectureClubCard";

export function LectureClubPanel() {
  return (
    <>
      <div className="category-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-book-filled"
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
            d="M12.088 4.82a10 10 0 0 1 9.412 .314a1 1 0 0 1 .493 .748l.007 .118v13a1 1 0 0 1 -1.5 .866a8 8 0 0 0 -8 0a1 1 0 0 1 -1 0a8 8 0 0 0 -7.733 -.148l-.327 .18l-.103 .044l-.049 .016l-.11 .026l-.061 .01l-.117 .006h-.042l-.11 -.012l-.077 -.014l-.108 -.032l-.126 -.056l-.095 -.056l-.089 -.067l-.06 -.056l-.073 -.082l-.064 -.089l-.022 -.036l-.032 -.06l-.044 -.103l-.016 -.049l-.026 -.11l-.01 -.061l-.004 -.049l-.002 -.068v-13a1 1 0 0 1 .5 -.866a10 10 0 0 1 9.412 -.314l.088 .044l.088 -.044z"
            strokeWidth={0}
            fill="currentColor"
          ></path>
        </svg>

        <h2>Lecture Clubs</h2>
      </div>

      <div className="currently-reading">
        <LectureClubCard
          clubName="Recover Reading Habit"
          imagePath="/assets/readinghabit.jpg"
          color="#953bd8"
        />

        <LectureClubCard
          clubName="Non-fiction/essays fans"
          imagePath="/assets/nonfiction.jpg"
          color="#199a96"
        />
      </div>
    </>
  );
}

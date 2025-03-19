import { SVGProps } from 'react';

export function SkaterScribble(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 231 312"
      {...props}
    >
      <path
        className="skater-scribble-path animate-squiggle"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9"
        d="m12 150-2-32 2-27c2-16 14-36 18-52 4-38 47-25 77-23 19 1 38-6 56-4 9 1 17 7 25 13 6 6 14 11 16 20 3 11-4 26-3 38 2 12 7 21 7 33 2 28 2 55 2 83l-2 28c0 15 1 25-10 37-17 16-34 29-59 32-23 4-47 7-70 3-13-2-19-9-26-20-8-14-17-30-21-46-2-10-1-19 0-29l2-62c0-21 3-40 13-59 7-14 9-29 21-39 6-6 20-2 27-5 10-4 20 0 30 0 9-1 32-8 39-5 14 6 16 15 24 28 5 9-2 23 0 32 3 16 8 30 9 47 1 18-2 36-4 54-1 8 0 15-2 23l-8 12-10 14c-4 5-9 9-14 12l-18 9c-7 4-16 5-24 6-6 2-12 1-18 1-4-1-5-4-8-6l-9-10-12-17a65 65 0 0 1-11-32v-20l5-18c1-10-2-23 0-32 3-13 4-25 8-38 4-9 11-19 19-26 7-7 22-10 32-11 6 0 14 1 18 4 5 4 15 10 18 15 4 6 0 15 2 22l6 42-3 21c-1 10-4 18-8 27-5 12-11 27-24 31-8 3-19 5-28 2-10-5-13-20-14-30-1-7 0-14 1-21 4-17 0-44 8-61 5-8 23-9 28-8 6 0 12 6 14 12 3 6-3 16-3 23l-1 17c-1 9-2 19-6 27-2 5-6 10-10 14-6 7-8 4-10-5s1-19 3-28c1-9 4-18 7-26"
      ></path>
    </svg>
  );
}

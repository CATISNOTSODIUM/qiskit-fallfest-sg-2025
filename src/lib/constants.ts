export const EVENT_TITLE = "QISKIT FALLFEST 2025";

interface NavigationHeader {
  title: string;
  link?: string; // default is `#title`
  subheader?: NavigationHeader[];
}

export const NAVIGATION_HEADERS: NavigationHeader[] = [
  {
    title: "Home",
  },
  {
    title: "Event",
    subheader: [
      { title: "Partners" },
      { title: "Schedules" },
      { title: "Speakers" },
      { title: "Venue" },
    ],
  },
  {
    title: "Team",
  },
  {
    title: "About",
  },
];

export const ABOUT_THE_EVENT_DESCRIPTION =
  "Qiskit Fall Fest is the world’s largest collection of student-run quantum computing events. As one of the 50 sponsored international universities selected to host it, we bring together a collection of talented quantum enthusiasts along with IBM Quantum members to mark a celebration of the advances that quantum computing has made in the past year, with experienced quantum scientists and budding young quantum enthusiasts collaborating to showcase their talents at the workshops and hackathons at the VIT Chennai campus. With open arms, we welcome you to the event and are hoping to see you there!!";

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
    title: "Contact",
  },
];

export const ABOUT_THE_EVENT_DESCRIPTION =
  "Qiskit Fall Fest is the world’s largest collection of student-run quantum computing events. As one of the 50 sponsored international universities selected to host it, we bring together a collection of talented quantum enthusiasts along with IBM Quantum members to mark a celebration of the advances that quantum computing has made in the past year, with experienced quantum scientists and budding young quantum enthusiasts collaborating to showcase their talents at the workshops and hackathons at the VIT Chennai campus. With open arms, we welcome you to the event and are hoping to see you there!!";


////// Schedule /////
interface ScheduleDate {
  date: string
  scheduleHour: ScheduleHour[]
}

interface ScheduleHour {
  time: string
  details: string
}

// Sample schedule
export const QISKIT_SCHEDULE: ScheduleDate[] = [
  {
    date: "2025-09-12",
    scheduleHour: [
      {
        time: "10:00",
        details: "Opening Ceremony & Welcome by IBM Quantum Team"
      },
      {
        time: "11:30",
        details: "Intro to Quantum Computing with Qiskit"
      },
      {
        time: "14:00",
        details: "Hands-on Lab: Building Quantum Circuits"
      },
      {
        time: "16:00",
        details: "Panel Discussion: The Future of Quantum Tech"
      }
    ]
  },
  {
    date: "2025-09-13",
    scheduleHour: [
      {
        time: "09:30",
        details: "Workshop: Quantum Machine Learning with Qiskit"
      },
      {
        time: "12:00",
        details: "Live Demo: Running Quantum Programs on Real Hardware"
      },
      {
        time: "15:00",
        details: "Hackathon Kickoff: Quantum Challenge Begins"
      },
      {
        time: "18:00",
        details: "Networking Session & Community Mixer"
      }
    ]
  },
  {
    date: "2025-09-14",
    scheduleHour: [
      {
        time: "10:00",
        details: "Hackathon Final Presentations"
      },
      {
        time: "13:00",
        details: "Closing Keynote: Scaling Quantum Innovation"
      },
      {
        time: "15:00",
        details: "Award Ceremony & Farewell"
      }
    ]
  }
];

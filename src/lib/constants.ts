export const EVENT_TITLE = "QISKIT FALLFEST 2025";

// Event start date (hardcoded). To be formatted later.
export const EVENT_START_DATE: Date = new Date("10 Dec 2025 00:12:00 GMT");

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
      { title: "Schedules" },
      { title: "Partners" },
      { title: "FAQs", link: "/faq"}
    ],
  },
  {
    title: "Team",
  },
  {
    title: "Register",
  },
];

export const ABOUT_THE_EVENT_DESCRIPTION = 
  `Qiskit Fall Fest is the world’s largest collection of student-run quantum computing events, 
  open to all university, polytechnic, and junior college students, as well as researchers and 
  quantum enthusiasts across Singapore. `;


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


///// Partners /////

export interface PartnerCardProps {
  imagePath: string
  name: string
  description: string
}


export const PARTNERS: PartnerCardProps[] = [
  {
    imagePath: "/images/Qiskit-brand.png",
    name: "IBM Qiskit",
    description: "Qiskit is a free and open-source toolkit created by IBM for quantum computing. It enables users to design and execute quantum programs on both simulated environments and actual quantum machines. The framework provides a suite of tools for constructing quantum circuits, modeling quantum behavior, and crafting quantum algorithms."
  }
];

//// OUR TEAMS ////
export interface TeamCardProps {
  name: string
  position: string
  imagePath: string
}

export const TEAM_CARDS: TeamCardProps[] = [
  {
    name: "YOUR NAME",
    position: "Qiskit committee",
    imagePath: "https://heroui.com/images/hero-card-complete.jpeg"
  }
]
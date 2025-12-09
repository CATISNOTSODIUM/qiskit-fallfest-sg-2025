export const EVENT_TITLE = "QUANTUM FALLFEST 2025";

// Event start date (hardcoded). To be formatted later.
export const EVENT_START_DATE: Date = new Date("2025-12-08T09:30:00+08:00");
export const EVENT_RANGE_DATE = "8th Dec - 13th Dec";
export const REGISTRATION_LINK = "https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-go8jV7TjsO5Di4_A-R5p7XpUQjZOMUk3RFo4RkZOWEpRSFU2RDRQWUdLRy4u";


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
      // { title: "FAQs", link: "/faq"}
    ],
  },
  {
    title: "Gallery",
  }
  /*
  {
    title: "Team",
    link: "/team"
  },
  {
    title: "Register",
  },
  */
];

export const ABOUT_THE_EVENT_DESCRIPTION = 
  `Quantum Fall Fest is the world’s largest collection of student-run quantum computing events, bringing together learners and innovators from across the world. This year, we're proud to host Singapore’s first-ever Fall Fest, open to university, polytechnic, and junior college students as well as researchers and quantum enthusiasts.


`;


////// Schedule /////

export type ScheduleDetails = ScheduleDetailsDate[];

interface ScheduleDetailsDate {
  date: string
  location?: string
  details?: string
  daySchedule: ScheduleDetailsTime[]
}

interface ScheduleDetailsTime {
  time: string
  details: string
}

// Sample schedule
export const QISKIT_SCHEDULE: ScheduleDetailsDate[] = [
  {
    "date": "10th December (Wednesday)",
    "location": "NUS C40201-Multipurpose Hall (Report time: 09:00)",
    "daySchedule": [
      { "time": "09:30-11:30", "details": "Workshop: Quantum Algorithm" },
      { "time": "11:30-12:30", "details": "Lunch (in MPH)" },
      { "time": "12:30-13:30", "details": "Guest speaker prof Ernest Tan: Quantum Cryptography" },
      { "time": "13:45-14:45", "details": "Guest speaker Mr Nikhil Bartake: Post Quantum Cryptography" },
      { "time": "15:00-16:00", "details": "Lab Visit (decentralised dismissal after tour)" }
    ]
  },
  {
    "date": "11th December (Thursday)",
    "location": "NUS C40201-Multipurpose Hall (Report time: 09:00)",
    "daySchedule": [
      { "time": "09:30-11:30", "details": "Workshop: Introduction to Machine Learning Fundamentals" },
      { "time": "11:30-12:30", "details": "Lunch (in MPH)" },
      { "time": "12:30-14:30", "details": "Workshop: Quantum Machine Learning -Variational Algorithm" },
      { "time": "14:45-15:45", "details": "Panel discussion: Do ML and Quantum synergize?" },
      { "time": "16:00-17:00", "details": "Guest Speaker IBM Talk - IBMs Roadmap to QC" }
    ]
  },
  {
    "date": "13th December (Saturday)",
    "location": "NUS C40201-Multipurpose Hall (Report time: 09:00)",
    "daySchedule": [
      { "time": "09:30-11:30", "details": "Group Activity: Intro to quantum finance" },
      { "time": "11:30-12:30", "details": "Lunch (in MPH)" },
      { "time": "12:45-13:30", "details": "Panel discussion: Is quantum supremacy real? (Dr Dikshant from IsaaQ and Dr Angelina Frank from QAI)" },
      { "time": "13:45-15:00", "details": "Industry Overview Talk and Closing statements" }
    ]
  }
]

///// Partners /////

export interface PartnerCardProps {
  imagePath: string
  name: string
  description?: string
}


export const PARTNERS: PartnerCardProps[] = [
  {
    imagePath: "/images/Qiskit-brand.png",
    name: "IBM Qiskit",
    description: "Qiskit is IBM’s open-source quantum computing toolkit for building, simulating, and running quantum circuits and algorithms on real and virtual machines."
  },
  {
    imagePath: "/images/iqcc.jpg",
    name: "NTU Quantum Computing Club",
    description: "Nanyang Technological University, Singapore"
  },
  {
    imagePath: "/images/nus-physoc.png",
    name: "NUS Physics Society",
    description: "National University of Singapore, Singapore"
  },
  {
    imagePath: "/images/cqt.png",
    name: "Centre for Quantum Technologies (CQT)",
    description: "National University of Singapore, Singapore"
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

//// Announcement /////

export interface AnnouncementCardProps {
    title: string
    description: string
    date: Date
}


export const ANNOUNCEMENT_LIST: AnnouncementCardProps[] = [
  {
    title: "Registration is now open!",
    description:
      `
      Be Part of Singapore’s First Quantum Fall Fest! We’re excited to announce Quantum Fall Fest, a student-led celebration of 100 years of quantum mechanics, jointly organized by IBM Quantum, Quantum Computing Club @ NTU, and NUS Physics Society. This unique initiative aims to introduce and demystify quantum computing for students at the university, polytechnic, and junior college levels.
      `,
    date: new Date("2025-11-16"),
  },
  {
    title: "Schedule is now up to date",
    description:
      `
      Sorry for any inconvenience caused.
      `,
    date: new Date("2025-12-09"),
  }
];
///// FAQ LIST /////


export interface FaqCardProps {
  question: string;
  answer: string;
}

export const FAQ_LIST: FaqCardProps[] = [];
/*
export const FAQ_LIST = [
  {
    question:
      "Do I need prior experience in quantum computing to participate in Qiskit Fall Fest?",
    answer:
      "Not at all! Qiskit Fall Fest is designed to be beginner-friendly. Whether you're just curious or already diving deep into quantum algorithms, there are sessions and resources tailored for every level.",
  },
  {
    question: "How do I register for Qiskit Fall Fest 2025?",
    answer:
      "You can register through our official website. Just fill out the registration form and you'll receive a confirmation email with further details.",
  },
  {
    question: "Can I participate if I'm not a student?",
    answer:
      "While Qiskit Fall Fest is primarily student-focused, many sessions are open to researchers, educators, and quantum enthusiasts. Check the event schedule for open-access activities.",
  },
  {
    question: "Will there be any hands-on workshops or coding sessions?",
    answer:
      "Yes! The event includes hands-on workshops where you'll get to build quantum circuits using Qiskit and run them on simulators or real quantum hardware.",
  },
  {
    question: "Are there any prizes or certificates for participants?",
    answer:
      "Absolutely. Participants may receive digital certificates, and selected competitions or hackathons will offer prizes sponsored by our partners.",
  },
  {
    question: "Can I form a team with friends from other schools?",
    answer:
      "Yes, cross-institutional teams are welcome! Collaboration is encouraged, and many challenges are designed to be tackled in groups.",
  },
];
*/

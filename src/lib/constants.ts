export const EVENT_TITLE = "QUANTUM FALLFEST 2025";

// Event start date (hardcoded). To be formatted later.
export const EVENT_START_DATE: Date = new Date("2025-12-08T09:00:00+08:00");
export const EVENT_RANGE_DATE = "8th Dec - 13th Dec";

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
    "date": "8th December (Monday)",
    "location": "Nanyang Technological University",
    "details": "History",
    "daySchedule": [
      { "time": "9:30-10:30", "details": "Registration" },
      { "time": "10:30-12:30", "details": "History of Quantum and Computer Science" },
      { "time": "12:30-14:00", "details": "Lunch" },
      { "time": "14:00-16:00", "details": "Basics Linear Algebra, Probability, and Statistics" }
    ]
  },
  {
    "date": "9th December (Tuesday)",
    "location": "National University of Singapore",
    "details": "Universal Computation",
    "daySchedule": [
      { "time": "10:00-12:30", "details": "Universal Computation and Logic Gates" },
      { "time": "12:30-13:30", "details": "Lunch" },
      { "time": "13:30-14:30", "details": "Guest Speaker" },
      { "time": "14:30-17:00", "details": "Introduction to Quantum Computation" }
    ]
  },
  {
    "date": "10th December (Wednesday)",
    "location": "National University of Singapore",
    "details": "How does Quantum work and is it real?",
    "daySchedule": [
      { "time": "10:00-12:00", "details": "Different Realizations of a Computer. Different Approach to Build a Quantum Computer" },
      { "time": "12:00-13:00", "details": "Lunch" },
      { "time": "13:00-16:00", "details": "Evening Station (Quantum Algorithm and Lab Visit)" },
      { "time": "16:00-17:00", "details": "IBM speaker" }
    ]
  },
  {
    "date": "11th December (Thursday)",
    "location": "Company visit",
    "details": "Where will quantum be in the current state-of-the-art?",
    "daySchedule": [
      { "time": "11:00-12:30", "details": "Introduction to Machine learning and Quantum" },
      { "time": "12:30-13:30", "details": "Lunch" },
      { "time": "13:30-15:30", "details": "Quantum Machine learning - Variational Algorithm" },
      { "time": "15:30-16:30", "details": "Panel discussion: Do ML and Quantum synergize?" }
    ]
  },
  {
    "date": "13th December (Saturday)",
    "location": "A-STAR",
    "details": "Quantum in Singapore?",
    "daySchedule": [
      { "time": "10:00-13:00", "details": "Group Activity" },
      { "time": "13:00-14:00", "details": "Lunch" },
      { "time": "14:00-15:00", "details": "Panel discussion: Is quantum supremacy real?" },
      { "time": "16:00-17:00", "details": "Ending Ceremony: Industry talk, Singapore quantum ecosystem, and Certification Ceremony" },
      { "time": "17:00-19:00", "details": "Networking - Dinner" }
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

export const ANNOUNCEMENT_LIST: AnnouncementCardProps[] = [];

/*
export const ANNOUNCEMENT_LIST: AnnouncementCardProps[] = [
  {
    title: "📢 Qiskit Fall Fest Singapore",
    description:
      "Qiskit Fall Fest is the world’s largest collection of student-run quantum computing events, open to all university, polytechnic, and junior college students, as well as researchers and quantum enthusiasts across Singapore.",
    date: new Date("2025-09-20"),
  },
  {
    title: "🧠 Quantum Hackathon 2025: Innovate with Qubits",
    description:
      "Join the brightest minds in Singapore for a 48-hour quantum coding sprint. Whether you're a beginner or a seasoned researcher, this hackathon offers workshops, mentorship, and prizes for the most groundbreaking quantum solutions.",
    date: new Date("2025-10-05"),
  },
  {
    title: "🎓 Quantum Career Connect: Meet the Industry",
    description:
      "A networking event designed to bridge students and professionals with leading quantum tech companies. Expect panel discussions, resume reviews, and direct recruitment opportunities from startups and global firms alike.",
    date: new Date("2025-10-18"),
  },
];
*/
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

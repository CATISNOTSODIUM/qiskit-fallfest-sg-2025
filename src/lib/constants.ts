export const EVENT_TITLE = "QISKIT FALLFEST 2025";

// Event start date (hardcoded). To be formatted later.
export const EVENT_START_DATE: Date = new Date("2025-12-06T09:00:00+08:00");
export const EVENT_RANGE_DATE = "6th Dec - 17th Dec";

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
  `Qiskit Fall Fest is the world’s largest collection of student-run quantum computing events, bringing together learners and innovators from across the world. This year, we're proud to host Singapore’s first-ever Fall Fest, open to university, polytechnic, and junior college students as well as researchers and quantum enthusiasts.


`;


////// Schedule /////

interface ScheduleDetails {
  time: string
  details: string
}

// Sample schedule
export const QISKIT_SCHEDULE: ScheduleDetails[] = [
  {
    "time": "6th Dec 2025",
    "details": "Opening ceremony • Guest speaker • Networking lunch • Intro to Quantum Computing seminar"
  },
  {
    "time": "8th Dec 2025",
    "details": "Beginner Workshop #1 — \"Zero-to-Circuit: Your First Quantum Program in Qiskit\""
  },
  {
    "time": "9th Dec 2025",
    "details": "Guest speaker from IBM"
  },
  {
    "time": "10th Dec 2025",
    "details": "Beginner Workshop #2 — \"From Simulator to Real Hardware: Noise, Transpilation & Good Experiments\" • Intermediate Workshop #1 — \"Intro to Quantum Machine Learning\""
  },
  {
    "time": "12th Dec 2025",
    "details": "Beginner Workshop #3 — \"Algorithms Starter Pack: Deutsch–Jozsa & Grover\" • Intermediate Workshop #2 — \"Variational Circuit Design\""
  },
  {
    "time": "13th Dec 2025",
    "details": "Guest speaker from industry/academia"
  },
  {
    "time": "15th Dec 2025",
    "details": "Lab visit — Centre for Quantum Technologies @ NUS • Career talk: pathways in quantum"
  },
  {
    "time": "17th Dec 2025",
    "details": "Hackathon (Beginner & Intermediate tracks) • Awards ceremony • Closing ceremony"
  }
]
/*
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
*/


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

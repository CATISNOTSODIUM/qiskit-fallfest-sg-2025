"use client";
import Footer from "@/components/common/footer";
import NavigationBar from "@/components/common/navbar";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";

const FAQ_LIST = [
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


/**
 * FAQ page
 */
export default function Faq() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <NavigationBar />
      <main className="max-w-[900px] dark flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FaqTitleCard />
          {FAQ_LIST.map((faq, index) => (
            <FaqCard key={index} {...faq} />
          ))}
      </main>
      <Footer />
    </div>
  );
}


interface FaqCardProps {
  question: string;
  answer: string;
}

function FaqCard(props: FaqCardProps) {
  return <Accordion variant="splitted">
      <AccordionItem title={props.question}>{props.answer}</AccordionItem>
    </Accordion>;
}

function FaqTitleCard() {
  return (
    <div
      className="min-h-[300px] flex flex-row items-center w-full
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        bg-[size:20px_20px]
    "
    >
      <div className="flex flex-col sm:min-w-[500px]">
        <h2
          className="w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r 
                from-foreground to-purple-400 p-10"
        >
          <div className="text-5xl font-bold">Frequently Asked Questions</div>
        </h2>
      </div>
      <div
        className="hidden md:flex w-full h-full items-center 
            justify-center drop-shadow-2xl"
      >
        <Image
          src="/images/Qiskit-Logo.png"
          alt="qiskit-logo"
          width={300}
          height={300}
          className="invert hover:scale-[1.1] duration-700"
        />
      </div>
    </div>
  );
}

"use client";
import Footer from "@/components/common/footer";
import NavigationBar from "@/components/common/navbar";
import CommonTitleCard from "@/components/titlecard";
import { FAQ_LIST, FaqCardProps } from "@/lib/constants";
import { Accordion, AccordionItem } from "@heroui/react";


/**
 * FAQ page
 */
export default function Faq() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <NavigationBar />
      <main className="max-w-[900px] dark flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CommonTitleCard title="Frequently Asked Questions" />
          {FAQ_LIST.map((faq, index) => (
            <FaqCard key={index} {...faq} />
          ))}
      </main>
      <Footer />
    </div>
  );
}



function FaqCard(props: FaqCardProps) {
  return <Accordion variant="splitted">
      <AccordionItem title={props.question}>{props.answer}</AccordionItem>
    </Accordion>;
}

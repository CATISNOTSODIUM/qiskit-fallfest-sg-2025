import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function OurTeam() {
    return <div className="w-full px-6" id="Team">
        <div className="text-4xl font-bold text-left mb-4">
        {"Our team"}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[900px]">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
        </div>
    </div>
}


// TODO: Make this component generic
export function TeamCard() {
  return (
    <Card className="py-4 row-span-1 hover:scale-[1.05]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <small className="text-default-500">Qiskit Committee</small>
        <h4 className="font-bold text-large">Your name</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex w-full items-center justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
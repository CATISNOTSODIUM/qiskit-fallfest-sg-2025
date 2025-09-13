import Footer from "@/components/common/footer";
import NavigationBar from "@/components/common/navbar";
import CommonTitleCard from "@/components/titlecard";
import { TEAM_CARDS, TeamCardProps } from "@/lib/constants";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Image from "next/image";

export default function OurTeam() {
  return <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
        <NavigationBar />
        <main className="max-w-[900px] dark flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="w-full px-6" id="Team">
        <CommonTitleCard title="Our team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-[900px]">
            {
              TEAM_CARDS.map(
                (team, idx) => <TeamCard key={idx} {...team}/>
              )
            }
        </div>
    </div>
        </main>
        <Footer />
      </div>
}

export function TeamCard(props: TeamCardProps) {
  const {name, position, imagePath} = props;
  return (
    <Card className="py-4 row-span-1 hover:scale-[1.05]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <small className="text-default-500">{position}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex w-full items-center justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imagePath}
          width={270}
          height={270}
        />
      </CardBody>
    </Card>
  );
}
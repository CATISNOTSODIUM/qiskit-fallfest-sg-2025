"use client"
import { ANNOUNCEMENT_LIST, AnnouncementCardProps } from "@/lib/constants";
import { Button, Card, CardBody } from "@heroui/react";
import { useState } from "react";

export default function Announcement() {
    const [isExpanded, setIsExpanded] = useState(false);
    const targetedList = ANNOUNCEMENT_LIST.sort((a, b) => b.date.getTime() - a.date.getTime());
    if (ANNOUNCEMENT_LIST.length === 0) {

    }
    return (
        <div className="w-full px-6">
            <div className="text-4xl font-bold text-left mb-4">
                {"📢 Latest announcements"}
            </div>
            {
              ANNOUNCEMENT_LIST.length === 0
              ? <div>{'No latest annoucements'}</div>
              : <div className="flex flex-col justify-center items-center gap-3 bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px]">
                <AnnouncementCard {... targetedList[0]}/>
                {isExpanded && targetedList.length > 1 && 
                    targetedList.slice(1).map(
                        (acc, idx) => <AnnouncementCard key={idx} {...acc}/> 
                    )
                }
                <Button disableAnimation 
                    className="px-6 rounded-full hover:animate-pulse"
                    color="secondary"
                    variant="bordered"
                    onPress={() => setIsExpanded(prev => !prev)}>
                    {isExpanded ? "View less" : "View more"}
                </Button>
            </div>
            }
        </div>
    );
}



function AnnouncementCard(props: AnnouncementCardProps) {
    return <Card
      className="max-w-[900px] py-1 px-2 
        hover:scale-[1.01]
      flex items-center justify-center bg-white/1 hover:bg-white/5"
    >
        <CardBody>
            <div className="text-xs rounded-full border-white border-1 text-white px-3 w-fit mb-2">
            {
                props.date.toLocaleDateString("en-SG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
            }
        </div>

<div className="text-xl font-bold">
            {props.title}
        </div>
        
        <div className="text-sm">
           {props.description}
        </div>
        </CardBody>
    </Card>
}

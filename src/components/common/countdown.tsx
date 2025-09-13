import { Card, CardBody, CardHeader } from "@heroui/react";

interface CountdownProps {
  startDate: Date;
  description: string;
}

export default function Countdown(props: CountdownProps) {
  const currentDate = new Date();
  const timeDiff = props.startDate.getTime() - currentDate.getTime();

  const totalMinutes = Math.floor(timeDiff / (1000 * 60));
  const daysRemaining = Math.floor(totalMinutes / (60 * 24));
  const hoursRemaining = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutesRemaining = totalMinutes % 60;

  return (
    <div className="w-full flex items-center justify-center">
      <Card className="sm:min-w-[500px] p-10 drop-shadow-xl drop-shadow-purple-700/10">
        <CardBody>
          <div className="grid grid-cols-3 gap-6 w-full justify-items-center">
            <div className="text-center">
              <div className="text-6xl font-bold">{daysRemaining}</div>
              <div className="text-xl">Days</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold">{hoursRemaining}</div>
              <div className="text-xl">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold">{minutesRemaining}</div>
              <div className="text-xl">Minutes</div>
            </div>
          </div>

          <div className="text-xl lg:text-3xl font-bold text-center pt-5">
            {props.description}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

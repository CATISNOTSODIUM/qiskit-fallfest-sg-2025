import { Card, CardBody } from "@heroui/react";

interface CountdownProps {
  startDate: Date;
  description?: string;
}

export default function Countdown(props: CountdownProps) {
  const currentDate = new Date();
  const timeDiff = Math.max(0, props.startDate.getTime() - currentDate.getTime());
  const totalMinutes = Math.floor(timeDiff / (1000 * 60));
  const daysRemaining = Math.floor(totalMinutes / (60 * 24));
  const hoursRemaining = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutesRemaining = totalMinutes % 60;

  // Format as 2-character strings
  const daysStr = String(daysRemaining).padStart(2, "0");
  const hoursStr = String(hoursRemaining).padStart(2, "0");
  const minutesStr = String(minutesRemaining).padStart(2, "0");

  return (
    <div
      className="w-full flex items-center justify-center
      bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:20px_20px]"
    >
      <Card className="sm:min-w-[500px] p-2 bg-transparent border-none">
        <CardBody>
          {props.description && (
            <div className="text-2xl lg:text-4xl font-bold text-center pb-5">
              {props.description}
            </div>
          )}
          <div className="grid grid-cols-3 gap-6 lg:gap-24 w-full justify-items-center">
            <div className="text-center">
              <div className="min-w-[100px] text-6xl lg:text-8xl font-bold bg-white text-black px-2 py-4 rounded-md">
                {daysStr}
              </div>
              <div className="text-xl lg:text-2xl">Days</div>
            </div>
            <div className="text-center">
              <div className="min-w-[100px] text-6xl lg:text-8xl font-bold bg-white text-black px-2 py-4 rounded-md">
                {hoursStr}
              </div>
              <div className="text-xl lg:text-2xl">Hours</div>
            </div>
            <div className="text-center">
              <div className="min-w-[100px] text-6xl lg:text-8xl font-bold bg-white text-black px-2 py-4 rounded-md">
                {minutesStr}
              </div>
              <div className="text-xl lg:text-2xl">Minutes</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

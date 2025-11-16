"use client"
import { QISKIT_SCHEDULE } from "@/lib/constants";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

export default function Schedule() {
  if (QISKIT_SCHEDULE.length === 0) {
    return <></>
  }
  return (
    <div className="w-full px-6" id="Schedules">
      <div className="text-4xl font-bold text-left mb-4">{"Schedule (To be updated)"}</div>
      {
        QISKIT_SCHEDULE.map((dateSchedule, idx) => 
          <>
          <div className="text-2xl font-bold">{dateSchedule.date}</div>
          <div className="text-2xl font-bold">{dateSchedule.details}</div>
          <div className="text-base">{dateSchedule.location}</div>
          <Table key={idx}  aria-label="qiskit-schedule" className="bg-inherit rounded-xl pt-4 pb-4">
            <TableHeader>
              <TableColumn className="text-base">{"Activity"}</TableColumn>
              <TableColumn className="text-base">{"Time"}</TableColumn>
            </TableHeader>
            <TableBody>
              {dateSchedule.daySchedule.map((schedule, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-inherit text-base bg-inherit min-w-[200px]">{schedule.time}</TableCell>
                  <TableCell className="text-inherit text-base bg-inherit">{schedule.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </>
        )
      }
    </div>
  );
}

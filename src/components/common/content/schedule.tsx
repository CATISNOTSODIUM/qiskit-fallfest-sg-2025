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
      <div className="text-4xl font-bold text-left mb-4">{"Schedule"}</div>
      {QISKIT_SCHEDULE.map((date, idx) => (
        <div key={idx} className="mb-5">
          <Table removeWrapper  aria-label="qiskit-schedule" className="bg-inherit rounded-xl">
            <TableHeader>
              <TableColumn className="text-xl text-white">{date.date}</TableColumn>
              <TableColumn>{''}</TableColumn>
            </TableHeader>
            <TableBody>
              {date.scheduleHour.map((schedule, idx) => (
                <TableRow key={idx}>
                  <TableCell className="text-inherit text-base bg-inherit">{schedule.time}</TableCell>
                  <TableCell className="text-inherit text-base bg-inherit">{schedule.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  );
}

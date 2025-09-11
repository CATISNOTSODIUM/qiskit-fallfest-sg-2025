import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function Partner() {
  return (
    <div className="w-full px-6">
      <div className="text-3xl font-bold text-left mb-4">{"Partners"}</div>
      <PartnerCard />
    </div>
  );
}

function PartnerCard() {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[800px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src="https://heroui.com/images/album-cover.png"
              width={200}
            />
          </div>

          <div className="flex flex-col col-span-12 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-xl text-foreground/90">
                    {'IBM Qiskit'}
                </h3>
                <p className="text-base text-foreground/80">
                    {'Qiskit is an open-source framework developed by IBM for quantum computing. It allows users to create and run quantum programs on both simulators and real quantum hardware. Qiskit includes tools for building quantum circuits, simulating quantum systems, and developing quantum algorithms.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

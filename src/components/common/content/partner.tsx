import { Card, CardBody } from "@heroui/react";
import Image from "next/image";

export default function Partner() {
  return (
    <div className="w-full px-6" id="Partners">
      <div className="text-4xl font-bold text-left mb-4">{"Partners"}</div>
      <PartnerCard />
    </div>
  );
}

// TODO: Make this function generic
function PartnerCard() {
  return (
    <Card
      isBlurred
      className="border-none max-w-[900px] py-5"
      shadow="none"
    >
      <CardBody>
        <div className="flex flex-col md:flex-row col-span-12 gap-12">
          {/* Image Section */}
          <div className="flex justify-center items-center md:w-1/3 bg-white shadow-lg p-4 rounded-lg">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              src="/images/Qiskit-brand.png"
              width={200}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col md:w-2/3">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-2xl text-foreground/90">
                IBM Qiskit
              </h3>
              <p className="text-base text-foreground/80">
                Qiskit is an open-source framework developed by IBM for quantum
                computing. It allows users to create and run quantum programs on
                both simulators and real quantum hardware. Qiskit includes tools
                for building quantum circuits, simulating quantum systems, and
                developing quantum algorithms.
              </p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

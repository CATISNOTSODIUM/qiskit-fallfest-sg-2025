import { Button, Image } from "@heroui/react";

export default function TitleCard() {
  return (
    <div
      className="min-h-[300px] h-full flex flex-row items-center w-full
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        bg-[size:20px_20px]
    "
    >
      <div className="flex flex-col sm:min-w-[500px] lg:min-w-[600px]">
        <h2
          className="w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r 
                from-foreground to-purple-400 p-10"
        >
          <div className="text-7xl lg:text-9xl">QUANTUM</div>
          <div className="text-6xl lg:text-8xl">{'FALL FEST'}</div>
          <div className="text-5xl lg:text-6xl font-bold">Singapore 2025</div>
          <div className="text-2xl lg:text-3xl pt-5 font-normal text-inherit">
            Celebrating a Century of Quantum
          </div>
          <div className="flex flex-row gap-3">
            <Button
              variant="solid"
              className="rounded-full mt-4 bg-gray-300 text-gray-700"
              size="lg"
              disabled
            >
              Registeration Not Open Yet
            </Button>
            {/**
<Link href={"/faq"}>
            <Button 
                variant="bordered"
                color="secondary"
                className="rounded-full mt-4"
                size="lg"
            >
                FAQs
            </Button>
                 */}
          </div>
        </h2>
      </div>
      <div
        className="hidden md:flex w-full h-full items-start 
            justify-start drop-shadow-2xl"
      >
        <Image
          src="/images/Qiskit-Logo.png"
          alt="qiskit-logo"
          className="w-[300px] lg:w-[500px] mr-12 lg:ml-12 invert hover:scale-[1.1] duration-700 "
        />
      </div>
    </div>
  );
}

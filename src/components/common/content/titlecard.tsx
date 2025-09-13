import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function TitleCard() {
    return <div className="min-h-[300px] flex flex-row items-center w-full
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        bg-[size:20px_20px]
    ">
        <div className="flex flex-col sm:min-w-[500px]">
            <h2 className="w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r 
                from-foreground to-purple-400 p-10">
            <div className="text-7xl">QISKIT</div>
            <div className="text-6xl">FALL FEST</div>
            <div className="text-5xl font-bold">Singapore 2025</div>
            <div className="text-2xl pt-5 font-normal text-inherit">Celebrating a Century of Quantum</div>
            <div className="flex flex-row gap-3">
<Button variant="solid" className="rounded-full mt-4 bg-gray-300 text-gray-700" size="lg" disabled>
                Register Not Open Yet
            </Button>
            <Link href={"/faq"}>
            <Button 
                variant="bordered"
                color="secondary"
                className="rounded-full mt-4"
                size="lg"
            >
                FAQs
            </Button>
            </Link>
            </div>
            </h2>
        </div>
        <div className="hidden md:flex w-full h-full items-center 
            justify-center drop-shadow-2xl">
           <Image
                src="/images/Qiskit-Logo.png"
                alt="qiskit-logo"
                width={300}
                height={300}
                className="invert hover:scale-[1.1] duration-700"
            />
        </div>
    </div>
}

import Image from "next/image";

export default function TitleCard() {
    return <div className="min-h-[300px] pb-12 flex flex-row items-center w-full
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        bg-[size:20px_20px]
    ">
        <div className="flex flex-col sm:min-w-[500px]">
            <h2 className="w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r 
                from-foreground to-purple-400 p-10">
            <div className="text-7xl">QISKIT</div>
            <div className="text-6xl">FALL FEST</div>
            <div className="text-5xl font-bold">Singapore, 2025</div>
            <div className="text-2xl pt-5 font-normal text-inherit">In collaboration with IBM Quantum. </div>
            </h2>
        </div>
        <div className="hidden md:flex w-full h-full items-center 
            justify-center drop-shadow-2xl drop-shadow-purple-700/70">
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

import { ABOUT_THE_EVENT_DESCRIPTION } from "@/lib/constants";

export default function About() {
  return (
    <div className="w-full px-6" id="About">
      <div className="text-4xl font-bold text-left mb-4">
        {"About the event"}
      </div>
      <p className="text-xl text-left leading-relaxed">
        {ABOUT_THE_EVENT_DESCRIPTION}
      </p>
    </div>
  );
}

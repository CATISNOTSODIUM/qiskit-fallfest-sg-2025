import { ABOUT_THE_EVENT_DESCRIPTION } from "@/lib/constants";

export default function About() {
  return (
    <div className="w-full px-6">
      <div className="text-3xl font-bold text-left mb-4">
        {"About the event"}
      </div>
      <p className="text-base text-left leading-relaxed max-w-4xl">
        {ABOUT_THE_EVENT_DESCRIPTION}
      </p>
    </div>
  );
}

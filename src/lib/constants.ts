export const EVENT_TITLE = "QISKIT FALLFEST 2025";

interface NavigationHeader {
    title: string;
    link?: string; // default is `#title`
    subheader?: NavigationHeader[];
}

export const NAVIGATION_HEADERS: NavigationHeader[] = [
    {
        title: "Home"
    },
    {
        title: "Event",
        subheader: [
            { title: "Partners" },
            { title: "Schedules" },
            { title: "Speakers" },
            { title: "Venue" }
        ]
    },
    {
        title: "Team"
    },
    {
        title: "About"
    }
]
import { useEffect } from "react";
import { useNotifications } from "../context/NotificationContext";

export default function useSSEAlerts() {
    const { addNotification } = useNotifications();

    useEffect(() => {

        const cities = [
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
        ];

        const hazards = [
            "Flood Warning",
            "Road Block",
            "Heavy Rain",
            "Accident",
            "Traffic Diversion",
        ];

        const severities = [
            "LOW",
            "MEDIUM",
            "HIGH",
        ];

        const timer = setInterval(() => {

            addNotification({
                city:
                    cities[Math.floor(Math.random() * cities.length)],
                hazard_summary:
                    hazards[Math.floor(Math.random() * hazards.length)],
                severity:
                    severities[
                    Math.floor(Math.random() * severities.length)
                    ],
            });

        }, 8000);

        return () => clearInterval(timer);

    }, []);
}
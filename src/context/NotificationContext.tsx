import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

export interface AlertNotification {
    city: string;
    hazard_summary: string;
    severity: string;
}

interface NotificationContextType {
    notifications: AlertNotification[];
    addNotification: (n: AlertNotification) => void;
}

const NotificationContext =
    createContext<NotificationContextType | null>(null);

export function NotificationProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [notifications, setNotifications] = useState<
        AlertNotification[]
    >([]);

    const addNotification = (notification: AlertNotification) => {
        setNotifications((prev) => [notification, ...prev]);
    };

    return (
        <NotificationContext.Provider
            value={{
                notifications,
                addNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNotifications() {
    const context = useContext(NotificationContext);

    if (!context)
        throw new Error("NotificationProvider missing");

    return context;
}
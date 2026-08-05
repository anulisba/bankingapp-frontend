import useSSEAlerts from "./hooks/useSSEAlerts";
import AppRouter from "./routes/AppRouter";

function App() {
  useSSEAlerts();
  return <AppRouter />;
}

export default App;
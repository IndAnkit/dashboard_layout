import { MantineProvider } from "@mantine/core";
import "./App.css";
import AppRouter from "./appRouter";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;

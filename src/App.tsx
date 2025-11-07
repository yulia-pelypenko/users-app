import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RoutesRender } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <RoutesRender />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

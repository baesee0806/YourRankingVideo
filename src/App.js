import DetailPage from "./page/DetailPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DetailPage />
    </QueryClientProvider>
  );
}

export default App;

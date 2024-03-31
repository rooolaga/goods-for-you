import './styles/index.scss'
import { AppRouterProvider } from './providers/AppRouterProvider'
import { StoreProvider } from "@/app/providers/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <AppRouterProvider />
    </StoreProvider>
  );
}

export default App

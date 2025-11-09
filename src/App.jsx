import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import { AppHeader } from "@/components/header/header-layout";
import ResourceProvider from "@/contexts/ResourceProvider";
import PageRoutes from "@/pages/PageRoutes";

function App() {
  return (
    <ResourceProvider>
      <BrowserRouter>
        <NavSidebar>

          <div className="flex flex-col h-screen flex-1">
            <AppHeader />
            <main className="flex-1 overflow-auto p-6">
              <PageRoutes />
            </main>
          </div>

        </NavSidebar>
      </BrowserRouter>
    </ResourceProvider>
  );
}

export default App;

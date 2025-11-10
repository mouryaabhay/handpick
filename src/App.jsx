import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import AppHeader from "@/components/header/header-layout";
import ResourceProvider from "@/providers/resource-provider";
import PageRoutes from "@/pages/PageRoutes";
import ThemeProvider from "@/providers/theme-provider";

function App() {
  return (
    <ResourceProvider>
      <ThemeProvider>
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
      </ThemeProvider>
    </ResourceProvider>
  );
}

export default App;

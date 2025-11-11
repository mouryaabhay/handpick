import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import AppHeader from "@/components/header/header-layout";
import ResourceProvider from "@/providers/resource-provider";
import PageRoutes from "@/pages/PageRoutes";
import ThemeProvider from "@/providers/theme-provider";
import { ThemedToaster } from "@/components/themes/theme-toaster";

function App() {
  return (
    <ResourceProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavSidebar>
            <main className="flex flex-col h-screen flex-1">
              <AppHeader />
              <ThemedToaster />
              <PageRoutes />
            </main>
          </NavSidebar>
        </BrowserRouter>
      </ThemeProvider>
    </ResourceProvider>
  );
}

export default App;

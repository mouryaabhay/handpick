import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import AppHeader from "@/components/header/header-layout";
import ResourcesProvider from "@/providers/resources-provider";
import PageRoutes from "@/pages/PageRoutes";
import ThemesProvider from "@/providers/themes-provider";
import ThemedToaster from "@/components/other/themed-toaster";
import { BookmarksProvider } from "./providers/bookmarks-provider";

function App() {
  return (
    <ResourcesProvider>
      <ThemesProvider>
        <BookmarksProvider>
          <BrowserRouter>
            <NavSidebar>
              <div className="flex flex-col min-h-screen w-screen">
                <AppHeader />
                <ThemedToaster />
                <main className="flex-1 overflow-y-auto pt-[--header-height]">
                  <PageRoutes />
                </main>
              </div>
            </NavSidebar>
          </BrowserRouter>
        </BookmarksProvider>
      </ThemesProvider>
    </ResourcesProvider>
  );
}

export default App;

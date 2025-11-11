import "./App.css";
import ResourcesProvider from "@/providers/resources-provider";
import BookmarksProvider from "./providers/bookmarks-provider";
import ThemesProvider from "@/providers/themes-provider";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import AppHeader from "@/components/header/header-layout";
import ThemedToaster from "@/components/other/themed-toaster";
import PageRoutes from "@/pages/PageRoutes";

function App() {
  return (
    <ResourcesProvider>
      <BookmarksProvider>
        <ThemesProvider>
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
        </ThemesProvider>
      </BookmarksProvider>
    </ResourcesProvider>
  );
}

export default App;

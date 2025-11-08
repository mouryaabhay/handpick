import { SidebarProvider } from "@/components/ui/sidebar";
import NavSidebarLayout from "./nav-layout";

export default function NavSidebar({ children }) {
  return (
    <SidebarProvider>
      <NavSidebarLayout />
      {children}
    </SidebarProvider>
  );
}

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { DocsTopBar } from "./DocsTopBar";
import { DocsSidebar } from "./DocsSidebar";
import { DocsFooter } from "./DocsFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DocsLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarCollapsed(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DocsTopBar />

      <div className="flex">
        <aside
          className={`sticky top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 ${
            sidebarCollapsed ? "w-0 overflow-hidden" : "w-80"
          }`}
        >
                    {!sidebarCollapsed && (
            <div className="h-full">
              <DocsSidebar />
            </div>
          )}
        </aside>

        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            className={`absolute top-4 z-10 h-8 w-8 p-0 
                        bg-background border shadow-md rounded-full
                        hover:bg-accent hover:text-accent-foreground 
                        focus:ring-2 focus:ring-ring focus:outline-none
                        transition-all duration-300 ease-in-out
                        ${sidebarCollapsed ? "left-0" : "-left-4"}`}
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
            ) : (
              <ChevronLeft className="h-4 w-4 transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
            )}
          </Button>
        </div>

        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? "ml-0" : "ml-4"
          }`}
        >
          <div className="container max-w-4xl py-8">
            <article className="prose dark:prose-invert max-w-none">
              <Outlet />
            </article>
            <DocsFooter />
          </div>
        </main>
      </div>
    </div>
  );
};

import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getFlatNavItems } from "@/config/docs-nav";

export const DocsFooter = () => {
  const location = useLocation();

  const { prevPage, nextPage } = useMemo(() => {
    const flatNavItems = getFlatNavItems();
    const currentPageIndex = flatNavItems.findIndex(
      (item) => item.path === location.pathname
    );

    if (currentPageIndex === -1) {
      return { prevPage: null, nextPage: null };
    }

    return {
      prevPage: currentPageIndex > 0 ? flatNavItems[currentPageIndex - 1] : null,
      nextPage:
        currentPageIndex < flatNavItems.length - 1
          ? flatNavItems[currentPageIndex + 1]
          : null,
    };
  }, [location.pathname]);

  return (
    <footer className="mt-20 border-t pt-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {prevPage ? (
          <Link
            to={prevPage.path}
            aria-label={`Previous: ${prevPage.title}`}
            className="group inline-flex items-center gap-3 rounded-xl border px-5 py-4 text-sm shadow-sm transition-all hover:bg-accent/40 hover:shadow-md hover:border-accent w-full sm:w-auto"
          >
            <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Previous</p>
              <p className="font-medium text-foreground group-hover:text-accent-foreground">
                {prevPage.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="w-full sm:w-auto" />
        )}

        {nextPage && (
          <Link
            to={nextPage.path}
            aria-label={`Next: ${nextPage.title}`}
            className="group inline-flex items-center gap-3 rounded-xl border px-5 py-4 text-sm shadow-sm transition-all hover:bg-accent/40 hover:shadow-md hover:border-accent w-full sm:w-auto"
          >
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Next</p>
              <p className="font-medium text-foreground group-hover:text-accent-foreground">
                {nextPage.title}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        )}
      </div>
    </footer>
  );
};

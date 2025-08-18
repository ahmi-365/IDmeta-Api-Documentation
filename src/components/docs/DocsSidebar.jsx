import React, { useState, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  FileText,
  Code,
  Shield,
  HelpCircle,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/config/docs-nav";
export const DocsSidebar = React.memo(() => {
  const [expandedItems, setExpandedItems] = useState(
    new Set(["General Usage"])
  );
  const location = useLocation();

  const toggleExpanded = useCallback((title) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  }, []);

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const isParentActive = useCallback(
    (children) =>
      children?.some((child) => child.path && isActive(child.path)) ?? false,
    [isActive]
  );

  const memoizedItems = useMemo(() => {
    return sidebarItems.map((item) => (
      <div key={item.title} className="mb-1">
        {/* Parent Item */}
        {item.children ? (
          <button
            onClick={() => toggleExpanded(item.title)}
            className={cn(
              "sidebar-nav-item w-full justify-between",
              isParentActive(item.children) && "active"
            )}
            aria-expanded={expandedItems.has(item.title)}
            aria-controls={`sidebar-${item.title
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
          >
            <div className="flex items-center space-x-3">
              {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
              <span className="truncate">{item.title}</span>
            </div>
            <ChevronRight
              className={cn(
                "h-4 w-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out",
                expandedItems.has(item.title) && "rotate-90"
              )}
            />
          </button>
        ) : (
          <Link
            to={item.path || "#"}
            className={cn(
              "sidebar-nav-item w-full justify-start",
              item.path && isActive(item.path) && "active"
            )}
          >
            <div className="flex items-center space-x-3">
              {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
              <span className="truncate">{item.title}</span>
            </div>
          </Link>
        )}

        {item.children && (
          <div
            className={cn(
              "mt-1 space-y-1 overflow-hidden",
              "transition-[max-height,opacity] duration-500 ease-in-out",
              expandedItems.has(item.title)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            )}
            id={`sidebar-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
          >
            {item.children.map((child) => (
              <Link
                key={child.title}
                to={child.path || "#"}
                className={cn(
                  "sidebar-nav-subitem block",
                  child.path && isActive(child.path) && "active"
                )}
              >
                <span className="truncate">{child.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    ));
  }, [expandedItems, isActive, isParentActive, toggleExpanded]);

  return (
    <nav className="h-full overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
      <div className="px-4 space-y-1">{memoizedItems}</div>
    </nav>
  );
});

DocsSidebar.displayName = "DocsSidebar";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarItems } from "@/config/docs-nav";

export const DocsSidebar = React.memo(() => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const location = useLocation();

  // ✅ active sirf exact page ke liye
  const isActive = useCallback(
    (path) => !!matchPath({ path, end: true }, location.pathname),
    [location.pathname]
  );

  // ✅ toggle: ek branch ke andar multiple open allow karo (parent + children)
  const toggleExpanded = useCallback((title) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title); // close agar already open hai
      } else {
        next.add(title); // isko open karo (aur parents ka state preserve karo)
      }
      return next;
    });
  }, []);

  // ✅ agar child page pe hu to parent bhi auto-expand
  useEffect(() => {
    const expandForActive = (items) => {
      for (const item of items) {
        if (item.path && isActive(item.path)) {
          return [item.title];
        }
        if (item.children) {
          const child = expandForActive(item.children);
          if (child.length) return [item.title, ...child];
        }
      }
      return [];
    };

    const openTitles = expandForActive(sidebarItems);
    if (openTitles.length) {
      setExpandedItems(new Set(openTitles));
    }
  }, [location.pathname, isActive]);

  // recursive render
  const renderItems = useCallback(
    (items, level = 0) =>
      items.map((item) => {
        const hasChildren = !!item.children?.length;
        const expanded = expandedItems.has(item.title);

        return (
          <div key={item.title} className="mb-1">
            {hasChildren ? (
              <button
                onClick={() => toggleExpanded(item.title)}
                className={cn(
                  "sidebar-nav-item w-full justify-between rounded-lg px-3 py-2.5 transition-all duration-200 ease-in-out",
                  "text-slate-700 hover:text-[#3BAEE3] hover:bg-gradient-to-r hover:from-[#3BAEE3]/5 hover:to-[#3BAEE3]/10",
                  "hover:shadow-sm hover:border-l-2 hover:border-[#3BAEE3]/30",
                  "group focus:outline-none focus:ring-2 focus:ring-[#3BAEE3]/20 focus:ring-offset-1",
                  // Active/expanded state
                  expanded && [
                    "bg-gradient-to-r from-[#3BAEE3]/10 to-[#3BAEE3]/5",
                    "text-[#3BAEE3] border-l-2 border-[#3BAEE3]",
                    "shadow-sm"
                  ],
                  // Level-based left padding
                  level === 0 && "font-medium",
                  level > 0 && "text-sm font-normal"
                )}
                style={{ 
                  paddingLeft: `${12 + (level * 20)}px`,
                  marginLeft: level > 0 ? '8px' : '0'
                }}
                aria-expanded={expanded}
                aria-controls={`sidebar-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <item.icon className={cn(
                      "h-4 w-4 flex-shrink-0 transition-colors duration-200",
                      "text-slate-500 group-hover:text-[#3BAEE3]",
                      expanded && "text-[#3BAEE3]"
                    )} />
                  )}
                  <span className="truncate font-medium">{item.title}</span>
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transform transition-all duration-300 ease-in-out",
                    "text-slate-400 group-hover:text-[#3BAEE3]",
                    expanded && "rotate-90 text-[#3BAEE3]"
                  )}
                />
              </button>
            ) : (
              <Link
                to={item.path || "#"}
                className={cn(
                  "sidebar-nav-item w-full justify-start rounded-lg px-3 py-2.5 transition-all duration-200 ease-in-out",
                  "text-slate-700 hover:text-[#3BAEE3] hover:bg-gradient-to-r hover:from-[#3BAEE3]/5 hover:to-[#3BAEE3]/10",
                  "hover:shadow-sm hover:border-l-2 hover:border-[#3BAEE3]/30",
                  "group focus:outline-none focus:ring-2 focus:ring-[#3BAEE3]/20 focus:ring-offset-1",
                  // Active state
                  item.path && isActive(item.path) && [
                    "bg-gradient-to-r from-[#3BAEE3]/15 to-[#3BAEE3]/8",
                    "text-[#3BAEE3] border-l-3 border-[#3BAEE3]",
                    "shadow-md font-medium"
                  ],
                  // Level-based styling
                  level === 0 && "font-medium",
                  level > 0 && "text-sm font-normal"
                )}
                style={{ 
                  paddingLeft: `${12 + (level * 20)}px`,
                  marginLeft: level > 0 ? '8px' : '0'
                }}
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <item.icon className={cn(
                      "h-4 w-4 flex-shrink-0 transition-colors duration-200",
                      "text-slate-500 group-hover:text-[#3BAEE3]",
                      item.path && isActive(item.path) && "text-[#3BAEE3]"
                    )} />
                  )}
                  <span className="truncate">{item.title}</span>
                </div>
              </Link>
            )}

            {hasChildren && (
              <div
                className={cn(
                  "mt-1 space-y-1 overflow-hidden",
                  "transition-[max-height,opacity] duration-500 ease-in-out",
                  expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
                id={`sidebar-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="relative">
                  {/* Subtle connection line for nested items */}
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200/60" />
                  {renderItems(item.children, level + 1)}
                </div>
              </div>
            )}
          </div>
        );
      }),
    [expandedItems, isActive, toggleExpanded]
  );

  const memoizedItems = useMemo(() => renderItems(sidebarItems), [renderItems]);

  return (
  <nav className="h-full overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent hover:scrollbar-thumb-slate-400">
    <div className="px-4 space-y-2">
      {/* ✅ Removed the top line */}
      <div className="space-y-1">
        {memoizedItems}
      </div>
    </div>
  </nav>
);

});

DocsSidebar.displayName = "DocsSidebar";
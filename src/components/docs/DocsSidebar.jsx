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
                className="sidebar-nav-item w-full justify-between"
                style={{ paddingLeft: `${level * 16}px` }} // indent by level
                aria-expanded={expanded}
                aria-controls={`sidebar-${item.title.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="flex items-center space-x-3">
                  {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
                  <span className="truncate">{item.title}</span>
                </div>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 flex-shrink-0 transform transition-transform duration-300 ease-in-out",
                    expanded && "rotate-90"
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
                style={{ paddingLeft: `${level * 16}px` }} // indent by level
              >
                <div className="flex items-center space-x-3">
                  {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
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
                {renderItems(item.children, level + 1)}
              </div>
            )}
          </div>
        );
      }),
    [expandedItems, isActive, toggleExpanded]
  );

  const memoizedItems = useMemo(() => renderItems(sidebarItems), [renderItems]);

  return (
    <nav className="h-full overflow-y-auto py-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
      <div className="px-4 space-y-1">{memoizedItems}</div>
    </nav>
  );
});

DocsSidebar.displayName = "DocsSidebar";

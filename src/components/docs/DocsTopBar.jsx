import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchResults } from "./SearchResults";
import { useSearch } from "@/hooks/useSearch";
import { cn } from "@/lib/utils";

export const DocsTopBar = () => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    setIsSearching
  } = useSearch();

  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(query.length > 2);
  };

  const handleFocus = () => {
    setIsSearchActive(true);
    if (searchQuery.length > 2) setIsSearching(true);
  };

  const handleBlur = () => {
    setTimeout(() => setIsSearchActive(false), 150);
  };

  const closeSearch = () => {
    setIsSearching(false);
    if (inputRef.current) inputRef.current.blur();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isSearching) closeSearch();
      if (e.key === "/" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (inputRef.current) inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearching]);

  // Only hide logo/button on mobile when search is active or has input
  const hideOnMobile = isSearchActive || searchQuery.length > 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6 gap-4">

        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/favicon-32x32.png"
            alt="Logo"
            className="h-8 w-8 rounded object-cover"
          />
          <span className="font-semibold text-lg hidden sm:inline-block">
            IDmeta Docs
          </span>
        </Link>

        {/* Search Bar (Center / Flexible) */}
        <div className="flex-1 relative max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search guides, SDKs, and examples... (Ctrl+/)"
              className={cn(
                "pl-10 pr-4 w-full",
                "rounded-full border border-border",
                "bg-background/70 backdrop-blur-sm",
                "focus:ring-2 focus:ring-primary focus:border-primary",
                "transition-colors duration-200"
              )}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {isSearching && (
            <div className="absolute mt-2 w-full rounded-lg border border-border bg-popover shadow-lg z-50">
              <SearchResults
                query={searchQuery}
                results={searchResults}
                onClose={closeSearch}
              />
            </div>
          )}
        </div>

        
      </div>
    </header>

  );
};

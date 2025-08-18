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
        <div className={cn(
          "items-center space-x-4 md:flex",
          hideOnMobile ? "hidden sm:flex" : "flex"
        )}>
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
        </div>

        {/* Search Bar */}
        <div className={cn(
          "flex-1 relative transition-all duration-300",
          isSearchActive ? "mr-0" : "md:mx-8"
        )}>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search documentation... (Ctrl+/)"
              className="pl-10 pr-4 transition-all duration-200 w-full"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {isSearching && (
            <SearchResults 
              query={searchQuery} 
              results={searchResults}
              onClose={closeSearch}
            />
          )}
        </div>

        {/* Get Started Button */}
        <div className={cn(
          "items-center space-x-2 md:flex",
          hideOnMobile ? "hidden sm:flex" : "flex"
        )}>
          <Button 
            variant="outline" 
            size="sm" 
            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

import { Link } from "react-router-dom";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { SearchResult } from "@/hooks/useSearch";


export const SearchResults = ({ query, results, onClose }) => {
const highlightText = (text, highlight) => {
  if (!highlight) return text;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <mark key={index} className="search-highlight">
        {part}
      </mark>
    ) : (
      part
    )
  );
};


  return (
    <Card className="absolute top-full left-0 right-0 mt-2 p-4 shadow-lg border bg-popover z-50 max-h-96 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
      {results.length > 0 ? (
        <div className="space-y-3">
          <div className="text-sm text-muted-foreground">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
          </div>
          
          {results.map((result, index) => (
            <div key={`${result.path}-${index}`} className="border-b border-border last:border-b-0 pb-3 last:pb-0 hover:bg-accent/50 rounded-lg p-3 -m-3 transition-colors duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{result.section}</span>
                  </div>
                  
                  <h4 className="font-medium text-sm mb-1">
                    {highlightText(result.title, query)}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {highlightText(result.excerpt, query)}
                  </p>
                  
                  <Link to={result.path} onClick={onClose}>
                    <Button variant="outline" size="sm" className="h-7 text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View full content
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6">
          <FileText className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground mb-1">
            No results found for "{query}"
          </p>
          <p className="text-xs text-muted-foreground">
            Try searching with different keywords or check the spelling
          </p>
        </div>
      )}
      
      <div className="mt-4 pt-3 border-t border-border">
        <Button variant="ghost" size="sm" onClick={onClose} className="w-full text-xs hover:bg-accent">
          Press ESC to close
        </Button>
      </div>
    </Card>
  );
};
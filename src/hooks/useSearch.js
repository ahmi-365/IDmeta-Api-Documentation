import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";


const allContent = [
  {
    title: "Get started with your trial account",
    path: "/docs/general/get-started",
    excerpt:
      "Learn how to set up your trial account and make your first API call. Your trial account gives you access to all API features with some usage limitations.",
    section: "General Usage",
  },
  {
    title: "A Beginner's Guide to the Command Line",
    path: "/docs/general/command-line",
    excerpt:
      "Master essential command line tools and techniques for effective API development and testing. Learn cURL, navigation, and API testing commands.",
    section: "General Usage",
  },
  {
    title: "Set up your local development environment",
    path: "/docs/general/development-environment",
    excerpt:
      "Configure your development environment for optimal API integration and testing. Install SDKs, set up environment variables, and test your setup.",
    section: "General Usage",
  },
  {
    title: "Idmeta APIs",
    path: "/docs/apis",
    excerpt:
      "Comprehensive guide to Idmeta's REST APIs, SDKs, and integration patterns. Learn about Messaging, Voice, Video, and Chat APIs with authentication and examples.",
    section: "APIs",
  },
  {
    title: "Webhooks",
    path: "/docs/webhooks",
    excerpt:
      "Configure webhooks to receive real-time notifications about events in your Idmeta account. Learn webhook security, setup, and best practices.",
    section: "Webhooks",
  },
  {
    title: "Preventing Fraud",
    path: "/docs/fraud-prevention",
    excerpt:
      "Best practices and security measures to protect your applications and users from fraudulent activities. Learn about authentication, rate limiting, and monitoring.",
    section: "Security",
  },
  {
    title: "Troubleshooting and Security",
    path: "/docs/troubleshooting",
    excerpt:
      "Common issues, debugging techniques, and security best practices for API integration. Learn error handling, performance optimization, and monitoring.",
    section: "Support",
  },
  {
    title: "Idmeta Products",
    path: "/docs/products",
    excerpt:
      "Comprehensive API documentation, quickstarts, SDKs, and tutorials for all Idmeta products including Messaging, Voice, Video, Chat, Verify, and more.",
    section: "Products",
  },
  // Additional searchable terms
  {
    title: "SMS Messaging",
    path: "/docs/apis",
    excerpt:
      "Send and receive SMS messages programmatically with the Messaging API. Learn about message status, delivery reports, and best practices.",
    section: "APIs",
  },
  {
    title: "Voice Calls",
    path: "/docs/apis",
    excerpt:
      "Make and receive phone calls with advanced programmable features including call recording, conferencing, and TwiML.",
    section: "APIs",
  },
  {
    title: "Authentication Setup",
    path: "/docs/general/get-started",
    excerpt:
      "Set up authentication using Account SID and Auth Token. Learn about API security and credential management.",
    section: "General Usage",
  },
  {
    title: "Rate Limits",
    path: "/docs/troubleshooting",
    excerpt:
      "API requests are limited to prevent abuse. Learn how to handle rate limiting and implement proper retry logic.",
    section: "Support",
  },
];

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  // Debounced search results
  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    return allContent
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.excerpt.toLowerCase().includes(query) ||
          item.section.toLowerCase().includes(query)
      )
      .sort((a, b) => {
        // Prioritize title matches
        const aTitle = a.title.toLowerCase().includes(query);
        const bTitle = b.title.toLowerCase().includes(query);
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;

        // Then prioritize section matches
        const aSection = a.section.toLowerCase().includes(query);
        const bSection = b.section.toLowerCase().includes(query);
        if (aSection && !bSection) return -1;
        if (!aSection && bSection) return 1;

        return 0;
      })
      .slice(0, 8); // Limit to 8 results for performance
  }, [searchQuery]);

  // Clear search when navigating
  useEffect(() => {
    setSearchQuery("");
    setIsSearching(false);
  }, [location.pathname]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    setIsSearching,
  };
};

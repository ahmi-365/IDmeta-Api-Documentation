import {
  FileText,
  Code,
  Shield,
  HelpCircle,
  Layers,
} from "lucide-react";
export const getFlatNavItems = (items = sidebarItems) => {
  const flatItems = [];
  items.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        if (child.path) {
          flatItems.push({ title: child.title, path: child.path });
        }
      });
    } else if (item.path) {
      flatItems.push({ title: item.title, path: item.path });
    }
  });
  return flatItems;
};

export const sidebarItems = [
  {
    title: "General Usage",
    icon: FileText,
    children: [
      {
        title: "Trial account",
        path: "/docs/general/get-started",
      },
      {
        title: "Guide to the Command Line",
        path: "/docs/general/command-line",
      },
      {
        title: "Local development environment",
        path: "/docs/general/development-environment",
      },
    ],
  },
  {
    title: "Idmeta APIs",
    path: "/docs/apis",
    icon: Code,
  },
  {
    title: "Webhooks",
    path: "/docs/webhooks",
    icon: Layers,
  },
  {
    title: "Preventing Fraud",
    path: "/docs/fraud-prevention",
    icon: Shield,
  },
  {
    title: "Troubleshooting and Security",
    path: "/docs/troubleshooting",
    icon: HelpCircle,
  },
  {
    title: "Idmeta Products",
    path: "/docs/products",
    icon: Layers,
  },
];

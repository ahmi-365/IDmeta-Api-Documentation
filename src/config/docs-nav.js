import {
  FileText,
  Code,
  Shield,
  HelpCircle,
  Layers,
  Smartphone,
  Workflow,
  ShieldCheck,
  Phone,
  Globe,
  Package,
  Code2,
  Compass,
  Atom
} from "lucide-react";

export const getFlatNavItems = (items = sidebarItems) => {
  const flatItems = [];

  const flatten = (arr) => {
    arr.forEach((item) => {
      if (item.path) {
        flatItems.push({ title: item.title, path: item.path });
      }
      if (item.children) {
        flatten(item.children); // recursive
      }
    });
  };

  flatten(items);
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
    title: "Trust Flows",
    path: "/docs/trust-flows",
    icon: Workflow,
  },
  {
    title: "Trust Validation",
    path: "/docs/Trustvalidation",
    icon: ShieldCheck,
  },
  {
    title: "Idmeta APIs",
    path: "/docs/apis",
    icon: Code,
  },

  // 🔽 DROPDOWN SAME AS "General Usage"
  {
    title: "SDK's",
    icon: Package, // parent 📱
    children: [
      {
        title: "Mobile SDK",
        icon: Smartphone, // 📞
        children: [
          {
    title: "Flutter",
    path: "/docs/sdk/mobile/flutter",
    icon: Code2,
  },
  {
    title: "Ionic",
    path: "/docs/sdk/mobile/ionic",
    icon: Compass,
  },
  {
    title: "React Native",
    path: "/docs/sdk/mobile/react-native",
    icon: Atom,
  },
        ],
      },
      {
        title: "Web SDK",
        path: "/docs/sdk/web",
        icon: Globe, // 🌍
      },
    ],
  },
  {
    title: "Webhooks",
    path: "/docs/webhooks",
    icon: Layers,
  },
];

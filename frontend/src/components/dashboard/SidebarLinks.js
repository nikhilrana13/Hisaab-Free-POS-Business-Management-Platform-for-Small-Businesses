import { ChartColumn, Home, LayoutDashboard, Menu, Package2, ReceiptIndianRupee, Settings } from "lucide-react";
import { GrAnalytics } from "react-icons/gr";
import { MdAnalytics, MdOutlineInventory2, MdOutlineLocalGroceryStore, MdOutlineReceiptLong } from "react-icons/md";

export const SidebarLinks = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Billing",
        href:"/dashboard/billing",
        icon: MdOutlineReceiptLong ,
    },
    {
        label: "Products",
        href:"/dashboard/products",
        icon: MdOutlineInventory2 ,
    },
    {
        label: "Orders",
        href:"/dashboard/orders",
        icon:  MdOutlineLocalGroceryStore,
    },
     {
        label: "Analytics",
        href:"/dashboard/analytics",
        icon:MdAnalytics,
    },
    {
        label: "Settings",
        href:"/dashboard/settings",
        icon:  Settings,
    },
]
export const BottomNavbarLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    icon: Package2,
  },
  {
    label: "Billing",
    href: "/dashboard/billing",
    icon: ReceiptIndianRupee,
    primary: true,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: ChartColumn,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
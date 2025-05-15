import {
  FaHome,
  FaClipboard,
  FaUsers,
  FaBox, // Use FaBox if FaPackage is unavailable
  FaChartPie,
  FaSignOutAlt
} from "react-icons/fa";

export const SidebarData = [
  {
    icon: FaHome,
    heading: "Dashboard",
  },
  {
    icon: FaClipboard,
    heading: "Orders",
  },
  {
    icon: FaUsers,
    heading: "Customers",
  },
  {
    icon: FaBox, // Updated to FaBox
    heading: "Products",
  },
  {
    icon: FaChartPie,
    heading: "Analytics",
  },
  {
    icon: FaSignOutAlt,
    heading: "Logout",
  },
];

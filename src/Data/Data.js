import {
  FaHome,
  FaClipboard,
  FaUsers,
  FaBox, // Use FaBox if FaPackage is unavailable
  FaChartPie,
  FaSignOutAlt,
  FaDollarSign,
  FaMoneyBill,
  FaCoins,
} from "react-icons/fa";

import img1 from '../assets/img1.png';
import img2 from '../assets/IMG2.png';
import img3 from '../assets/img3.png';

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

export const CardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(135deg, #fce4ec 0%,rgb(248, 139, 186) 100%)", // pastel pink to dark pink
      boxShadow: "0px 10px 20px 0px #f06292",
    },
    barValue: 70,
    value: "29,960",
    png: FaDollarSign,
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", // light peach to coral
      boxShadow: "0px 10px 20px 0px #f3c097",
    },
    barValue: 80,
    value: "14,270",
    png: FaMoneyBill,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)", // lilac to soft violet/blue
      boxShadow: "0px 10px 20px 0px #cabcf0",
    },
    barValue: 60,
    value: "4,270",
    png: FaCoins,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// UPDATE CARD DATA

export const UpdatesData =[
   {
    img: img1,
    name: 'Andrew Thomas',
    noti: 'has ordered Apple Smart Watch with 2500mAh battery.',
    time: '25 seconds ago',
  },
  {
    img: img2,
    name: 'Jessica Lee',
    noti: 'has placed an order for Bose Wireless Headphones.',
    time: '2 hours ago',
  },
  {
    img: img3,
    name: 'Michael Smith',
    noti: 'has purchased a Dell Inspiron Laptop (16GB RAM).',
    time: '10 minutes ago',
  },
];

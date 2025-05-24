import { AiOutlineHome } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineAnalytics, MdAnalytics } from 'react-icons/md';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { FaUserPlus } from 'react-icons/fa';
  
export const sidebarItems = [
  {
    label: "Dashboard",
    icon: AiOutlineHome,
    path: "/dashboard",
  },
  {
    label: "My Events",
    icon: BsCalendarEvent,
    children: [
      {
        label: "All Events",
        icon: MdOutlineAnalytics,
        path: "/events",
      },
      {
        label: "Create Event",
        icon: FaUserPlus,
        path: "/events/create",
      },
    ],
  },
  {
    label: "Participants",
    icon: FiUsers,
    children: [
      {
        label: "View Participants",
        icon: MdOutlineAnalytics,
        path: "/participants",
      },
      {
        label: "Add Participant",
        icon: FaUserPlus,
        path: "/participants/add",
      },
    ],
  },
  {
    label: "Reports & Analytics",
    icon: MdOutlineAnalytics,
    path: "/reports",
  },
  {
    label: "Notifications",
    icon: IoIosNotificationsOutline,
    path: "/notifications",
  },
  {
    label: "Profile",
    icon: CgProfile,
    path: "/profile",
  },
];
  
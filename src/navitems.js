import {
  ImHome,
  ImUsers,
  ImUser,
  ImLibrary,
  ImCoinDollar,
  ImFolderUpload,
  ImMail2,
  ImAppleinc,
  ImCogs,
} from "react-icons/im";


export const navitems = [
  { title: "Dashboard", link: "/dashboard", icon: <ImHome size={25} /> },
  { title: "Staff Info", link: "/dashboard/staff",icon: <ImUser size={25} /> },
  { title: "Student", link: "/dashboard/student", icon: <ImUsers size={25} /> },
  { title: "Course", link: "/dashboard/course", icon: <ImLibrary size={25} /> },
  { title: "Free", link: "/dashboard/free", icon: <ImCoinDollar size={25} /> },
  { title: "Results", link: "/dashboard/result", icon: <ImFolderUpload size={25} /> },
  { title: "Contact Us", link: "/dashboard/contact", icon: <ImMail2 size={25} /> },
  { title: "About Us", link: "/dashboard/about", icon: <ImAppleinc size={25} /> },
  { title: "Settings", link: "/dashboard/settings", icon: <ImCogs size={25} /> },
];
 
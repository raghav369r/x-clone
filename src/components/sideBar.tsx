import { Key, ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { GoHash } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TbMessage2 } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link";

type Props = {};

interface listItem {
  title: string;
  logo: ReactNode;
  navigate: string;
}
const list: listItem[] = [
  { navigate: "/", title: "Home", logo: <FaHome /> },
  { navigate: "Explore", title: "Explore", logo: <GoHash /> },
  {
    navigate: "Notifications",
    title: "Notifications",
    logo: <IoNotificationsOutline />,
  },
  { navigate: "Messages", title: "Messages", logo: <TbMessage2 /> },
  { navigate: "Bookmarks", title: "Bookmarks", logo: <FaRegBookmark /> },
  { navigate: "Profile", title: "Profile", logo: <CgProfile /> },
  { navigate: "More", title: "More", logo: <CgMoreO /> },
];
const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      {list.map((ele: listItem, ind: Key) => (
        <Link
          href={ele.navigate}
          key={ind}
          className="flex items-center gap-3 font-semibold text-xl hover:bg-gray-800 transition-all py-2 px-4 w-fit cursor-pointer rounded-lg"
        >
          {ele.logo}
          <span>{ele.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;

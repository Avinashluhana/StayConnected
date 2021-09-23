import React from "react";
import SidebarRow from "./SidebarRow";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import "./Slidebar.css";
const Sidebar = () => {
  return (
    <div className="slidebar">
      <SidebarRow
        src="https://scontent.frba5-1.fna.fbcdn.net/v/t1.6435-9/154773974_3749015665195387_3350529023391850292_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_ohc=3ObcL2svBQ0AX_B5lU3&_nc_ht=scontent.frba5-1.fna&oh=54d82d10325a9c6e7e4bc119d0d0c8d3&oe=616FC5F4"
        title="Avinash kumar"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
    </div>
  );
};

export default Sidebar;

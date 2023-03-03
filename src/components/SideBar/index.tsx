import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'
import SidebarItem from './SideBarItem'
import { Container, Content, Me } from './styles'; 
import Isa from '../../assets/isa.jpg'; 
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@rsuite/icons/Close';


const Sidebar = ({ active }: any) => {
    const navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    // sidebar={active}
    <Container>
      <CloseIcon onClick={closeSidebar} />  
      <Content>
        <Me src={Isa} />
        <SidebarItem Icon={FaHome} onClick={navigate('/home')} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="About me" />
        <SidebarItem Icon={FaEnvelope} Text="Contact" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Work journey" />
        <SidebarItem Icon={FaRegFileAlt} Text="About this page" />
        <SidebarItem Icon={FaRegFileAlt} Text="Certifications" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar
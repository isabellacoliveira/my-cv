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


const Sidebar = ({ active }: any) => {
    const navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    // sidebar={active}
    <Container>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Me src={Isa} />
        <SidebarItem Icon={FaHome} onClick={navigate('/home')} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Statistics" />
        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar
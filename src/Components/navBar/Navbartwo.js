import { React} from 'react';
import { FaBars } from 'react-icons/fa';
// import { Button } from '../Button/Buttonelement';
import { Nav, Navcontainer, Navlogo, MobileIcon, Navitem, Navmenu, NavRoute } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll'



const Navbar = ({ toggle }) => {
    // const [scrollNav, setScrollNav] = useState(false)

    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScrollNav(true);
    //     } else {
    //         setScrollNav(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav)

    // }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <Nav>
                <Navcontainer>
                    <Navlogo to='/' onClick={toggleHome}>
                        IPO
                    </Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <Navmenu>
                        <Navitem>
                            <NavRoute to ="/"> Home </NavRoute>
                        </Navitem>
                        <Navitem>
                            <NavRoute to="/portfolio"> Portfolio </NavRoute>
                        </Navitem>
                        <Navitem   >
                            {/* <button type="button" className="button" onClick={() => setShowModal(o => !o)}>Get An Estimate </button> */}
                            {/* <Estimateform showModal={showModal} setShowModal={setShowModal}/> */}
                            <NavRoute to="/estimate"> Get An Estimate </NavRoute>

                        </Navitem>



                    </Navmenu>
                </Navcontainer>
            </Nav>
        </>
    )
}

export default Navbar


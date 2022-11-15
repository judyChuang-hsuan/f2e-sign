import Logo from '@assets/logo.svg'
import '@components/Navbar/Navbar.less'
import { Link } from 'react-router-dom'
const Navbar = () =>{
    return(
        <nav>
                    <div className="logo">
                    <img src={Logo} alt="logo"/>
                    </div>
                    <Link to="/history"><button className="navBtn">歷史文件</button></Link>
                </nav>
    )
}

export default Navbar
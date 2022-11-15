import './homepage.less'
import Logo from '@assets/logo.svg'
import Icon from '@assets/icon.svg'
import IconSign from '@assets/sign.svg'
import { Link } from 'react-router-dom'
import Navbar from '@components/Navbar/Navbar'
const home = [
    {
        id:1,
        title:'簽署文件',
        icon:Icon,
        link:'/sign'
    },
    {
        id:2,
        title:'建立簽名檔',
        icon:IconSign,
        link:'/sign'
    }
]
const HomePage = () =>{
    return(
        <main className="homepage">
            <Navbar/>
                <div className="cardSection">
                    {home.map((card)=>(
                        <Card key={card.id} {...card}/>
                    ))}
                </div>
        </main>
    )
}

const Card= props =>{
    const {title,icon,link} = props
    return(
        <Link to={link}> 
        <div className="card">
            <div className="iconSection">
            <img src={icon} alt="title"/>
            </div>
            <h5>{title}</h5>  
        </div>
        </Link>
    )
}

export default HomePage
import Header  from '../header/Header'
import './Home.css'
import profile from '../../../assets/profile-img.jpg'

const Home = (props) => {
    return (
        <div className="home">
            <Header appData={props.appData} className="header"/>
            <div className="content">
                <div>
                    <h1 className='text-title'>{props.appData.getString('title')}</h1>
                    <h1 className='text-maintitle'>Mateus Rosario</h1>
                </div>
            </div>
            <div className="bottom">
                    <img className="profile-image" src={profile} alt="Profile"/>
                    <h2 className='text-profile'>{props.appData.getString('profile')}</h2>
            </div>
        </div>
    )
}

export default Home
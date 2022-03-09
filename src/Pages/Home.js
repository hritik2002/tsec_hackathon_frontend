import HomeIcon from '../Assets/HomeIcon.svg'
import '../Assets/Home.css'

const Home = () => {
    return(
        <>
            <img src={HomeIcon} className='homePic' alt='homeImg'/>
            <div className="jumbotron intro float-right info">
                <h1 className="display-3 fw-bolder">Project Name</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae dui ultricies, gravida sem sit amet,<br/>semper eros.Sed eu sagittis est. Morbi in elit leo. Nunc et quam molestie, accumsan tellus in, lobortis sap</p>        
            </div>
        </>
    );
};

export default Home;
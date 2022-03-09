import '../Assets/UserProfile.css'

const UserProfile = () => {
    return(
        <>
            <div className='card profile'>
                <h3 className='card-header'>UserName</h3>
                <div className='card-body'>
                    <p>+91 8391827391</p>
                    <p>Location</p>
                    <hr/>
                    <p className='card-title'>Education</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        vitae dui ultricies, gravida sem sit amet
                    </p>
                    <p className='card-title'>Skills</p>
                    <ol>
                        <li>Lorem ipsum dolor</li>
                        <li>consectetur adipiscing</li>
                        <li>vitae dui</li>
                    </ol>
                    <p className='card-title'>Experience</p>
                    <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        vitae dui ultricies, gravida sem sit amet
                    </p>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
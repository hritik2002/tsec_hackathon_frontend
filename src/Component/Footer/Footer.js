import '../../Assets/Footer.css';

const Footer = () => {
    return(
        <>
            <footer className="page-footer footer black">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Hritik</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Shreesh</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Vaibhavi</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Varun</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
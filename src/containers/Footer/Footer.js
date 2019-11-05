import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer container">
                <p className="copyrights">&copy; Kuba 2019</p>
            </div>
        )
    }
}

export default Footer;

import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import './Footer.css';

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <p>&copy; Kuba</p>
                <div>
                    <NavBar />
                </div>
            </div>
        )
    }
}

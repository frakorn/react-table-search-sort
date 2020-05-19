import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container text-center text-white">
                <div className="row pt-5">
                    <div className="col-lg-8 mx-auto">
                        <h1 className="display-4">Startup Explorer Widget <FontAwesomeIcon icon={faAddressCard} /></h1>
                        <p className="lead mb-0">Filter and sort organizations</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

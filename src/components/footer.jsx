import React, { Component } from 'react';



class Footer extends Component {
    render() { 
        return (
            <>
                <footer className="px-3 mt-5 w-100 d-flex bg-black flex-wrap justify-content-between align-items-center py-5 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
                        Web A
                    </a>
                    <span className="text-white">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-white" href="https://www.google.com">Google</a></li>
                    <li className="ms-3"><a className="text-white" href="https://www.wikipedia.com">Wikipedia</a></li>
                    <li className="ms-3"><a className="text-white" href="https://www.dontvisit.com">Don't visit</a></li>
                    </ul>
                </footer>
            </>
        );
    }
}
 
export default Footer;
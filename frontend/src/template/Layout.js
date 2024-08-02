import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div p-3 mb-2 bg-dark text-dark>
            <header>
                <NavBar />
            </header>
            <div className="container-fluid">
                <div className="row">
                    <aside className="col-md-3">
                        <SideBar />
                    </aside>
                    <main style={{ height: "100vh" }} className="col-md-9">
                        {children}
                    </main>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;
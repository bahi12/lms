import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="container-fluid">
            <header className="p-3 mb-3" style={{ width: "100%" }}>
                <NavBar />
            </header>
            <div className="row mb-5">
                <div className="col">
                    <div className="bg-primary text-white p-3 rounded">
                        <h1 className="display-4">HelB</h1>
                        <p className="lead">Slogan</p>
                        <p className="lead">Welcome to HelB, the ultimate platform for learning management!</p>
                        <p className="lead">Unlock your potential with our comprehensive courses and interactive learning materials.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <main className="col">{children}</main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;

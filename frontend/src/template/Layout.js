import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="bg-secondary container-fluid">
            <header className='p-3 mb-3'>
                <NavBar />
            </header>
            <div className="row">
                <aside className="col-md-2 bg-info">
                    <SideBar />
                </aside>
                <main className="col-md-10 ">
                    {children}
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;

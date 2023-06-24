import { useState } from "react";
import links from "../../utils/links";

interface NavbarProps {
    page: string
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
    const [currPage, setCurrPage] = useState(page)
    const handleRedirect = (e: any) => {
        const temp = e.target.innerText.toLowerCase()
        setCurrPage(temp)
    }

    return (
        < header className="header rs-nav header-transparent" >
            {/* Header Top ====  */}
            <div className="sticky-header navbar-expand-lg">
                <div className="menu-bar clearfix">
                    <div className="container clearfix">
                        {/*  Header Logo ====  */}
                        <div className="menu-logo">
                            <a href="/" rel="noopener" aria-label="acm logo"><img src="/assets/images/2.png" alt="" /></a>
                        </div>
                        {/*  Mobile Nav Button ====  */}
                        <button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse"
                            data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        {/*  Author Nav ====  */}
                        <div className="secondary-menu">
                            <div className="secondary-inner">
                                <ul>
                                    <li>
                                        <a href={links.instagram} target="_blank" aria-label="instagram" rel="noopener"
                                            className="btn-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href={links.linkedIn} target="_blank" aria-label="linkedin"
                                            rel="noopener" className="btn-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a rel="noopener" href={links.github} target="_blank" aria-label="github"
                                            className="btn-link"><i className="fa fa-github"></i></a>
                                    </li>
                                    <li>
                                        <a href={links.twitter} target="_blank" aria-label="Twitter" rel="noopener"
                                            className="btn-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href={links.youtube} aria-label="youtube"
                                            rel="noopener" target="_blank" className="btn-link"><i className="fa fa-youtube-play"></i></a>
                                    </li>
                                    <li>
                                        <a href={links.facebook} rel="noopener" aria-label="facebook" target="_blank"
                                            className="btn-link"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    {/* Search Button ====  */}
                                    {/* <li className="search-btn"><button id="quik-search-btn" type="button"
                          className="btn-link"><i className="fa fa-search"></i></button></li>  */}
                                </ul>
                            </div>
                        </div>
                        {/*  Search Box ====  */}
                        {/* <div className="nav-search-bar">
                            <form action="#">
                                <input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
                                <span><i className="ti-search"></i></span>
                            </form>
                            <span id="search-remove"><i className="ti-close"></i></span>
                        </div> */}
                        {/* Navigation Menu ====  */}
                        <div className="menu-links navbar-collapse collapse justify-content-start" id="menuDropdown">
                            <div className="menu-logo">
                                <a href="/" aria-label="home page" rel="noopner"><img src="/assets/images/1.png" alt="" /></a>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className={currPage === "home" ? "active" : undefined}><a href="/" onClick={handleRedirect}>Home</a></li>
                                <li className={currPage === "team" ? "active" : undefined}><a href="/team/2022" onClick={handleRedirect}>Team</a></li>
                                <li className={currPage === "gallery" ? "active" : undefined}><a href="/gallery" onClick={handleRedirect}>Gallery</a></li>
                                <li className={currPage === "courses" ? "active" : undefined}><a href="/courses" onClick={handleRedirect}>Courses</a></li>
                                <li className={currPage === "reports" ? "active" : undefined}><a href="/reports" onClick={handleRedirect}>Reports</a></li>
                                <li className={currPage === "events" ? "active" : undefined}><a href="/events" onClick={handleRedirect}>Events</a></li>

                                <li><a href="#">More<i className="fa fa-angle-down" /></a>
                                    <ul className="sub-menu">
                                        <li><a href="/e-xhibition">E-xhibition</a></li>
                                        <li><a href="/open-source-submit">Open-Source Projects</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/*  Navigation Menu END ====  */}
                    </div>
                </div>
            </div>
            {/*  Header Top END ====  */}
        </header >
    )
}

export default Navbar;
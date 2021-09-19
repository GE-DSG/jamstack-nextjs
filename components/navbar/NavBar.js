// components/navbar/NavBar.js

import Link from 'next/link'

const NavBar = () => (
  <nav id="block-ge-unified-main-menu" className="contextual-region navbar navbar-dark navbar-expand-lg ge-menu-main bg-transparent text-white px-3 px-lg-4" data-block-plugin-id="system_menu_block:main">
    <div className="container-fluid">
      <Link href="/">
        <a className="navbar-brand text-white">
          <img className="d-inline-block img-fluid" alt="General Electric" title="General Electric Logo" src="/logo.svg" />
        </a>
      </Link>
      <button className="navbar-toggler ml-auto rounded-0 collapsed" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav d-lg-none ge-nav-icons-mobile">
        <li className="nav-item icon d-none">
          <a href="https://www.ge.com/directory" className="nav-link px-3 text-white" id="globe-icon">
            <i className="ficon-globe"><span className="hidden">Globe</span></i>
          </a>
        </li>
        <li className="nav-item icon pl-3 search-icon">
          <a href="javascript:void(0);" className="nav-link px-3 text-white enable" id="ge-search-component-init">
            <i className="ficon-search"><span className="hidden">Search</span></i>
          </a>
        </li>
      </ul>
      <ul className="nav d-none d-lg-flex ge-nav-icons-mobile">
        <li className="nav-item icon d-none">
          <a href="https://www.ge.com/directory" className="nav-link px-3 text-white" id="globe-icon">
            <i className="ficon-globe"><span className="hidden">Globe</span></i>
          </a>
        </li>
        <li className="nav-item icon pl-3 search-icon">
          <a href="javascript:void(0);" className="nav-link px-3 text-white enable" id="ge-search-component-init">
            <i className="ficon-search"><span className="hidden">Search</span></i>
          </a>
        </li>
      </ul>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="main-menu-wrapper ml-auto">
          <ul data-region="header" className="navbar-nav ml-auto first--level dd-bg-inactive">
            <li className="nav-item menu-level-one">
              <Link href="/news">
                <a target="_self" className="nav-link px-auto px-lg-3 text-white" title="News">News</a>
              </Link>
            </li>
            <li className="nav-item menu-level-one">
              <Link href="/blogs">
                <a target="_self" className="nav-link px-auto px-lg-3 text-white" title="Blogs">Blogs</a>
              </Link>
            </li>
            <li className="nav-item menu-level-one">
              <Link href="/reports">
                <a target="_self" className="nav-link px-auto px-lg-3 text-white" title="Reports">Reports</a>
              </Link>
            </li>
            <li className="nav-item menu-level-one">
              <Link href="/about-us">
                <a target="_self" className="nav-link px-auto px-lg-3 text-white" title="About us">About us</a>
              </Link>
            </li>
            <span className="dd-lightbox"></span>
            <span className="dd-bg" ></span>
          </ul>
        </div>
      </div>
      <ul className="nav d-none d-lg-flex ge-nav-icons-desktop">
        <li className="nav-item icon">
					<a href="https://www.ge.com/directory" className="nav-link px-3 text-white" id="globe-icon">
						<i className="ficon-globe"><span className="hidden">Globe</span></i>
					</a>
				</li>
        <li className="nav-item icon search-icon">
					<a id="ge-search-component-init" className="nav-link enable">
						<i className="ficon-search"><span className="hidden">Search</span></i>
					</a>
				</li>
        <li className="nav-item header-stock-ticker">
          <a id="ge-stock-ticker" className="nav-link ge-stock-ticker" href="https://www.ge.com/investor-relations/stocks" target="_self">
            GE <img src="/images/arrow-up.png" width="11" height="8"/> <span className="stock-ticker__status">102.16</span></a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
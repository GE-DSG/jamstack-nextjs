// components/navbar/NavBar.js

const NavBar = () => (
  <nav id="block-ge-unified-main-menu" className="contextual-region navbar navbar-dark navbar-expand-lg ge-menu-main bg-transparent text-white px-3 px-lg-4" data-block-plugin-id="system_menu_block:main">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="/">
        <img className="d-inline-block img-fluid" alt="General Electric" title="General Electric Logo" src="https://www.ge.com/themes/custom/ge_com_unified/logo.svg" />
      </a>
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
              <a href="/news/" target="_self" className="nav-link px-auto px-lg-3 text-white" title="News">News</a>
              <div className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                <div className="row">
                  <div className="dd-container">
                      <div className="no-position dd-links">
                          <ul className="list-unstyled second--level">
                              <li>
                                  <a href="https://www.ge.com/news/press-releases" target="_self" className="dropdown-item body-1" title="Press releases">Press releases</a>
                                  <div className="second-level-description">
                                      <h2 className="col-xl-8 col-lg-8">Company news and announcements.</h2>
                                      <p className="dd-description body-2 col-xl-8 col-lg-8">
                                          Access the latest press releases, media contacts, and press tools.
                                      </p>
                                      <ul className="list-unstyled"></ul>
                                      <div className="dropdown_img">
                                          <div className="wrapper_img">
                                              <img className="dd-image w-100 lazyloaded" loading="lazy" src="https://www.ge.com/sites/default/files/2020-04/GE_Reports.jpg" alt="GE Reports" />
                                          </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div className="dd-content-block">
                          <h2 className="col-xl-12 col-lg-12">Company news and stories.</h2>
                          <p className="dd-description body-2 col-xl-8 col-lg-8">
                              Explore the latest stories, news, downloads, and press tools.
                          </p>
                          <div className="dropdown_img">
                              <div className="wrapper_img">
                                  <img className="dd-image w-100 lazyloaded" loading="lazy" src="https://www.ge.com/sites/default/files/2020-04/GE_News_Narrow.jpg" alt="GE News" />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item menu-level-one">
              <a href="/investor-relations" title="Investors overview" className="nav-link px-auto px-lg-3 text-white" data-drupal-link-system-path="node/6994">Investors</a>
            </li>
            <li className="nav-item menu-level-one">
              <a href="/about-us" title="About us" className="nav-link px-auto px-lg-3 text-white" data-drupal-link-system-path="node/6741">About us</a>
            </li>
            <li className="nav-item menu-level-one">
              <a href="https://jobs.gecareers.com/global/en" className="nav-link px-auto px-lg-3 text-white iexternal" target="_blank" rel="noopener noreferrer" title="Careers" >
                Careers
                <span className="fa-ext extlink">
                    <span className="ficon-external-link-rd" title="(link is external)"></span>
                    <span className="visually-hidden">(link is external)</span></span>
              </a>
            </li>
            <li className="nav-item menu-level-one">
              <span className="idropdown nav-link px-auto px-lg-3 text-white" title="Businesses">
                Businesses<span className="businesses-icon ficon-dropdown"></span>
              </span>
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
            GE <img src="/themes/custom/ge_unified/assets/images/arrow-up.png" width="11" height="8"/> <span className="stock-ticker__status"></span></a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
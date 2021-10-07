// components/footer/Footer.js
import Link from 'next/link';

const Footer = () => (
  <footer className="ge-footer pt-5 px-md-0 px-lg-0 pb-0 align-items-start" role="footer">
    <div className="container-fluid-custom">
      <div className="row">
        <div className="pb-3 col-12 d-flex justify-content-center col-md-4 col-lg-3 mb-3 mb-md-0">
          <div className="inner-content">
            <div className="block block--basic block--footerlogostacked">
              <div className="basic__body">
                <p>
                  <img alt="General Electric Logo" className="ge_logo_stacked" data-entity-type="file" data-entity-uuid="b450a74a-bb41-4fef-9e1c-5579a493a959" src="https://www.ge.com/themes/custom/ge_unified/assets/images/GE_logo_default.svg" title="General Electric Logo" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-3 col-6 col-md-4 col-lg-3 mb-3 mb-md-0">
          <div className="inner-content">
            <div className="block block--footermenucustom1">
              <ul data-region="footer_left_in" className="ge-footer-menu-custom-1">
							  <li>
                  <Link href="https://www.ge.com/contact/general">
                    <a className="body-2">Contact us</a>
                  </Link>
                </li>
                <li>
                  <Link href="//info.evidon.com/pub_info/3428">
                    <a className="body-2 evidon_cookie iexternal" target="_blank" rel="noopener noreferrer">
                      Cookies
                      <span className="fa-ext extlink"><span className="ficon-external-link-rd" title="(link is external)"></span></span>
                    </a>
                  </Link>
								</li>
					      <li>
                  <Link href="https://www.ge.com/investor-relations/ir-contact">
                    <a className="body-2">Investor contacts</a>
                  </Link>
								</li>
					      <li>
                  <Link href="https://www.ge.com/privacy">
                    <a className="body-2">Privacy</a>
                  </Link>
                </li>
				      </ul>
            </div>
          </div>
        </div>
        <div className="pb-3 col-6 col-md-4 col-lg-3 mb-3 mb-md-0">
          <div className="inner-content">
            <div className="block block--footermenucustom2">
              <ul data-region="footer_right_in" className="ge-footer-menu-custom-2">
							  <li>
                  <Link href="https://www.ge.com/terms">
                    <a className="body-2">Terms</a>
                  </Link>
                </li>
					      <li>
                  <Link href="https://www.ge.com/sitemap">
                    <a className="body-2">Site map</a>
                  </Link>
                </li>
					      <li>
                  <Link href="https://jobs.gecareers.com/global/en/accessibility">
                    <a className="body-2">Accessibility</a>
                  </Link>
        				</li>
					      <li>
                  <Link href="https://www.ge.com/pay-transparency">
                    <a className="body-2">Pay transparency</a>
                  </Link>
        				</li>
					      <li>
                  <Link href="https://www.ge.com/careers/fraud">
                    <a className="body-2">Fraud alert</a>
                  </Link>
                </li>
				      </ul>
	          </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ge-copyrights px-md-4" role="copyrights">
		  <div className="container-fluid-custom">
				<div className="row align-items-center">
          <div className="py-3 col-12 col-md-6 d-none d-md-block">
						<div className="inner-content text-center text-md-left">
              <div className="block block--copyrightblock">
                <p className="body-3" title="Copyright 2021 General Electric">© 2021 General Electric</p>
              </div>
						</div>
					</div>
          <div className="col-12 col-md-6 ">
					  <div className="inner-content text-center text-md-right">
              <div className="block-social-media-links block block--social-media-links">
                <ul className="social-media-links--platforms platforms inline horizontal">
                  <li>
                    <Link href="https://www.facebook.com/ge">
                      <a aria-label="General Electric Facebook page" title="General Electric Facebook page">
                        <span className="fa fa-facebook fa-in"></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com/ge">
                      <a aria-label="General Electric YouTube page" title="General Electric YouTube page">
                        <span className="fa fa-youtube fa-in"></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/generalelectric">
                      <a aria-label="General Electric Instagram page" title="General Electric Instagram page">
                        <span className="fa fa-instagram fa-in"></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.twitter.com/generalelectric">
                      <a aria-label="General Electric Twitter page" title="General Electric Twitter page">
                        <span className="fa fa-twitter fa-in"></span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/ge">
                      <a aria-label="General Electric LinkedIn page" title="General Electric LinkedIn page">
                        <span className="fa fa-linkedin fa-in"></span>
                      </a>
                    </Link>
                 </li>
                </ul>
              </div>
            </div>
					</div>
					<div className="pb-2 col-12 d-block d-md-none mt-2 mt-md-0">
						<div className="inner-content text-center text-md-left">
              <div className="block block--copyrightblock">
                <p className="body-3" title="Copyright 2021 General Electric">© 2021 General Electric</p>
              </div>
            </div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
// components/header/Header.js
import NextHead from "next/head"

const Header = () => (
  <NextHead>
    <title>GE | Building a world that works | General Electric</title>
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://stage-unifiedsearch.geapps.io" crossorigin="anonymous" />
    <link rel="dns-prefetch" href="https://stage-unifiedsearch.geapps.io" />
    <link rel="preload" href="https://stage-unifiedsearch.geapps.io/ge-component-client.js" as="script" importance="high" />
    <link rel="preload" href="https://stage-unifiedsearch.geapps.io/embedunifiedsearch.js" as="script" importance="high" />
    <link rel="preload" href="https://stage-unifiedsearch.geapps.io/ge-render-component.js" as="script" importance="high" />
    <link rel="preload" href="https://stage-unifiedsearch.geapps.io/ge-component.js" as="script" importance="high" />
    <link rel="stylesheet" media="all" href="https://stage-unifiedsearch.geapps.io/css/ge_unified_search.css" />

    <script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    <link rel="stylesheet" media="all" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />

    <script src="//c.evidon.com/dg/dg.js" companyid="3453"></script>
    <script src="/js/ge_evidon_universal_tag.js" companyid="3453" ></script>
    <script companyid="3453" dangerouslySetInnerHTML={{ __html:
`
(function(){
var s = document.createElement('script'),
e = ! document.body ? document.querySelector('head') : document.body;
s.src = 'https://acsbap.com/apps/app/assets/js/acsb.js';
s.async = s.defer = true;
s.onload = function(){
acsbJS.init({
statementLink : 'https://www.ge.com/accessibility',
feedbackLink : '',
footerHtml : '&nbsp;',
hideMobile : false,
hideTrigger : false,
language : 'en',
position : 'left',
leadColor : '#005eb8',
triggerColor : '#005eb8',
triggerRadius : '50%',
triggerPositionX : 'left',
triggerPositionY : 'bottom',
triggerIcon : 'wheels',
triggerSize : 'medium',
triggerOffsetX : 20,
triggerOffsetY : 75,
mobile : {
triggerSize: 'small',
triggerPositionX : 'left',
triggerPositionY : 'bottom',
triggerOffsetX : 0,
triggerOffsetY : 20,
triggerRadius : '50%'
}
});
};
e.appendChild(s);
}());
` }} />

    <script src="/js/ge_unified.script.js"></script>
    <script src="/js/ge_stock_ticker.js"></script>
    <script src="https://stage-unifiedsearch.geapps.io/ge-component-client.js" async importance="high"></script>
  </NextHead>
);

export default Header;
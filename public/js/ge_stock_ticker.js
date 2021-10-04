jQuery(document).ready(function(){
  jQuery.ajax({
    url: "https://qfx.tools.investis.com/clients/us/general-electric/xml/xml_full.aspx?format=json",
    dataType: "jsonp",
    jsonpCallback: "stockResults"
  });
});

function stockResults(json){
  jQuery("a.ge-stock-ticker").each(function() {
    jQuery(this).html('GE <img src="/images/arrow-'+json.stockquotes.arrow+'.png" width="11" height="8"> <span class="stock-ticker__status">'+json.stockquotes.CurrentPrice+'</span>');
  });
}   
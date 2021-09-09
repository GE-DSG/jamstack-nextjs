// components/header/Header.js
import NextHead from "next/head"
  
const Header = () => (
  <NextHead>
    <title>GE | Building a world that works | General Electric</title>
    <link rel="icon" href="/favicon.ico" />
    <script src="https://c.evidon.com/dg/dg.js" companyid="3453"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
    <link rel="stylesheet" media="all" href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
  </NextHead>  
);
  
export default Header;
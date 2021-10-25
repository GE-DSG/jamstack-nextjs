import Script from 'next/script'
import { useEffect} from "react";

export default function ExternalScript() { 
  useEffect(() => {
    const script = document.createElement("script");
     script.src = "/js/ge_stock_ticker.js";
     script.async = true;
     document.body.appendChild(script);
     console.log('stock loaded'); 
      return () => {
       document.body.removeChild(script);
     }
   }, []);
  

  return (
    <>
      <Script src="/js/ge-component-client.js" strategy="beforeInteractive"/> 
    </>
  )
}
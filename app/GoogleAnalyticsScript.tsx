import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      {/* 102,768 dollars */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ1"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag('js', newe Date());

        gtag('config', 'G-E720JHXSJ1');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;

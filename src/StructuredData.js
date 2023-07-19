import React from 'react';

const StructuredData = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "mycodecafe",
      "alternateName": "myCodeCafe",
      "url": "https://mycodecafe.com/"
    })}
  </script>
);

export default StructuredData;
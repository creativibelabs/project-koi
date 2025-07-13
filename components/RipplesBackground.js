'use client';

import { useEffect } from 'react';
import jQuery from 'jquery';

export default function RipplesBackground() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.$ = jQuery;
      window.jQuery = jQuery;

      const script = document.createElement('script');
      script.src = '/jquery.ripples-min.js';
      script.onload = () => {
        jQuery('.transition-opacity').ripples({
          resolution: 256,
          dropRadius: 20,
          perturbance: 0.02,
          interactive: true,
          crossOrigin: ''
        });
      };
      document.body.appendChild(script);
    }
  }, []);

  return null;
}

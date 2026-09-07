(() => {
  const site = 'ares_digital';
  const debug = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || new URLSearchParams(location.search).get('analytics_debug') === '1';

  function trackEvent(name, params = {}) {
    const payload = { site, ...params };
    if (typeof window.gtag === 'function') window.gtag('event', name, payload);
    else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: name, ...payload });
    }
    window.dispatchEvent(new CustomEvent('ares:analytics', { detail: { name, params: payload } }));
    if (debug) console.debug('[ARES analytics]', name, payload);
  }

  window.aresAnalytics = { trackEvent };

  document.addEventListener('click', (event) => {
    const target = event.target.closest('a, button');
    if (!target) return;
    const href = target instanceof HTMLAnchorElement ? target.getAttribute('href') || '' : '';

    if (target.matches('.hero .button-primary[href="#contacto"]')) {
      trackEvent('cta_click', { location: 'hero', cta_name: 'project_contact' });
    } else if (target.matches('.hero .button-secondary[href="#productos"]')) {
      trackEvent('cta_click', { location: 'hero', cta_name: 'view_products' });
    } else if (target.matches('.nav-cta[href="#contacto"]')) {
      trackEvent('cta_click', { location: 'navbar', cta_name: 'contact' });
    } else if (target.matches('.final-cta .button-primary[href="#contacto"]')) {
      trackEvent('cta_click', { location: 'final_cta', cta_name: 'project_contact' });
    } else if (target.matches('.service-link[href="#contacto"]')) {
      trackEvent('cta_click', { location: 'services', cta_name: 'project_contact' });
    }

    if (target.matches('.instagram-link, a[href*="instagram.com"]')) {
      trackEvent('instagram_click', { location: target.closest('.contact') ? 'contact' : 'footer', cta_name: 'instagram' });
    }

    if (!href) return;
    try {
      const destinationUrl = new URL(href, location.href);
      if (destinationUrl.hostname !== 'controlares.com' && destinationUrl.hostname !== 'www.controlares.com') return;
      const destination = destinationUrl.pathname.startsWith('/stock-ares') ? 'stock_ares' : 'ares_control';
      const product = target.closest('.product-feature, .project-item');
      const locationName = target.closest('.product-feature') ? 'products_section' : target.closest('.project-item') ? 'projects_section' : 'site_navigation';
      if (product) trackEvent('product_visit', { product: destination, destination });
      trackEvent('cross_site_navigation', { source_site: site, destination_site: destination, location: locationName });
    } catch { /* Los enlaces relativos no requieren clasificación adicional. */ }
  });

  const form = document.querySelector('[data-project-form]');
  form?.addEventListener('submit', () => sessionStorage.setItem('ares_contact_submission_pending', '1'));
  if (new URLSearchParams(location.search).has('consulta')) sessionStorage.removeItem('ares_contact_submission_pending');

  if (location.pathname.endsWith('/gracias.html') && sessionStorage.getItem('ares_contact_submission_pending') === '1') {
    sessionStorage.removeItem('ares_contact_submission_pending');
    trackEvent('form_submit', { form_name: 'contact' });
  }
})();

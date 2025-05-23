---
title: 'Go-Live Checklist'
description: 'Checklist and considerations before taking XM Cloud and your head application to production.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-01-31'
created: '2024-08-23'
audience: ['All']
---

## Context

You're ready to launch your first XM Cloud and the front-end "head" application to production. A technical team member must verify that the application is ready for production.

## Execution
Before going live, ensure your solution is fully tested and has successfully passed User Acceptance Testing (UAT) to confirm it meets all functional requirements and aligns with customer expectations. Double-check that the website adheres to your branding guidelines for a consistent visual identity, and verify that the implementation is responsive and compatible across various devices and browsers to deliver an optimal user experience.


This following considerations are specific to the toolset used.

### XM Cloud Considerations

#### Published Content

- Ensure that all of your content is published to Experience Edge. Review the [Publishing to Edge recipe](../pre-development/information-architecture/publishing-to-edge) for more guidance. You should review your Incremental Static Regeneration (ISR) settings in your front-end application as part of the publishing process. This will determine the delay between publishing and when the new content is available to users.

#### Security
- Perform a security review to ensure the correct access controls are in place.
- Verify your data privacy compliance with XM Cloud by using the [privacy checklist](https://doc.sitecore.com/xmc/en/developers/xm-cloud/privacy-checklist.html).

#### Search Engine Optimization (SEO)
- Ensure your application is SEO-optimized. Validate that your [sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) and [robots.txt](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html) are publicly accessible by search engines. 
- Additionally, consider other essential SEO details like alt tags on images, metadata, and open graph data. Review the [SEO Optimization](/learn/accelerate/xm-cloud/optimization/seo-web-optimization) recipe for further detail

#### Redirects
- Ensure all previous or new redirects are handled. Refer to the Redirect Handling recipe (coming soon) for more information.

#### Error Page Handling
- When an error occurs, ensure visitors are redirected to the proper page. See the documentation on [generating a custom static error page](https://doc.sitecore.com/xmc/en/developers/xm-cloud/generate-a-custom-static-error-page.html).

#### Analytics
- Ensure that XM Cloud Pages Analyze is ready to collect your production analytics. Refer to the setup guide here: [Create and assign site identifiers for Analytics](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-and-assign-site-identifiers.html).

### Front-end Hosting Considerations

Vercel and Netlify provide a production launch checklist. No matter what your hosting provider is, it would be beneficial to review: 
- [Vercel Production Checklist for Launch](https://vercel.com/docs/production-checklist)
- [Netlify Production Launch Checklist](https://docs.netlify.com/platform/launch-checklist/)

#### Environment Variables
- Ensure that all services are using production environment variables, including the [Context ID environment variable](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-context-id-environment-variable.html).

#### Domain & DNS
- Review and follow the recommended steps to prepare your domain to serve your new application. Refer to [Vercel Domain Documentation](https://vercel.com/docs/getting-started-with-vercel/domains) & [Netlify Domain Documentation](https://docs.netlify.com/domains-https/custom-domains/)

#### Usage Monitoring
- If your hosting platform supports notifications or alerts, consider setting those up for important limits like bandwidth, function invocations, and image optimization.

### Head Application Considerations
- Follow the [Production Checklist](https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist) provided in the Next.js documentation. The list covers front-end optimizations, development best practices, performance testing, and more.
- Perform a Lighthouse performance test to uncover possible optimizations for your front-end application.
- Check the [Front End Checklist](https://frontendchecklist.io/) to ensure your front-end application is ready for production.

## Related Recipes

<Row columns={2}>
  <Link title="Publishing to Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
  <Link title="Sitemap" link="/learn/accelerate/xm-cloud/implementation/information-architecture/sitemap" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Privacy checklist" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/privacy-checklist.html" />
<Link title="Sitemap" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html" />
<Link title="Configure the robots.txt file" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-the-robots-txt-file.html" />
<Link title="Generate a custom static error page" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/generate-a-custom-static-error-page.html" />
<Link title="Create and assign site identifiers for Analytics" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/create-and-assign-site-identifiers.html" />
<Link title="Context ID environment variable" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-context-id-environment-variable.html" />
</Row>

## Additional Links

<Row columns={2}>
<Link title="Vercel Production Checklist for Launch" link="https://vercel.com/docs/production-checklist" />
<Link title="Netlify Production Launch Checklist" link="https://docs.netlify.com/platform/launch-checklist/" />
<Link title="Vercel Domain Documentation" link="https://vercel.com/docs/getting-started-with-vercel/domains" />
<Link title="Netlify Domain Documentation" link="https://docs.netlify.com/domains-https/custom-domains/" />
<Link title="Next.js Production Checklist" link="https://nextjs.org/docs/pages/building-your-application/deploying/production-checklist" />
<Link title="Front End Checklist" link="https://frontendchecklist.io/" />
</Row>
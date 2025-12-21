export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  problem: string;
  responsibilities: string[];
  technicalDetails: string[];
  experimentation?: string;
  impact: string[];
  learnings: string;
}

export const projects: Project[] = [
  {
    slug: "experience-refresh-product-shelf-v2",
    title: "Experience Refresh",
    shortDescription: "Redesigned the Shipt homepage product shelf experience with new carousel behavior and configurable horizontal/vertical card layouts, making it easier for members to discover relevant items and start their shop.",
    overview: "As part of a broader Shipt homepage 'Experience Refresh,' we redesigned the product shelves to make it easier for members to discover relevant items and start building a basket. I focused on Product Shelf v2, implementing a new CMS-driven shelf with configurable horizontal and vertical carousels.",
    problem: "The existing shelves were functional but rigid. Cards didn't always scroll in a way that felt natural, and the layout made it hard to highlight different types of content. We needed a more flexible shelf that could power different experiments and better showcase products without overwhelming the user.",
    responsibilities: [
      "Implemented the new Product Shelf V2 component used on the Shipt homepage",
      "Added support for both vertical and horizontal product card styles using a configuration-driven approach",
      "Implemented custom snap behavior in the carousel so scrolling feels intentional and always shows a 'peek' of the next item",
      "Wired the shelf to CMS-driven content so product and content teams could control layout without new deployments",
      "Integrated analytics events for impressions and interactions so experiment and data teams could measure performance",
      "Fixed several bugs uncovered as other teams adopted the new shared carousel and shelf components"
    ],
    technicalDetails: [
      "Calculated horizontal scroll distances based on card width and spacing so each snap position aligns a card cleanly while still showing part of the next card",
      "Tuned deceleration and snapping so small swipes move by a single card, while faster swipes can advance multiple cards",
      "Ensured the shelf adapts to different surfaces (e.g., Shipt global home vs retailer home) via configuration rather than separate implementations"
    ],
    impact: [
      "Enabled A/B testing of new shelf layouts and interactions",
      "Provided a reusable shelf component for future experiments and surfaces in the Shipt app",
      "Reduced one-off shelf implementations by centralizing behavior into a flexible, CMS-driven component"
    ],
    learnings: "This project reinforced the value of building shared components that are flexible enough for experiments but still simple for other teams to use. It also sharpened my ability to balance UX details like snapping and 'peek' behavior with performance and maintainability at scale."
  },
  {
    slug: "global-search",
    title: "Multi-Retailer Search",
    shortDescription: "Part of the team that shipped a multi-retailer search experience in the Shipt app where a single query returns products from all retailers available at a member's address, driving a 2.2% increase in members placing orders from more than one store.",
    overview: "Shipt members can shop from multiple retailers, but the search experience used to make that harder than it needed to be. I was part of the team that shipped a universal search experience where a single query returns products from all retailers available at a member's address, in one integrated view.",
    problem: "Members searching across multiple retailers needed a clear way to see which stores had matches and browse products per store without the screen becoming cluttered.",
    responsibilities: [
      "Built the store list header and store result cards on the multi-retailer search screen",
      "Rendered product shelves inside each store card, supporting different layouts and empty/loading states",
      "Coordinated ownership with a teammate to avoid overlap and minimize integration risk",
    ],
    technicalDetails: [
      "Used a paginated query pattern: fetch initial results quickly, then request additional pages as the user approaches the end of the list",
      "Supported products from multiple retailers in a unified list while still displaying essential store details",
      "Implemented resilient error handling and retry options to prevent transient API failures from blocking users"
    ],
    impact: [
      "Enabled a scalable, store-grouped search layout that supported the experiment rollout",
      "Improved readability of multi-retailer results by organizing products under distinct store sections"
    ],
    learnings: "This project showed how modest changes to discovery experiences can significantly shift behavior. It also reinforced the importance of wiring analytics from day one so we can tie UI changes directly to measurable outcomes."
  },
  {
    slug: "ratings-and-reviews",
    title: "Ratings & Reviews",
    shortDescription: "Implemented Ratings & Reviews across the Shipt marketplace, surfacing rating distributions and review content on product detail pages; post-launch data showed an estimated 3.2% increase in add-to-cart rate on products with visible ratings.",
    overview: "Built the Ratings & Reviews experience to display ratings and review content across marketplace products, surfacing clear trust signals like star ratings, rating breakdowns, and review lists on product cards and product detail pages so shoppers can make more confident decisions.",
    problem: "Shipt members had limited information when deciding whether to try new or unfamiliar products, especially long-tail items and smaller brands. Without ratings or review content, it was harder to build trust and confidence.Members had limited trust signals when evaluating unfamiliar products, and the app lacked a consistent, scalable way to view ratings and review content.",
    responsibilities: [
      "Wrote a technical design document and translated it into a dependency-aware ticket plan to enable parallel work",
      "Built reusable UI components for stars, rating summaries, distributions, and review content across multiple surfaces",
      "Implemented review data fetching and proved out paginated/infinite scrolling for reviews",
      "Coordinated with analytics and backend/CMS partners to align tracking events and data contracts"
    ],
    technicalDetails: [
      "Used infinite scroll to fetch more reviews as users approached the bottom of the list",
      "Carefully handled loading, empty, and error states to avoid blank or jarring transitions",
      "Implemented five progress bars for rating distribution using API-supplied rating counts, including edge cases with few reviews"
    ],
    impact: [
      "Shipped Ratings & Reviews across marketplace surfaces with reusable components and scalable pagination",
      "Improved member decision-making by surfacing trust signals directly in shopping flows"
    ],
    learnings: "This project reinforced how much perceived quality depends on details like loading states, scroll behavior, and component reuse. It also highlighted how surfacing the right information at the right time can change user behavior without adding friction."
  },
   {
    slug: "usuals-and-auto-atc",
    title: "Usuals & Auto Add to Cart",
    shortDescription: "Implemented Ratings & Reviews across the Shipt marketplace, surfacing rating distributions and review content on product detail pages; post-launch data showed an estimated 2.1% increase in add-to-cart rate on products with visible ratings.",
    overview: "Improved repeat ordering by enabling members to create a Usuals list from their Buy Again items and schedule it to auto–add to cart on a weekly, bi-weekly, or monthly cadence, with address selection to ensure the basket is created for the correct delivery location; this feature evolved from an experiment into a core experience after driving an estimated 2.1% increase in add-to-cart rate and 1.3% lift in order volume.",
    problem: "Repeat ordering took too much effort because members had to manually rebuild the same baskets over and over, and timing those orders for recurring needs wasn’t seamless.",
    responsibilities: [
      "Built the experience that lets members generate a Usuals list from prior purchases and set a recurring auto–add schedule (weekly / bi-weekly / monthly)",
      "Implemented the scheduling flow and supported key states so the setup process stayed simple and reliable",
      "Added delivery-location selection so the correct basket is created for the right address"
    ],
    technicalDetails: [
      "Used infinite scroll to fetch more reviews as users approached the bottom of the list",
      "Carefully handled loading, empty, and error states to avoid blank or jarring transitions",
      "Implemented five progress bars for rating distribution using API-supplied rating counts, including edge cases with few reviews"
    ],
    impact: [
      "Helped evolve the feature from an experiment into a core experience",
      "Contributed to an estimated 2.1% increase in add-to-cart rate and 1.3% lift in order volume by reducing friction for repeat shoppings"
    ],
    learnings: "This project reinforced how much perceived quality depends on details like loading states, scroll behavior, and component reuse. It also highlighted how surfacing the right information at the right time can change user behavior without adding friction."
  },
  {
    slug: "address-gate",
    title: "Address gate",
    shortDescription: "Implemented Ratings & Reviews across the Shipt marketplace, surfacing rating distributions and review content on product detail pages; post-launch data showed an estimated 3.2% increase in add-to-cart rate on products with visible ratings.",
    overview: "Improved the onboarding experience for Target Circle 360 members signing in via Target SSO by using ZIP codes from deep links to personalize the home screen and enable immediate browsing, helping reduce early-session drop-off by 6%.",
    problem: "New members coming from partner sign-in flows were dropping off during address setup, reducing early engagement in the shopping experience.",
    responsibilities: [
      "Implemented improvements to preserve and validate location information during onboarding",
      "Added safeguards to prevent mismatches between a user’s location and available shopping options",
      "Added test coverage to improve reliability during rollout"
    ],
    technicalDetails: [
      "Used infinite scroll to fetch more reviews as users approached the bottom of the list",
      "Carefully handled loading, empty, and error states to avoid blank or jarring transitions",
      "Implemented five progress bars for rating distribution using API-supplied rating counts, including edge cases with few reviews"
    ],
    impact: [
      "Reduced friction in a high-traffic onboarding flow by helping members reach shopping sooner",
      "Improved correctness and stability of location-based experiences"
    ],
    learnings: "This project reinforced how much perceived quality depends on details like loading states, scroll behavior, and component reuse. It also highlighted how surfacing the right information at the right time can change user behavior without adding friction."
  },
   {
    slug: "global-category-landing-screen",
    title: "Multi-Retailer Category Landing Screen",
    shortDescription: "Implemented Ratings & Reviews across the Shipt marketplace, surfacing rating distributions and review content on product detail pages; post-launch data showed an estimated 3.2% increase in add-to-cart rate on products with visible ratings.",
    overview: "Shipped a multi-retailer category landing screen that centralizes top-level categories and curated collections, making it easier for members to browse instead of relying only on search; integrated navigation and CMS-driven category data, contributing to an estimated 0.3% increase in order volume from category flows.",
    problem: "A category experiment needed to be rerun with a redesigned, CMS-driven header system, including multiple visual variants and a polished animation effect.",
    responsibilities: [
      "Built five header UI variations (including image-based layouts)",
      "Introduced a new CMS content type (“header banner”) alignment into the UI layer with flexible fallbacks",
      "Implemented animation using React Native’s Animated API"
    ],
    technicalDetails: [
      "Used infinite scroll to fetch more reviews as users approached the bottom of the list",
      "Carefully handled loading, empty, and error states to avoid blank or jarring transitions",
      "Implemented five progress bars for rating distribution using API-supplied rating counts, including edge cases with few reviews"
    ],
    impact: [
      "Enabled the experiment rerun by delivering a reusable header system with multiple variants",
      "Improved perceived polish through animation and stronger visual hierarchy"
    ],
    learnings: "This project reinforced how much perceived quality depends on details like loading states, scroll behavior, and component reuse. It also highlighted how surfacing the right information at the right time can change user behavior without adding friction."
  },
  {
    slug: "lists-and-usuals",
    title: "Shopping Lists",
    shortDescription: "Worked on Shopping Lists and Usuals in the Shipt app, turning a hackathon prototype into production features that help members quickly re-order staples, contributing to an estimated 5% lift in add-to-cart rate and 1.2% increase in order volume.",
    overview: "Led and contributed to Shipt features that help members save time when re-ordering, including Shopping Lists and Usuals with auto-add scheduling. These features evolved from experiments into core experiences.",
    problem: "Shopping Lists started as a hackathon prototype, but design gaps and unclear backend behavior made it difficult to deliver a complete, production-ready end-to-end flow.",
    responsibilities: [
      "Built new screens to support the full Shopping Lists experience across key flows",
      "Worked with design to clarify missing states, edge cases, and navigation decisions",
      "Learned cart API patterns and collaborated with backend to align on scalable endpoints and data contracts",
      "Drove execution through regular syncs, early blocker surfacing, and iterative UI integration"
    ],
    technicalDetails: [
      "Built flexible list management with create, edit, and delete operations",
      "Implemented address selection for scheduled auto-add functionality",
      "Created seamless integration between lists and the shopping cart"
    ],
    impact: [
      "Shipped a large, multi-screen feature on time despite incomplete initial requirements",
      "Delivered a cohesive user flow by aligning design + backend contracts with the UI implementation"
    ],
    learnings: "This project demonstrated how quick prototypes can validate ideas that become significant product features. It also reinforced the importance of closing all the small gaps between a demo and a production experience."
  },
  {
    slug: "text-to-cart-ai",
    title: "Text to Cart (AI Hackathon)",
    shortDescription: "Worked on an AI-powered Text to Cart feature in the Shipt app that lets members type what they need in natural language and add suggested products to their cart with one click. This hackathon project won the Best Use of AI category.",
    overview: "Worked on an AI-powered Text to Cart feature in the Shipt app that lets members type what they need in natural language and add all suggested products to their cart with one click.",
    problem: "Traditional search requires multiple queries and manual browsing; members needed a faster way to turn natural-language intent into cart actions..",
    responsibilities: [
      "Rendered AI-generated product shelves from backend APIs",
      "Implemented default product selection per shelf and controls to skip/change selections",
      "Implemented flows to add all or selected items to the cart from the suggested list",
      "Built one-click add-to-cart behavior and supporting UI cues (e.g., a floating indicator for more items)"
    ],
    technicalDetails: [
      "Shipped a working end-to-end prototype demonstrating natural-language-driven cart building",
      "Won Best Use of AI, validating the product direction and execution quality",
    ],
    impact: [
      "Won the Best Use of AI category in company hackathon",
      "Served as a foundation for thinking about future AI-assisted shopping experiences",
      "Demonstrated cross-functional rapid prototyping capabilities"
    ],
    learnings: "This experience showed how quickly cross-functional teams can prototype new experiences when we keep the scope tight but ambitious, especially in hackathon environments."
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

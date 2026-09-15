import Project1 from "../asset/Project-01.png"
import Project2 from "../asset/Project-02.png"
import Project3 from "../asset/Project-03.png"
import Project4 from "../asset/Project-04.png"
import Project5 from "../asset/Project-05.png"
import Project6 from "../asset/Project-06.png"
import Project7 from "../asset/Project-07.png"
import Project8 from "../asset/Project-08.png"


export const projects = [
  {
    id: "journify",
    slug: "journify",
    number: "01",
    category: "AI / Full-Stack",
    title: "Journify",
    subtitle: "AI-Powered Smart Travel Itinerary Planner",
    shortDescription:
      "AI-Powered full-stack MERN application with JWT authentication, role-based authorization, and RESTful APIs for itinerary generation and trip management.",
    description:
      "Journify is an intelligent travel planning platform that leverages OpenAI's API to generate personalized travel itineraries based on user preferences, budget, and trip duration. Users can create, customize, and manage their trips with full CRUD operations, real-time updates, and social features like reviews and ratings.",
    image: Project1,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://melodious-pasca-7bacbf.netlify.app/",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OpenAI API",
      "JWT",
      "Tailwind CSS",
    ],
    overview:
      "Journify aims to simplify the travel planning experience by using AI to generate smart, context-aware itineraries. Users can input their destination, dates, budget, and preferences to receive a fully personalized travel plan.",
    problem:
      "Planning a trip is time-consuming and overwhelming. Travelers spend hours researching destinations, hotels, and activities without a cohesive plan. Existing tools lack personalization and AI intelligence.",
    solution:
      "Journify integrates OpenAI's API to generate personalized itineraries that adapt to user input. The platform allows real-time customization, reviews, ratings, and favorites — all within a responsive, modern interface.",
    keyFeatures: [
      "AI-powered itinerary generation using OpenAI API",
      "JWT authentication with role-based authorization",
      "Full CRUD operations for trips and itineraries",
      "Reviews, ratings, and favorites system",
      "Responsive real-time UI with React.js",
      "RESTful API architecture",
    ],
    architecture:
      "React.js frontend communicating with Express.js REST APIs. MongoDB stores user data, trips, and itineraries. OpenAI API is called server-side to generate travel plans. JWT tokens are used for stateless authentication.",
    challenges: [
      "Designing prompt engineering strategies for consistent AI output",
      "Building efficient MongoDB data models for complex trip relationships",
      "Managing real-time UI state updates during AI generation",
    ],
    results: [
      "Successfully generated personalized itineraries for multiple trip types",
      "Built complete authentication and authorization system",
      "Responsive interface working seamlessly across all device sizes",
    ],
  },
  {
    id: "dailygig",
    slug: "dailygig",
    number: "02",
    category: "Gig Marketplace",
    title: "Dailygig",
    subtitle: "Hyperlocal Gig Marketplace for Instant Work Opportunities",
    shortDescription:
      "A gig marketplace platform that connects individuals, businesses, and skilled workers through a fast, hyperlocal system for discovering, posting, applying to, and managing short-term work opportunities.",
    description:
      "Dailygig is a hyperlocal gig marketplace designed to connect businesses and individuals with verified talent for quick tasks, projects, and collaborations. The platform enables users to discover nearby gigs, post work opportunities, apply for tasks, communicate with other users, and manage their professional profiles. It focuses on creating a trust-first ecosystem with user verification, real-time communication, notifications, and profile-based performance tracking.",
    image: Project2,
    github: "https://github.com/sujaynayek",
    liveDemo: "https://play.google.com/store/apps/details?id=in.dailygigInc.dailygig&pcampaignid=web_share",
    featured: true,
    technologies: [
      "Node.js",
      "Express.js",
      "Firebase",
      "Redis",
      "Docker",
      "JWT",
      "Authentication",
      "Authorization",
      "OAuth",
      "REST API",
      "Postman",
    ],
    overview:
      "Dailygig aims to simplify the way people find and provide short-term work by creating a fast, hyperlocal marketplace for gigs. Users can discover relevant opportunities, post gigs, apply for tasks, communicate with other users, and build their professional identity through their profiles and activity.",
    problem:
      "Traditional hiring platforms often involve lengthy hiring processes and are not optimized for short-term or task-based work. Individuals looking for quick earning opportunities may struggle to find relevant local gigs, while businesses need a faster way to discover and connect with available talent.",
    solution:
      "Dailygig provides a digital marketplace where businesses and individuals can post and discover short-term work opportunities. The platform supports gig discovery, applications, applicant management, real-time communication, user verification, notifications, and profile-based interactions to make the entire process faster and more accessible.",
    keyFeatures: [
      "Hyperlocal gig discovery based on user location",
      "Gig posting and task management",
      "Gig application and applicant tracking system",
      "User authentication with JWT and OAuth",
      "Role-based authentication and authorization",
      "Firebase integration for user verification and real-time services",
      "Real-time chat and communication between users",
      "Instant notifications and real-time activity updates",
      "Verified user profiles and KYC-based trust system",
      "RESTful API architecture",
    ],
    architecture:
      "Node.js and Express.js power the backend REST APIs and business logic. Firebase is used for authentication and supporting real-time application functionality. Redis is used as a caching and performance layer for frequently accessed data and real-time workloads. JWT-based authentication and authorization secure protected API resources, while OAuth enables social authentication. Docker is used to containerize the backend services and provide a consistent deployment environment. Postman is used for API development and testing.",
    challenges: [
      "Designing a scalable backend architecture for a two-sided gig marketplace",
      "Implementing secure authentication, OAuth, JWT, and role-based authorization",
      "Managing real-time communication and notifications between users",
      "Building efficient gig discovery and location-based marketplace functionality",
      "Using Redis to improve API performance and handle frequently accessed data",
      "Designing reliable APIs for gig posting, applications, users, and communication",
    ],
    results: [
      "Built a functional marketplace connecting businesses and individuals with short-term work opportunities",
      "Implemented secure authentication and authorization workflows",
      "Developed RESTful APIs for core marketplace operations",
      "Integrated real-time communication and notification capabilities",
      "Created a scalable backend architecture using Docker and Redis",
      "Implemented user verification and profile-based interactions to improve marketplace trust",
    ],
  },
  {
    id: "dada-boudi-biryani",
    slug: "dada-boudi-biryani",
    number: "03",
    category: "Restaurant / Food",
    title: "Dada Boudi Biryani",
    subtitle: "Traditional Biryani Restaurant & Online Food Ordering Website",
    shortDescription:
      "A modern restaurant website for showcasing Dada Boudi Biryani's signature biryani, chaap, and Indian food offerings with menu browsing, restaurant information, and online ordering functionality.",
    description:
      "Dada Boudi Biryani is a restaurant-focused web application designed to provide customers with a convenient digital experience for discovering and ordering authentic biryani and Indian cuisine. The platform presents the restaurant's signature food items including chicken biryani, mutton biryani, egg biryani, aloo biryani, special biryani, and chaap. The website combines a visually engaging restaurant interface with structured menu presentation and customer-focused ordering functionality, allowing users to explore available dishes and easily access important restaurant information.",
    image: Project3,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://dada-boudi-biryani-website.web.app/",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Firebase",
      "Responsive Design",
    ],
    overview:
      "The Dada Boudi Biryani website acts as a digital storefront for a biryani-focused restaurant. It presents the restaurant's food offerings in an organized interface while providing customers with an easy way to explore the menu, learn about the restaurant, and access ordering options.",
    problem:
      "Customers increasingly discover restaurants and their menus online before deciding what to order. A restaurant without a dedicated digital presence has limited control over how its brand, menu, food offerings, and customer experience are presented.",
    solution:
      "The website creates a dedicated online presence for Dada Boudi Biryani with a food-focused interface, structured menu presentation, restaurant information, and ordering functionality. The design emphasizes the restaurant's signature biryani and supporting dishes while keeping the customer journey simple.",
    keyFeatures: [
      "Restaurant landing page",
      "Biryani-focused menu showcase",
      "Chicken, mutton, egg, and aloo biryani categories",
      "Special biryani and combo offerings",
      "Chaap and additional food items",
      "Food item cards with pricing and details",
      "Restaurant information section",
      "Online ordering functionality",
      "Responsive design for mobile and desktop",
      "Firebase deployment",
    ],
    architecture:
      "A responsive frontend architecture is used to organize the restaurant landing page, menu sections, food item components, restaurant information, and ordering interface. Firebase is used for hosting the web application, while reusable frontend components provide a consistent experience across different sections and screen sizes.",
    challenges: [
      "Designing a food-focused interface that visually represents the restaurant brand",
      "Organizing multiple biryani and food categories into an intuitive menu",
      "Creating reusable components for food items and menu sections",
      "Building a responsive ordering experience for mobile and desktop users",
      "Keeping the customer journey simple from menu discovery to ordering",
    ],
    results: [
      "Created a dedicated digital presence for the restaurant",
      "Presented the restaurant's biryani and chaap offerings in a structured menu",
      "Built a responsive customer-facing food ordering experience",
      "Made food items and restaurant information easily accessible",
      "Deployed the website using Firebase",
    ],
  },
  {
    id: "expense-tracker",
    slug: "expense-tracker",
    number: "04",
    category: "Finance / Full-Stack",
    title: "ExpenseTracker",
    subtitle: "Personal Finance Management Platform",
    shortDescription:
      "A full-stack finance app enabling users to securely track income and expenses with JWT-based authentication, category-wise tracking, and real-time analytics.",
    description:
      "ExpenseTracker is a comprehensive personal finance management tool that helps users take control of their spending habits. The platform provides intuitive dashboards, category-based expense tracking, filtering and search capabilities, and insightful spending analytics.",
    image: Project4,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://github.com/sujaynayek?tab=repositories",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    overview:
      "ExpenseTracker provides users with a clear picture of their financial health by tracking income and expenses across categories. It offers real-time analytics and clean data visualizations.",
    problem:
      "Many people struggle to track their spending and understand where their money goes. Existing tools are often complex, ugly, or not tailored to individual needs.",
    solution:
      "A clean, minimal finance app with secure user authentication, category-wise tracking, and interactive spending dashboards built on the MERN stack.",
    keyFeatures: [
      "Secure JWT-based authentication",
      "Income and expense tracking with categories",
      "Real-time spending analytics dashboard",
      "Filtering and search over financial records",
      "CRUD operations for financial entries",
      "Responsive design with Tailwind CSS",
    ],
    architecture:
      "React.js frontend with component-based architecture. Express.js REST API with MongoDB for data persistence. JWT authentication for secure user sessions. Chart.js for data visualization.",
    challenges: [
      "Designing intuitive data models for financial records with multiple categories",
      "Implementing efficient filtering and aggregation queries in MongoDB",
      "Creating responsive dashboard layouts with real-time chart updates",
    ],
    results: [
      "Clean, functional finance tracking app with full authentication",
      "Intuitive analytics dashboard providing spending insights",
      "Efficient MongoDB queries with category-wise aggregation",
    ],
  },
  {
    id: "indian-pizza-house",
    slug: "indian-pizza-house",
    number: "05",
    category: "Restaurant / Food",
    title: "Indian Pizza House",
    subtitle: "Authentic Indian Fusion Pizza Restaurant Website",
    shortDescription:
      "A modern restaurant website showcasing Indian-fusion pizzas, food menus, restaurant information, gallery, location, and online ordering options for customers.",
    description:
      "Indian Pizza House is a modern restaurant website built to showcase a unique fusion of Indian flavors and traditional Italian-style pizza. The website presents the restaurant's signature menu, including Butter Chicken Pizza, Achari Paneer Pizza, Paneer 65 Pizza, Chicken 65 Pizza, and other food and beverage options. It provides customers with an engaging way to explore the menu, learn about the restaurant, view its ambience through a visual gallery, find the restaurant location, check operating hours, and place orders through available ordering platforms. The website focuses on creating a visually appealing digital presence while making it easy for customers to discover the restaurant and order food.",
    image: Project5,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://theindianpizzahouse.com/",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
    overview:
      "The website provides Indian Pizza House with a digital storefront where customers can discover the restaurant, explore its Indian-fusion menu, learn about its story, view food and restaurant images, find its Toronto location, and access online ordering options.",
    problem:
      "A restaurant needs more than just a physical presence to attract and inform customers. Customers should be able to quickly understand the restaurant's concept, explore the menu, view the food and ambience, find the location and opening hours, and easily move to an ordering platform.",
    solution:
      "The website creates a centralized online presence for Indian Pizza House with a visually engaging homepage, categorized menu, restaurant story, image gallery, location information, business hours, and direct ordering options. The design highlights the restaurant's Indian-fusion identity while keeping important customer actions easy to access.",
    keyFeatures: [
      "Modern restaurant landing page",
      "Indian-fusion food menu showcase",
      "Veg and non-veg menu categories",
      "Detailed food item listings with pricing",
      "Restaurant story and brand presentation",
      "Food and restaurant image gallery",
      "Location and Google Maps integration",
      "Opening hours display",
      "Online ordering integration",
      "Responsive design for mobile and desktop",
    ],
    architecture:
      "A responsive frontend architecture is used to present the restaurant's brand, menu, gallery, location, and ordering information. The website is structured into reusable sections and menu components, allowing restaurant information and food offerings to be presented in an organized and user-friendly interface.",
    challenges: [
      "Designing a visually appealing interface around food photography and restaurant branding",
      "Organizing a large menu into clear and easy-to-navigate categories",
      "Creating a responsive experience across mobile, tablet, and desktop devices",
      "Making important actions such as viewing the menu, finding the location, and ordering food easily accessible",
    ],
    results: [
      "Created a modern digital presence for the restaurant",
      "Presented the restaurant's Indian-fusion concept and signature dishes",
      "Made the complete menu easily accessible to customers",
      "Integrated location, opening hours, gallery, and ordering information",
      "Delivered a responsive restaurant experience across different screen sizes",
    ],
  },
  {
    id: "the-biriyani-story",
    slug: "the-biriyani-story",
    number: "06",
    category: "Restaurant / Food",
    title: "The Biryani Story",
    subtitle: "Authentic Indian Biryani Restaurant Website",
    shortDescription:
      "A modern restaurant website designed to showcase authentic Indian biryani, menu offerings, restaurant information, and ordering options through a visually engaging digital experience.",
    description:
      "The Biryani Story is a restaurant website created to establish a strong digital presence for an Indian restaurant specializing in authentic biryani and Indian cuisine. The website allows customers to explore the restaurant's food offerings, learn more about its culinary concept, discover popular dishes, and access essential restaurant information. With a food-focused visual design and responsive layout, the platform provides customers with an engaging way to discover the restaurant and its menu while making important information and ordering options easily accessible.",
    image: Project6,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://thebiryanistory.com/",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Firebase",
      "Responsive Design",
    ],
    overview:
      "The Biryani Story provides a digital storefront for an Indian restaurant, presenting its brand, food offerings, restaurant information, and customer-facing services through a modern and responsive web experience.",
    problem:
      "Restaurants need an effective online presence where customers can quickly discover their food, understand the restaurant's identity, explore the menu, and access essential information without depending entirely on third-party food platforms.",
    solution:
      "The Biryani Story provides a dedicated restaurant website that brings the brand, food offerings, restaurant information, and customer actions together in one place. The visually focused interface highlights the restaurant's biryani and Indian cuisine while maintaining a simple and accessible browsing experience.",
    keyFeatures: [
      "Modern restaurant landing page",
      "Indian cuisine and biryani showcase",
      "Menu and food item presentation",
      "Restaurant brand and story section",
      "Food-focused visual design",
      "Restaurant information and contact details",
      "Online ordering integration",
      "Responsive design for mobile and desktop",
      "Firebase-hosted web application",
    ],
    architecture:
      "A responsive frontend architecture is used to present the restaurant brand, food offerings, restaurant information, and customer-facing sections. The application is deployed using Firebase hosting and is structured to provide a fast and responsive experience across desktop and mobile devices.",
    challenges: [
      "Creating a visually appealing restaurant experience centered around food",
      "Presenting menu and restaurant information in an intuitive structure",
      "Building a responsive interface that works smoothly across different screen sizes",
      "Creating a strong visual identity that reflects authentic Indian cuisine",
      "Making important customer information and ordering options easy to access",
    ],
    results: [
      "Created a modern digital presence for an Indian restaurant",
      "Presented the restaurant's biryani and Indian cuisine offerings",
      "Built a responsive customer-facing restaurant experience",
      "Integrated essential restaurant and ordering information",
      "Deployed the website using Firebase hosting",
    ],
  },
  {
    id: "bybrainy",
    slug: "bybrainy",
    number: "07",
    category: "Agency / Digital Solutions",
    title: "ByBrainy",
    subtitle: "Creative Technology & Digital Marketing Agency",
    shortDescription:
      "A modern agency website showcasing ByBrainy's creative, technical, branding, and performance marketing services with portfolio projects, team profiles, company achievements, and career opportunities.",
    description:
      "ByBrainy is a creative and technology-driven agency website built to present a wide range of digital services under one platform. The website showcases the company's expertise in content creation, IT consultancy, performance marketing, and all-in-one branding. It highlights completed projects, client achievements, creative work across industries, team members, company vision, milestones, and career opportunities. The platform is designed as a professional digital presence that communicates ByBrainy's combination of creativity, technology, marketing, and business growth solutions to potential clients and partners.",
    image: Project7,
    github: "https://github.com/sujaynayek?tab=repositories",
    liveDemo: "https://bybrainy.com/",
    featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Firebase",
    ],
    overview:
      "The ByBrainy website serves as a complete digital presence for a creative and technology agency. It brings together the company's services, portfolio, achievements, team, story, career opportunities, and contact information in a visually engaging and conversion-focused experience.",
    problem:
      "Creative agencies need a strong digital presence that can communicate their capabilities across multiple service categories while also demonstrating credibility through previous work, achievements, team expertise, and client results. Presenting all of this information without making the website overwhelming is a major challenge.",
    solution:
      "The website organizes ByBrainy's services and company information into clearly defined sections covering content creation, IT consultancy, performance marketing, branding, portfolio work, achievements, team members, company history, and career opportunities. The visual design combines creative presentation with structured information to help potential clients quickly understand the agency's capabilities and value.",
    keyFeatures: [
      "Creative agency landing page",
      "Content creation service showcase",
      "IT consultancy and web development services",
      "Performance marketing service presentation",
      "Branding and identity design services",
      "Portfolio categorized by industry and project type",
      "Company achievements and statistics",
      "Team member profiles",
      "Company vision and journey section",
      "Milestones and project highlights",
      "Career and recruitment section",
      "Resume upload functionality",
      "Responsive design for mobile and desktop",
    ],
    architecture:
      "A component-based responsive frontend architecture is used to organize the agency's service sections, portfolio, team profiles, company information, career content, and contact areas. The website is designed around reusable UI sections and responsive layouts to maintain a consistent experience across desktop, tablet, and mobile devices.",
    challenges: [
      "Designing a creative interface that represents a multi-service digital agency",
      "Organizing diverse services and portfolio categories without overwhelming users",
      "Creating an engaging portfolio presentation across multiple industries",
      "Building responsive layouts for content-heavy sections",
      "Presenting company achievements, team members, and business information in a visually engaging way",
      "Creating clear conversion paths for potential clients and job applicants",
    ],
    results: [
      "Created a professional digital presence for a creative technology agency",
      "Showcased multiple service categories and capabilities",
      "Presented portfolio work across different industries",
      "Highlighted company achievements, team expertise, and growth story",
      "Provided dedicated pathways for potential clients and job applicants",
      "Delivered a responsive and visually engaging agency experience",
    ],
  },
{
  id: "dailygig-ventures",
  slug: "dailygig-ventures",
  number: "08",
  category: "Software Services / Product",
  title: "Dailygig Ventures",
  subtitle: "Software Development & Product Engineering Company",
  shortDescription:
    "A software technology company providing custom web and mobile application development, website solutions, UI/UX, branding, and digital products for businesses while building and operating its own technology products.",
  description:
    "Dailygig Ventures is a software development and product engineering company focused on building modern digital solutions for businesses and developing its own technology products. The company provides services including custom website development, mobile and web application development, UI/UX design, branding, dashboards, real-time applications, progressive web apps, and other digital solutions. Alongside client-focused software services, Dailygig Ventures develops its own products, including DailyGig, a hyperlocal gig marketplace designed to connect businesses and individuals with verified talent for quick tasks, projects, and collaborations. The company combines software services with product development to solve real-world business and marketplace problems through technology.",
  image: Project8,
  github: "https://github.com/sujaynayek?tab=repositories",
  liveDemo: "https://dailygigventures.com/",
  featured: true,
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Firebase",
    ],
  overview:
    "Dailygig Ventures operates at the intersection of software services and product development. The company works with businesses to build custom digital solutions while also developing its own technology products. Its service portfolio covers web and mobile applications, websites, real-time applications, dashboards, UI/UX, branding, and other digital experiences. Its flagship product, DailyGig, focuses on connecting businesses and individuals with local work opportunities through a digital gig marketplace.",
  problem:
    "Businesses often need customized digital solutions that fit their specific workflows instead of relying entirely on generic software. At the same time, building scalable technology products requires strong engineering capabilities across web, mobile, backend, infrastructure, and user experience. Dailygig Ventures addresses both needs through a combination of software development services and internal product engineering.",
  solution:
    "Dailygig Ventures provides end-to-end technology services ranging from UI/UX and branding to website, web application, mobile application, backend, dashboard, and real-time application development. The company also applies its engineering capabilities to building proprietary products such as DailyGig, allowing it to develop technology for both client businesses and its own product ecosystem.",
  keyFeatures: [
    "Custom website design and development",
    "Web and mobile application development",
    "Cross-platform mobile app development",
    "Admin panels and business dashboards",
    "Real-time web applications",
    "Progressive Web App development",
    "UI/UX design and design systems",
    "Brand identity and digital branding",
    "Custom REST API development",
    "Cloud and containerized application deployment",
    "Product engineering and MVP development",
    "Development of proprietary software products",
    "DailyGig hyperlocal gig marketplace"
  ],
  architecture:
    "The company's engineering ecosystem is centered around modern web and mobile technologies. Backend applications use Node.js and Express.js with database and cloud services such as MongoDB and Firebase. Mobile products can be developed using Flutter and cross-platform technologies, while Docker supports containerized application environments. Cloud infrastructure, CI/CD practices, Git-based development, REST APIs, and caching technologies such as Redis support scalable application development and deployment.",
  challenges: [
    "Building software solutions for different business requirements and industries",
    "Designing scalable architectures that can support both client projects and proprietary products",
    "Developing cross-platform web and mobile applications",
    "Implementing real-time application functionality and communication",
    "Managing cloud infrastructure, containerization, and deployment workflows",
    "Building a reliable marketplace ecosystem for the DailyGig product",
    "Balancing rapid product development with maintainable and scalable engineering practices"
  ],
  results: [
    "Established a technology-focused software services and product development business",
    "Delivered digital solutions across websites, web applications, mobile applications, and business systems",
    "Developed and launched DailyGig as a proprietary gig marketplace product",
    "Built capabilities across frontend, backend, mobile, UI/UX, cloud, and DevOps",
    "Created a technology ecosystem capable of supporting both client projects and internal products"
  ],
}
];

export default projects;

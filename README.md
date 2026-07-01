Medical Report Analyzer
Project Report

What this project is
Medical Report Analyzer is a dashboard-style app that helps someone keep track of their medical reports — blood tests, X-rays, MRIs, ECGs — in one place instead of digging through paper files or random PDFs every time. A user uploads a report along with basic patient details, and the app is meant to show a clean summary of the important numbers (blood pressure, sugar level, heart rate, oxygen level) and keep a history of everything that was uploaded before.
This deliverable is only about the frontend. The actual analysis logic, authentication, and storage will be connected later once the backend (Express + MongoDB) is added in the next phase, so right now the app just runs on sample/local data to prove the interface and navigation work properly.

Frontend (Built with Vue 3 + Vite)
The frontend is a single-page application built with Vue 3 and Vite. Instead of separate HTML pages for every screen, the whole thing is one app that swaps out components on the fly, which is what makes it feel instant when moving between pages.

Vue Router — Page Navigation
Vue Router handles moving between all the main pages — Home, Dashboard, Login, Register, Upload, Analysis, History and Profile — without ever reloading the browser. Every route is registered in one place, src/router/index.js, and I used history mode so the URLs look normal (like /dashboard) instead of having a # in them.
The layout itself lives in App.vue, where the Navbar, Sidebar and Footer stay fixed on every page, and only the middle part changes using <router-view>, wrapped in a transition so pages fade in instead of just popping in.

Component Structure
The project is split into two folders. components/ holds pieces that get reused — Navbar, Sidebar, Footer, DashboardChart, FeatureCard, CustomButton — and views/ holds one file per page/route (Home, Dashboard, Login, Register, Upload, Analysis, History, Profile, NotFound). This keeps every view focused on just its own page, and the shared stuff like the navbar never has to be repeated.

Props and Emits — How Data Moves Between Components
To actually show data flowing between a parent and a child component, I built two small reusable components. FeatureCard.vue just displays whatever it's given — an icon, a title and a description are passed in as props from the parent, so the card itself doesn't need to know anything, it just renders what it receives.
CustomButton.vue works the other way around. It doesn't decide what happens when it's clicked — it just emits a button-click event and lets the parent decide what to do with it. That way the same button can be reused anywhere and just wired up differently each time.
Put together, a parent view would use them like this — passing data down through props, and listening for the click going back up:
Other Reusable Components
DashboardChart.vue wraps a Chart.js bar chart and is dropped straight into the Dashboard page to show monthly report counts. Navbar.vue, Sidebar.vue and Footer.vue are the shell pieces that stay on screen no matter which page is active, so they only ever get written once.
Local State
Anything that doesn't need to be shared across components is just kept as local state using Vue's ref(). For example, Navbar.vue keeps its own dark-mode toggle in a ref, and Upload.vue keeps every form field (patient name, age, gender, report type, hospital, doctor, notes) as its own ref bound with v-model, only collecting everything together when the form is submitted.
Styling
Styling is done with a shared global CSS file imported once in main.js, so every page and component ends up looking consistent without repeating the same colors and spacing everywhere.
Component Architecture
Here's a simple diagram of how the components fit together — the shell (Navbar, Sidebar, Footer) sits around whatever page the router is currently showing, and the reusable widgets (FeatureCard, CustomButton, DashboardChart) can be dropped into any view that needs them.
 




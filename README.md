# Fitizen Organizer UI - Modern Dashboard Template

A clean, responsive, and customizable dashboard template built with React and modern web technologies. This dashboard provides a solid foundation for any admin panel, CRM, analytics platform, or data visualization application.



## Features

- **Responsive Design** - Optimized for all device sizes from mobile to large desktop displays
- **Interactive Sidebar** - Collapsible sidebar with mini mode for better space utilization
- **Clean Modern UI** - Built with Tailwind CSS for a sleek and professional appearance
- **Component Architecture** - Modular components for easy customization and extension
- **Authentication Ready** - Includes auth layout with sign-in page structure
- **Dashboard Layout** - Includes main dashboard layout with navigation and content areas
- **Flexible Routing** - Built with React Router v7 for efficient navigation
- **Dark/Light Mode Support** - Ready for implementing theme switching
- **Cross-Browser Compatible** - Works on all modern browsers

## Technologies Used

- **React 19** - Latest version of React with improved rendering and hooks
- **Vite** - Fast development server and optimized build tooling
- **React Router DOM v7** - For seamless navigation and routing
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Icons** - Extensive library of SVG icons
- **ESLint** - For code quality and consistency
- **Responsive Design** - Mobile-first approach with tailored layouts for different screen sizes

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/fitizen-organizer-ui.git
   cd fitizen-organizer-ui
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Customization

### Modifying the Sidebar

The sidebar components are located in `src/components/sidebar/`. You can modify:
- `SidebarItem.jsx` - Individual menu items
- `SidebarItemsList.jsx` - The list of menu items
- `SidebarSubmenu.jsx` - Submenu implementation
- `sidebarUtils.js` - Helper functions for sidebar functionality

### Layout Customization

Layout components are in `src/layouts/`:
- `DashboardLayout.jsx` - Main dashboard layout
- `DashboardSidebar.jsx` - Sidebar implementation
- `DashboardNavbar.jsx` - Top navigation bar
- `AuthLayout.jsx` - Layout for authentication pages

## License

MIT

## Acknowledgments

- React Team for the amazing library
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors who make development easier

const theme = {
  // colors: {
  //   primary: "#22C55E",
  //   primaryHover: "#16A34A",
  //   background: "#F8F9FA",
  //   text: "#111827",
  //   textMuted: "#6B7280",
  //   border: "#E5E7EB",
  //   white: "#FFFFFF",
  // },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
  },

  colors: {
    primary: "#17cc17", // Green (e.g., button and highlights)
    secondary: "#f5f5f5", // Light gray background
    text: {
      primary: "#333333", // Dark gray text for main content
      secondary: "#666666", // Lighter gray for subtext
      link: "#17cc17", // Green for clickable elements
    },
    border: "#dddddd", // Border color for tables and cards
    background: "#F8F9FA",
    hover: "#14a014", // Darker green for hover states
  },
  typography: {
    fonts: {
      primary: "Inter, sans-serif", // Font used in headings and body text
      body: "Inter, system-ui, sans-serif",
      heading: "Inter, system-ui, sans-serif",
    },
    fontSizes: {
      xs: "0.75rem", // Extra small text
      sm: "0.875rem", // Small text (e.g., table data)
      md: "1rem", // Default body text
      lg: "1.25rem", // Section headings
      xl: "1.5rem", // Large headings (e.g., dashboard title)
      xxl: "2rem", // Extra large headings if needed
    },
    fontWeights: {
      light: 300, // Light text
      regular: 400, // Normal text
      medium: 500, // Semi-bold text (e.g., headings)
      bold: 700, // Bold text (e.g., key highlights)
    },
    lineHeights: {
      normal: 1.5, // Standard line height for readability
      dense: 1.25, // Compact text
    },
  },
  spacing: {
    xs: "4px", // Tiny gaps
    sm: "8px", // Small gaps (e.g., padding)
    md: "16px", // Medium gaps (e.g., margins around sections)
    lg: "24px", // Large gaps
    xl: "32px", // Extra-large gaps
    xxl: "64px", // For major spacing
  },
  borders: {
    radius: {
      none: "0px", // No border radius
      sm: "4px", // Slightly rounded corners
      md: "8px", // Rounded corners for cards and containers
    },
    widths: {
      thin: "1px", // Thin borders (e.g., table and card borders)
    },
  },
  shadows: {
    sm: "0px 1px 2px rgba(0, 0, 0, 0.05)", // Subtle shadow for cards
    md: "0px 4px 6px rgba(0, 0, 0, 0.1)", // More prominent shadow for pop-ups
  },
  breakpoints: {
    xs: "320px", // Extra small devices like older smartphones
    sm: "480px", // Small devices like modern smartphones
    md: "768px", // Medium devices like tablets
    lg: "1024px", // Large devices like small laptops
    xl: "1200px", // Extra large devices like desktops
  },
}

export default theme

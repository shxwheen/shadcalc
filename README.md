# ShadCalc 🧮

A modern, responsive calculator web application built with React, TypeScript, and shadcn/ui components. Features a sleek dark theme with gradient backgrounds and a comprehensive calculation history system.

## ✨ Features

### 🎨 **Modern UI Design**
- **Dark Theme**: Professional dark interface with subtle gradient backgrounds
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Color-Coded Buttons**: Intuitive color scheme for different button types
  - Gray: Number buttons (0-9, decimal point)
  - Orange: Mathematical operators (+, −, ×, ÷)
  - Red: Clear button
  - Green: Equals button
- **Smooth Animations**: Hover effects and button scaling for enhanced user experience

### 📚 **Calculation History**
- **Slide-out History Panel**: Toggle-able sidebar showing previous calculations
- **Interactive History**: Click any previous calculation to reuse its result
- **Timestamp Tracking**: Each calculation is timestamped for reference
- **History Management**: Clear all history or close the panel easily
- **Auto-save**: Keeps last 20 calculations in memory

### 🔢 **Calculator Functionality**
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Decimal Support**: Handle decimal numbers and calculations
- **Error Handling**: Graceful error handling for invalid operations
- **Security**: Safe calculation parser (no `eval()` usage)
- **Keyboard-friendly**: Large, easy-to-click buttons

## 🛠️ **Technology Stack**

- **[React 19](https://reactjs.org/)** - Frontend framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern UI component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Class Variance Authority](https://cva.style/)** - Component variant management
- **[Create React App](https://create-react-app.dev/)** - Build tooling and development server

## 🚀 **Getting Started**

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shadcalc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the calculator.

## 📁 **Project Structure**

```
shadcalc/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx       # shadcn Button component
│   │   │   └── input.tsx        # shadcn Input component
│   │   └── Calculator.tsx       # Main calculator component
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   ├── App.tsx                 # Root application component
│   ├── index.css              # Global styles with Tailwind
│   └── index.js               # Application entry point
├── public/                     # Static assets
├── components.json            # shadcn/ui configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json              # Project dependencies and scripts
```

## 📜 **Available Scripts**

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.\
The build is minified and optimized for the best performance.

### `npm run eject`
⚠️ **Note: This is a one-way operation. Once you eject, you can't go back!**

## 🎯 **Usage**

1. **Basic Calculations**: Click number and operator buttons to build expressions
2. **View Results**: Press the equals (=) button to calculate results
3. **Clear Display**: Use the Clear button to reset the calculator
4. **Access History**: Click the 📚 button to open the calculation history panel
5. **Reuse Calculations**: Click any item in the history to use its result
6. **Manage History**: Clear all history or close the panel as needed

## 🔧 **Customization**

### Modifying Colors
The calculator uses Tailwind CSS classes for styling. You can customize colors by:
- Editing the button classes in `src/components/Calculator.tsx`
- Modifying the gradient background
- Updating the `tailwind.config.js` for theme-wide changes

### Adding Features
The modular structure makes it easy to add new features:
- Extend the `HistoryEntry` interface for additional data
- Add new button variants in the shadcn Button component
- Implement advanced mathematical operations in the parser

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and shadcn/ui

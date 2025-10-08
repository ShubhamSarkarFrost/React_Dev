# 🧮 BMI Calculator (React)

A modern, responsive **Body Mass Index (BMI) Calculator** built using **React**, featuring two-way binding, lifted state management, and a clean design with custom fonts and colors.

This project lets users calculate their BMI in both **Standard (Imperial)** and **Metric** units and dynamically displays their BMI category (Underweight, Healthy, Overweight, or Obesity) with color-coded highlights.

---

## 📸 Screenshots

### 🏠 Application Overview
![BMI Calculator Main Screen](./screenshots/bmi-calculator-main.png)

### 📊 BMI Result Display
![BMI Result Section](./screenshots/bmi-result-display.png)

---

## 🚀 Features

✅ **Two-way Binding** – Input values update the BMI in real-time.  
✅ **Lifted State** – All state is managed at the `App.jsx` level for clean separation of logic.  
✅ **Standard & Metric Units** – Easily switch between feet/inches & pounds or centimeters & kilograms.  
✅ **Dynamic Styling** – Highlights user’s BMI category using color codes:  
- Primary: `#DC143C` (Crimson Red)  
- Highlight: `#F75270` (Soft Rose)  
✅ **Responsive UI** – Fully responsive design for all screen sizes.  
✅ **Custom Font** – Uses Google’s *Poppins* font for a clean modern appearance.  
✅ **Prettier Formatting** – Project includes `.prettierrc` and `.prettierignore` for consistent code style.  

---

## 🧱 Project Structure

```
src/
│
├── App.jsx                  # Root component (state lift & routing)
├── index.js                 # Entry point
├── index.css                # Global styles (with custom colors & font)
│
├── utils/
│   └── calcBMI.js           # BMI calculation & category logic
│
└── components/
    ├── Header.jsx           # App header with icon & title
    ├── InputPanel.jsx       # Handles user inputs and unit switch
    └── ResultPanel.jsx      # Displays BMI results & category table
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/react-bmi-calculator.git
cd react-bmi-calculator
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Format code (optional)
```bash
npm run format
```

---

## 🧮 How BMI is Calculated

**For Standard (Imperial) Units:**  
```
BMI = (Weight in pounds / (Height in inches)^2) × 703
```

**For Metric Units:**  
```
BMI = Weight (kg) / (Height (m))^2
```

---

## 🎨 Color Codes

| Element | Color | Hex Code |
|----------|--------|----------|
| Primary Header & Buttons | Crimson | `#DC143C` |
| Highlighted Category Row | Rose Pink | `#F75270` |

---

## 📦 Prettier Configuration

The project includes the following formatting setup:

### `.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "jsxSingleQuote": false,
  "endOfLine": "lf",
  "useTabs": false
}
```

### `.prettierignore`
```
node_modules/
dist/
build/
coverage/
.env
public/
*.log
```

---

## 🧠 Technical Highlights

- **React Functional Components** with hooks for state and props management.  
- **Separated Logic** – All calculations moved to `utils/calcBMI.js`.  
- **Reusable Components** – `Header`, `InputPanel`, and `ResultPanel` for modular structure.  
- **No Tailwind** – Styled entirely using pure CSS and Google Fonts.  

---

## 🧾 License

This project is released under the **MIT License**. You are free to use and modify it for personal or commercial use.

---

## 🙌 Author
**Developed by:** [Your Name](https://github.com/yourusername)  
💌 *A modern BMI calculator built with React and passion for clean UI.*

---

### 📷 Screenshots
![BMI Calculator home screen standard -01](./resources/home_screen_standard_01.png)
![BMI Calculator home screen standard -02](./resources/home_screen_standard_02.png)



**Enjoy tracking your health with this simple and beautiful BMI Calculator! ❤️**
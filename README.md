# Fed Finance Lab

A comprehensive financial planning toolkit specifically designed for federal employees. This React application provides three powerful calculators to help federal employees plan their retirement with confidence.

## 🚀 Features

### 1. **TSP Calculator**
- Calculate projected Thrift Savings Plan balance at retirement
- Include agency matching contributions
- Analyze investment growth over time
- Compare different contribution scenarios
- Real-time calculations with visual breakdowns

### 2. **Roth vs Traditional Calculator**
- Side-by-side comparison of Roth and Traditional retirement accounts
- Tax implications analysis (current vs. retirement tax rates)
- After-tax value calculations
- Intelligent recommendations based on your situation
- Comprehensive factor analysis

### 3. **FERS Pension Estimator**
- Federal Employees' Retirement System pension calculations
- Eligibility determination for different retirement scenarios
- High-3 salary averaging
- FERS supplement calculations
- Special provisions for law enforcement/firefighters

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **JavaScript** - ES6+ features

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fed-finance-lab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Usage

The application features a clean, tabbed interface where you can switch between the three calculators:

1. **TSP Calculator**: Enter your current age, retirement age, current balance, contributions, and expected returns
2. **Roth vs Traditional**: Compare tax strategies by entering your current and expected future tax rates
3. **FERS Pension**: Calculate your pension based on years of service and High-3 average salary

All calculations update in real-time as you modify the input parameters.

## 🎨 Styling

The application uses Tailwind CSS with a custom `.input` class for consistent form styling:

```css
.input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors;
}
```

## 📊 Calculation Features

### TSP Calculator
- Compound interest calculations
- Agency match projections
- Tax-deferred growth modeling
- Contribution limit considerations

### Roth vs Traditional
- Tax-adjusted comparisons
- Growth projections for both account types
- Recommendation engine based on tax differential
- Estate planning considerations

### FERS Pension
- Eligibility rule validation
- Multiplier calculations (1% per year standard)
- Special retirement provisions
- FERS supplement for early retirees

## ⚠️ Important Disclaimers

- All calculations are estimates for planning purposes only
- Results may vary based on actual conditions
- Tax laws and regulations may change
- Consult with HR and financial advisors for official guidance
- Not intended as professional financial advice

## 🔧 Configuration

The application uses Tailwind CSS v4 with Vite plugin integration. Configuration files:

- `vite.config.js` - Vite configuration with Tailwind plugin
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles and custom classes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is for educational purposes. Please ensure compliance with your organization's policies before use.

## 🆘 Support

For issues or questions:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs

---

**Built with ❤️ for federal employees planning their financial future** 
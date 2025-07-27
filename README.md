# 🍕 Food Factory - Food Delivery Application

A full-stack food delivery application built with React.js, Node.js, Express, and MongoDB. This application allows users to browse food items, add them to cart, place orders, and make payments using Stripe integration.



## 🚀 Features

### 🛍️ User Features
- **Browse Food Items**: View categorized food items with images and descriptions
- **Search & Filter**: Find specific food items quickly
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Secure login and registration with JWT
- **Order Placement**: Place orders with delivery address
- **Payment Integration**: Secure payments with Stripe (NPR currency support)
- **Order Tracking**: View order history and current order status
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### 👨‍💼 Admin Features
- **Dashboard**: Overview of orders and food items
- **Food Management**: Add, edit, and delete food items
- **Order Management**: View and update order statuses
- **Image Upload**: Upload food item images
- **Real-time Updates**: Live order status management

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library
- **React Router** - Navigation
- **Context API** - State Management
- **Axios** - HTTP Client
- **CSS3** - Styling with responsive design

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Multer** - File Upload
- **Stripe** - Payment Processing

### Admin Panel
- **React.js** - Separate admin interface
- **Vite** - Build tool
- **React Toastify** - Notifications

## 📦 Project Structure

```
Food-Del/
├── frontend/          # Customer facing application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context for state management
│   │   └── assets/        # Images and static files
├── backend/           # Server application
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── uploads/          # Uploaded images
│   └── config/           # Database configuration
├── admin/             # Admin panel
│   ├── src/
│   │   ├── components/    # Admin components
│   │   ├── pages/         # Admin pages
│   │   └── assets/        # Admin assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.0 or higher)
- MongoDB (local or Atlas)
- Stripe Account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sushil-thakur/Foof-del.git
   cd Food-Del
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Admin Setup**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/food-delivery
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/food-delivery

# JWT Secret
JWT_SECRET=your_jwt_secret_here

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Server Configuration
PORT=4000
NODE_ENV=development
```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server runs on: `http://localhost:4000`

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on: `http://localhost:5173`

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   ```
   Admin panel runs on: `http://localhost:5174`

## 🔧 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Items
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin)
- `DELETE /api/food/remove` - Remove food item (Admin)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user cart

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user orders
- `GET /api/order/list` - Get all orders (Admin)
- `POST /api/order/status` - Update order status (Admin)

## 💳 Payment Integration

The application integrates with Stripe for secure payment processing:

- **Currency**: Nepalese Rupee (NPR)
- **Payment Methods**: Credit/Debit Cards
- **Security**: PCI DSS compliant through Stripe
- **Order Verification**: Automatic order confirmation after successful payment

## 🎨 Features Showcase

### Customer Experience
- **Modern UI**: Clean, intuitive design with smooth animations
- **Cart Management**: Real-time cart updates with quantity controls
- **Order Tracking**: Visual order status indicators
- **Responsive**: Mobile-first design approach

### Admin Experience
- **Dashboard**: Comprehensive order and food management
- **File Upload**: Drag-and-drop food image uploads
- **Real-time Updates**: Live order status management
- **Professional UI**: Clean admin interface

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password security
- **Input Validation**: Server-side validation for all inputs
- **File Upload Security**: Restricted file types and sizes
- **Environment Variables**: Sensitive data protection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sushil Thakur**
- GitHub: [@sushil-thakur](https://github.com/sushil-thakur)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB team for the flexible database
- Stripe for secure payment processing
- All open-source contributors

## 📞 Support

If you have any questions or need help with setup, please feel free to:
- Open an issue on GitHub
- Contact the development team

---

**Made with ❤️ for food lovers everywhere!** 🍕🍔🍜

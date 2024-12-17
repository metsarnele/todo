const express = require('express');
const exphbs = require('express-handlebars');
const taskRoutes = require('./routes/tasks');

const app = express();

// Handlebars setup
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Redirect root to tasks
app.get('/', (req, res) => {
    res.redirect('/tasks');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 
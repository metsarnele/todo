# Todo Application

A full-stack todo application built with Node.js, Express, MariaDB, and Handlebars templating engine.

## Features

- ✅ Create, read, update, and delete tasks
- 📊 Clean and intuitive user interface
- 💾 Persistent storage with MariaDB
- 🎯 Input validation and error handling
- 🖥️ Responsive design using Bootstrap

## Prerequisites

- Node.js (v14 or higher)
- MariaDB
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/neletomson/todo-app.git
```

2. Navigate to the project directory:
```bash
cd todo-app
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=todo_db
PORT=3000
```

5. Set up the database:
- Run the SQL schema file located in `db/schema.sql`
- This will create the necessary database and tables

## Running the Application

1. Start the server:
```bash
node app.js
```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
todo/
├── app.js              # Application entry point
├── routes/
│   └── tasks.js        # Task routes
├── models/
│   └── Task.js         # Task model
├── views/
│   ├── layouts/
│   │   └── main.hbs    # Main layout template
│   └── tasks/
│       └── index.hbs   # Tasks view
├── db/
│   ├── connection.js   # Database connection
│   └── schema.sql      # Database schema
└── package.json
```

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: MariaDB
- **View Engine**: Handlebars (express-handlebars)
- **Frontend**: Bootstrap 5
- **Other**: dotenv for environment variables

## API Endpoints

- `GET /tasks` - Display all tasks
- `POST /tasks` - Create a new task

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- Task completion status
- Due dates for tasks
- Priority levels
- Search functionality
- Task filtering
- User authentication
- Task categories/tags

## License

This project is licensed under the ISC License.

## Author

Nele Metsar

## Acknowledgments

- Bootstrap for the UI components
- Express.js community
- MariaDB documentation and community
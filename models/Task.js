const db = require('../db/connection');

class Task {
    static async create(title) {
        try {
            const conn = await db.getConnection();
            const result = await conn.query(
                'INSERT INTO tasks (title) VALUES (?)',
                [title]
            );
            conn.release();
            return result;
        } catch (err) {
            throw err;
        }
    }

    static async getAll() {
        try {
            const conn = await db.getConnection();
            const tasks = await conn.query('SELECT * FROM tasks ORDER BY created_at DESC');
            conn.release();
            return tasks;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Task; 
import { createConnection } from 'mysql2';

export function createConnectionObject() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: 'cdac',
        database: 'db',
    });
}

export function establishConnection() {
    const connection = createConnectionObject();
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to database:', error);
        } else {
            console.log('Connected to the database');
        }
    });
    return connection;
}

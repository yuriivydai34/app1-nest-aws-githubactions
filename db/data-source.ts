import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // Для локальної розробки

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.RDS_HOSTNAME || process.env.DB_HOSTNAME,
  port: parseInt(process.env.RDS_PORT || process.env.DB_PORT || '3306', 10),
  username: process.env.RDS_USERNAME || process.env.DB_USERNAME,
  password: process.env.RDS_PASSWORD || process.env.DB_PASSWORD,
  database: process.env.RDS_DB_NAME || process.env.DB_NAME,
  entities: ['dist/**/entities/*.entity.js'], // Вказуємо на JS у dist!
  migrations: ['dist/migrations/*.js'],
  // migrations: [__dirname + '/../migrations/*.ts'], // Шлях відносно файлу data-source.ts
  synchronize: false,
});

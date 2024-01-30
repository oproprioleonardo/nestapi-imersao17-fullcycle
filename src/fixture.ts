import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');

  productRepo.insert([
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'Produto 1',
      description: 'Descrição do Produto 1',
      image_url: 'http://localhost:9000/products/1.png',
      price: 19.99,
    },
    {
      id: '2b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'Produto 2',
      description: 'Descrição do Produto 2',
      image_url: 'http://localhost:9000/products/2.png',
      price: 29.99,
    },
    {
      id: '3b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'Produto 3',
      description: 'Descrição do Produto 3',
      image_url: 'http://localhost:9000/products/3.png',
      price: 39.99,
    },
    {
      id: 'fb9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      name: 'Produto 4',
      description: 'Descrição do Produto 4',
      image_url: 'http://localhost:9000/products/4.png',
      price: 199.99,
    },
  ]);
  await app.close();
}
bootstrap();

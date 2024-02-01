import { Product } from './../../products/entities/product.entity';
import { Order } from './order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int' })
  quantity: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
  @ManyToOne(() => Product, { eager: true })
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @Column()
  product_id: string;
  @ManyToOne(() => Order)
  order: Order;
}

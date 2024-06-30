import { DataTypes } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { UserAttributesType,RequiredUserAttributesType } from './types/user.model.type';

@Table({
  timestamps: true,
  paranoid: true,
  tableName: 'users',
  indexes: [],
})
export default class Users extends Model<UserAttributesType, RequiredUserAttributesType> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataTypes.INTEGER)
  id: number;
  
  @Column(DataTypes.STRING)
  first_name: string;

  @Column(DataTypes.STRING)
  last_name: string;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  email: string;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  password: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}

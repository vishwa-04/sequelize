import db from '@/models';
import { Model, ModelCtor } from 'sequelize-typescript';
export default class BaseRepository<M extends Model> {
  readonly DBModel: ModelCtor<M>;

  constructor(readonly modelName: string) {
    this.DBModel = <ModelCtor<M>>db.models[modelName];
  }

  }



import { Field, ObjectType } from 'type-graphql'
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { ICountry } from '../interfaces/ICountry'

@ObjectType()
@Entity()
export class Country implements ICountry {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  code: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  emoji: string

  @Field()
  @Column()
  continent: string

}
import { getRepository, Repository } from "typeorm";

import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "@modules/cars/repositories/ISpecificationRepository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const spefication = this.repository.create({
      description,
      name,
    });

    await this.repository.save(spefication);

    return spefication;
  }

  async findByName(name: string): Promise<Specification> {
    const spefication = await this.repository.findOne({
      name,
    });
    return spefication;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const spefications = await this.repository.findByIds(ids);
    return spefications;
  }
}

export { SpecificationsRepository };

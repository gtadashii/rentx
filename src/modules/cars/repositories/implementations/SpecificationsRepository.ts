import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const spefication = this.repository.create({
      description,
      name,
    });

    await this.repository.save(spefication);
  }

  async findByName(name: string): Promise<Specification> {
    const spefication = this.repository.findOne({
      name,
    });
    return spefication;
  }
}

export { SpecificationsRepository };

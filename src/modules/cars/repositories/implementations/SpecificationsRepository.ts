import { Specification } from "../../entities/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private spefications: Specification[];

  constructor() {
    this.spefications = [];
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const spefication = new Specification();
    Object.assign(spefication, {
      name,
      description,
      created_at: new Date(),
    });

    this.spefications.push(spefication);
  }

  findByName(name: string): Specification {
    const spefication = this.spefications.find(
      (spefication) => spefication.name === name
    );
    return spefication;
  }
}

export { SpecificationsRepository };

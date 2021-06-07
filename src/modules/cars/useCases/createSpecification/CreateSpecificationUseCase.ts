import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const speficationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (speficationAlreadyExists) {
      throw new AppError("Specifications already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };

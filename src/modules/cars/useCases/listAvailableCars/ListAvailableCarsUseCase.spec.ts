import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("Should be able to list available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 100.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("Should be able to list avaliable cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car Description",
      daily_rate: 100.0,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list avaliable cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car Description",
      daily_rate: 100.0,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]);
  });

  it("Should be able to list avaliable cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car Description",
      daily_rate: 100.0,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "12345",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});

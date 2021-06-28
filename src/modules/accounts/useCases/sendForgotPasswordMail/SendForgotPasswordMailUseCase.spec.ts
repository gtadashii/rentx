import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokentsRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayJsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayJsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayJsDateProvider;
let usersTokensRepositoryInMemory: UsersTokentsRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send forgot email", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayJsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokentsRepositoryInMemory();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });

  it("should be able to send a forgot password email to user", async () => {
    const sendMail = spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "829012",
      email: "teste@email.com.br",
      name: "Teste",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("teste@email.com.br");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send email if user does not exist", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("teste1@email.com.br")
    ).rejects.toEqual(new AppError("User does not exists!"));
  });

  it("should be able to create an user token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "828624",
      email: "teste3@email.com.br",
      name: "Teste 3",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("teste3@email.com.br");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});

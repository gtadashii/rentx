# Cadastro de Carro

**Requisitos Funcionais**
- Deve ser possível cadastrar um novo carro.

**Regras de Negócio**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisitos Funcionais**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de Negócio**
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**Requisitos Funcionais**
- Deve ser possível cadastrar uma especificação para um carro.

**Regras de Negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisitos Funcionais**
- Deve ser possível cadastrar a imagem do carro.
- Deve ser possível listar todos os carros.

**Requisitos Não Funcionais**
- Utilizar o multer para upload dos arquivos.

**Regras de Negócio**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos Funcionais**
- Deve ser possível cadastrar um aluguel.

**Regras de Negócio**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
- O usuário deverá estar logado para realizar um aluguel

# Devolução de carro

**Regras Funcionais**
- Deve ser possível realizar a devolução de um cadastro

**Regras de Negócio**
- Se o carro for devolvido com menos de 24 horas, deverá ser combrada diária completa
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
- Ao realizar a devolução, deverá ser calculado o total do aluguel
- Caso o horário de devolução seja superior ao horario previsto de entrega, deve ser cobrado multa proporcional aos dias de atraso
- Caso haja multa, deverá ser somado ao total do aluguel
- Usuário deve estar logado na aplicação

# Listagem de alugueis para o usuário

**Regras Funcionais**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**Requisitos de Negócio**
- O usuário deve estar logado na aplicação

# Recuperar senha

**Regras Funcionais**
- Dever ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para recuperar a senha
- O usuário deve conseguir inserir uma nova senha

**Requisitos de Negócio**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas
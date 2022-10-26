# matchIt_teste_backend

## Como rodar o servidor
1. Clonar o repositório
```bash
git clone https://github.com/Mauricio-Camilo/matchIt_teste_backend.git
```
2. Instalar as dependências
```bash
npm i
```
3. Criar um arquivo .env na raíz do projeto com os seguintes campos
```bash
PORT=
DATABASE_URL=
```
4. No campo PORT, colocar 5000, e o database seguir o seguinte exemplo:
```bash
DATABASE_URL=postgres://postgres:senhaDoPostgres@localhost:5432/nomeDoBanco
```
5. Gerar a migração com o prisma
```bash
npx prisma migrate dev
```
6. Gerar os modelos/interfaces com o prisma (recomenda-se dar um reload window depois de rodar esse comando)
```bash
npx prisma generate
```
Observação: Caso de algum problema entre os passos 4 e 6, use a seguinte configuração no .env para usar uma tabela já criada no heroku
```bash
DATABASE_URL=postgres://vijbqrkysgdlzn:377de92aa254a4771c9aa4b49253890f7ae1c43288803715e8c32f10ea516b9f@ec2-44-210-228-110.compute-1.amazonaws.com:5432/dcq60gv3tdqn1r

npx prisma migrate deploy (roda a migração em deploy, porém não é necessário nesse exemplo)

npx prisma generate
```
7. Rodar o back-end
```bash
npm run dev
```
## Como rodar os testes unitários
1. Criar um arquivo .env.test na raíz do projeto com os seguintes campos
```bash
PORT=
DATABASE_URL=
```
2. No campo PORT, colocar 5000, e o database seguir o seguinte exemplo:
```bash
DATABASE_URL=postgres://postgres:senhaDoPostgres@localhost:5432/nomeDoBanco_test
```
3. Rodar o seguinte comando:
```bash
npm run test:unit
```
## Endpoints utilizados no projeto

1. Rota de criação de empresas:
```bash
POST ("/companies")

Formato do Body:
{
    name: "Nome da empresa",
    cnpj: "XX.XXX.XXX/0001-XX",
    address: "Endereço da empresa"
}

Nenhum campo pode estar vazio, e o cnpj precisa seguir este formato, respeitando os pontos, barra e traço indicados no modelo.
```
2. Rota de busca de empresas:
```bash
GET ("/companies")
```
3. Rota de apagar uma empresa:
```bash
DELETE ("/companies/:id")

Caso seja inserido um id inválido, a aplicação devolve um erro.
```
4. Rota de atualizar uma empresa:
```bash
PUT ("/companies/:id")

Formato do Body:
{
    name: "Nome da empresa",
    cnpj: "XX.XXX.XXX/0001-XX",
    address: "Endereço da empresa"
}
A rota aceita campos vazios, porém se o cnpj for preenchido com algum valor, o formato de exemplo precisa ser respeitado.
Caso seja inserido um id inválido, a aplicação devolve um erro.
```




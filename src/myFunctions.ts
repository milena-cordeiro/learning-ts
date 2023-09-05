// importar o type aliases User para poder fazer a tipagem das funções
import { User } from './types/User';

// essa função receberá uma lista do tipo User e retornará uma lista com os nomes dos perfis.
export const getUserNames = (usersList: User[]):string[] => usersList.map((user: User) => user.name);

// Essa função receberá uma lista do tipo User e um número. Além disso, ela verificará quais perfis da lista recebida têm, no mínimo, o número de repositórios igual ao do passado como argumento, retornando uma lista com os perfis que satisfizerem a verificação.
export const getUsersByRepoCount = (users: User[], repos:number):string[] => users
.filter((user) => user.repositories >= repos).map((user) => user.name);

//  função que será responsável por verificar se uma pessoa é a mais ativa da lista de usuárias do GitHub

export const isMostActiveUser = (name:string, users:User[]):boolean => {
  const mostActiveUser = users.reduce((prev, curr) => 
  (prev.repositories > curr.repositories ? prev : curr));

  return mostActiveUser.name === name
}
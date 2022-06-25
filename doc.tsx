/*

Handless CMS (Graphql): 
  Painel de administração (dados fornecidos através de uma API REST ou Graphql)


Graphql

  -> Query: Buscar dados
  -> Mutation: Criar, Alterar ou Deletar dados

query{
  lessons {
    id
    slug
    title
    description
    teacher {
      name
      bio
      avatarURL
    } 
  }
}


*/

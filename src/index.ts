import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { AppDataSource } from './utils/datasource'
import { buildSchema } from 'type-graphql'
import { CountryResolver } from './resolvers/CountryResolver'

const port = 5000

async function start(): Promise<void> {
  try {
    await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    const schema = await buildSchema({
      resolvers: [
        CountryResolver,
      ]
    })

    const server = new ApolloServer({
      schema,
      persistedQueries: false,
    })

    try {
      const { url }: { url: string } = await server.listen({ port })
      console.log(`🚀  Server ready at ${url}`)
    } catch (error) {
      console.log(error)
    }
  } catch (error) {
    console.log('Error while launching the server')
    console.log(error)
  }
}

start()
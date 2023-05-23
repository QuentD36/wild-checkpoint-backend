import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";
import { AppDataSource } from "../utils/datasource";

@Resolver(Country)
export class CountryResolver {

    @Mutation(() => Country)
    async createCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string,
        @Arg("continent") continent: string
    ): Promise<Country> {
        const country = new Country()
        country.code = code
        country.name = name
        country.emoji = emoji
        country.continent = continent

        const savedCountry = await AppDataSource.manager.save(Country, country)

        return savedCountry
    }

    @Query(() => [Country])
    async getAllCountries(): Promise<Country[]> {
        return await AppDataSource.manager.find(Country)
    }

    @Query(() => Country)
    async getCountry(
        @Arg("code") code: string
    ): Promise<Country | null> {
        return await AppDataSource.manager.findOne(Country, { where: { code } })
    }

    @Query(() => [Country])
    async getCountriesByContinent(
        @Arg("continent") continent: string
    ) : Promise<Country[]> {
        return await AppDataSource.manager.find(Country, { where: { continent } })
    }
}
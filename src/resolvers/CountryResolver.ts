import { Country } from "../entities/Country";
import { Arg, Mutation, Query } from "type-graphql";
import { FindManyOptions, Like } from "typeorm";

export class CountryResolver {
    @Query(() => [Country])
    async GetAllCountries() {
        return await Country.find();
    }
    @Query(() => Country, { nullable: true })
    async GetCountryByCode(@Arg("code") code: string) {
        const countrySearch: FindManyOptions<Country> = {
            where: { code: Like(`%${code}%`) },
        };
        return await Country.findOne(countrySearch);
    }

    @Mutation(() => Country)
    async AddCountry(
      @Arg("name") name: string,
      @Arg("code") code: string,
      @Arg("emoji") emoji: string,
    ) {
      const country = Country.create({ name, code, emoji });
      await country.save();
      return country;
    }
}
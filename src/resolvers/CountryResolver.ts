import { Country } from "../entities/Country";
import { Arg, Mutation, Query } from "type-graphql";

export class CountryResolver {
    @Query(() => [Country])
    async GetAllCountries() {
        return await Country.find();
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
import { CountryInput } from "../inputs/CountryInput";
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

    @Query(() => [Country], { nullable: true })
    async GetCountryByContinent(@Arg("continent_code") continent_code: string) {
        const countrySearch: FindManyOptions<Country> = {
            where: { continent_code: Like(`%${continent_code}%`) },
        };
        return await Country.find(countrySearch);
    }

    @Mutation(() => Country)
    async AddCountry(
        @Arg("data") data: CountryInput) {

      const country = Country.create({ ...data });
      const result = await country.save();
      return result;
    }

    @Mutation(() => Country, { nullable: true })
    async UpdateCountry(
        @Arg("data") data: CountryInput) {
        let countryToUpdate = await Country.findOneByOrFail( { code: data.code  });
        if (!countryToUpdate) return null;
        
        countryToUpdate = Object.assign(countryToUpdate, data);
        const result = await countryToUpdate.save();
        return result;
    }
}
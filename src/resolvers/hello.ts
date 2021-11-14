import { MyContext } from "src/types";
import { Ctx, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello(@Ctx() { req }: MyContext) {
    console.log("hello: ", req.session.userId);
    return "hello world";
  }
}

import { useEmployee } from "~contracts/useEmployee";
import { useEmployeeCV } from "~contracts/useEmployeeCV";
import { Context } from "~graphql/context";
import { cv } from "./cv";
import { skill } from "./skill";
import { social } from "./social";

export const employee = {
  ...cv,
  ...skill,
  ...social,
};

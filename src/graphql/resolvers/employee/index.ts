import { useEmployee } from "~contracts/useEmployee";
import { useEmployeeCV } from "~contracts/useEmployeeCV";
import { Context } from "~graphql/context";
import { cv } from "./cv";
import { skill } from "./skill";

export const employee = {
  ...cv,
  ...skill,
};

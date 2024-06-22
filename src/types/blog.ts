import { project } from "./project";

export type blog = project & {
    date : string;
    className ?: string
}
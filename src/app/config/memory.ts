import { Note } from "../models/note";
import { User } from "../models/user"

export const memory = {
    id: '',
    user: {},
    notes: []
} as {
    id: string;
    user: User;
    notes: Note[];
}


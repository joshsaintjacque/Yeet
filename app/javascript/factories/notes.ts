import faker from "faker";
import { Factory } from "fishery";
import { Note } from "models/Note";

export default Factory.define<Note>(({ sequence }) => ({
  id: sequence,
  title: faker.lorem.sentence(),
  created_at: faker.date.past().toISOString(),
  updated_at: faker.date.past().toISOString(),
}));

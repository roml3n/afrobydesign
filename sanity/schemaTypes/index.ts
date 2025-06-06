import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import categoryType from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import siteType from "./siteType";
import fontType from "./fontType";
import techType from "./techType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    siteType,
    fontType,
    techType,
  ],
};

export const schemaTypes = [siteType, categoryType, fontType, techType];

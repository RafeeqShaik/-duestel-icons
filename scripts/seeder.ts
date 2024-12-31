import "dotenv/config";
import mongoose, { Schema } from "mongoose";
import { Icon } from "..";

import * as _localIcons from "..";
import mongoDBConnection from "./server";

const schema = new Schema<Icon>({
  categories: { type: [String], required: true, default: [] },
  tags: { type: [String], required: true, default: [] },
  name: { type: String, required: true },
  jsxComponentName: { type: String, required: true },
});

const IconModel = mongoose.model("icon", schema);

async function seedData() {
  console.log("connecting to database...");
  const connection = await mongoDBConnection();

  const icons = await IconModel.find();

  //   find remote icons which are not in local
  const iconsSet = new Set<string>();

  for (const i of icons) iconsSet.add(i.name);

  const localIcons = Object.values(_localIcons).filter(
    (i) => typeof i === "function"
  );

  for (const localIcon of localIcons) iconsSet.delete(localIcon.name);

  // delete remote icons which are not in local
  if (iconsSet.size) {
    console.log("deleting remote icons...");
    await IconModel.deleteMany({ name: { $in: [...iconsSet] } });
    console.log("remote icons deleted");
  }

  //   update
  console.log("updating icons in database...");
  await IconModel.bulkWrite(
    localIcons.map((li) => ({
      updateMany: {
        filter: { name: li.name },
        upsert: true,
        update: { name: li.name, jsxComponentName: li.name },
      },
    }))
  );

  console.log("icons synced to database...");

  // disconnect
  connection.disconnect();
}

seedData();

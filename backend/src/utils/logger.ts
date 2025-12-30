import { LogModel } from "../config/mongo";
import { eventBus } from "../events/eventBus";

eventBus.on("LOG", async (data) => {
  await LogModel.create(data);
});

export function log(event: string, payload: any) {
  eventBus.emit("LOG", { event, payload });
}

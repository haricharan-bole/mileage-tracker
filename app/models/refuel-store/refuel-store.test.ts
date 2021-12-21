import { RefuelStoreModel } from "./refuel-store"

test("can be created", () => {
  const instance = RefuelStoreModel.create({})

  expect(instance).toBeTruthy()
})

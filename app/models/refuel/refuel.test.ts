import { RefuelModel } from "./refuel"

test("can be created", () => {
  const instance = RefuelModel.create({})

  expect(instance).toBeTruthy()
})

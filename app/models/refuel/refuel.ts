import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Rick and Morty Refuel model.
 */
export const RefuelModel = types.model("Refuel").props({
  id: types.string,
  odometerMiles: types.maybe(types.number),
  gasInLiters: types.maybe(types.number),
  pricePerLiter: types.maybe(types.number),
  timeStamp: types.maybe(types.string),
})

type RefuelType = Instance<typeof RefuelModel>
export interface Refuel extends RefuelType {}
type RefuelSnapshotType = SnapshotOut<typeof RefuelModel>
export interface RefuelSnapshot extends RefuelSnapshotType {}
export const createRefuelDefaultModel = () => types.optional(RefuelModel, {})

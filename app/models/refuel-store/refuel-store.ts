import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { Refuel, RefuelModel } from "../refuel/refuel"
import { withEnvironment } from "../extensions/with-environment"
const demoEntries = require("./demo-data.json")

/**
 * Example store containing Rick and Morty characters
 */
export const RefuelStoreModel = types
  .model("RefuelStore")
  .props({
    refuelEntries: types.optional(types.array(RefuelModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    addRefuelEntry: (entry: Refuel) => {
      self.refuelEntries.push(entry)
    },
    resetRefuelEntries: () => {
      self.refuelEntries.clear()
    },
    loadDemoRefuelEntries: () => {
      self.refuelEntries.clear()
      self.refuelEntries.replace([...demoEntries.entries])
    },
  }))

type RefuelStoreType = Instance<typeof RefuelStoreModel>
export interface RefuelStore extends RefuelStoreType {}
type RefuelStoreSnapshotType = SnapshotOut<typeof RefuelStoreModel>
export interface RefuelStoreSnapshot extends RefuelStoreSnapshotType {}
export const createRefuelStoreDefaultModel = () => types.optional(RefuelStoreModel, {})

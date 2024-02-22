export enum Network {
  testnet8 = 'testnet8'
}

export enum StatusResult {
  success = 'success',
  fail = 'fail'
}

export type StatusResults = {
  coordinatorBeacon: StatusResult
  coordinatorValidator: StatusResult
  validator: StatusResult
}

export enum Type {
  local = 'local',
  remote = 'remote'
}

export enum CoordinatorStatus {
  stopped = 'stopped',
  running = 'running'
}

export enum CoordinatorValidatorStatus {
  stopped = 'stopped',
  running = 'running'
}

export enum ValidatorStatus {
  stopped = 'stopped',
  running = 'running'
}

export interface NewNode {
  name: string
  network: Network
  type: Type
  locationDir: string
  coordinatorHttpApiPort?: number
  coordinatorHttpValidatorApiPort?: number
  coordinatorP2PTcpPort?: number
  coordinatorP2PUdpPort?: number
  validatorP2PPort?: number
  validatorHttpApiPort?: number
  validatorWsApiPort?: number
}

export interface Node extends NewNode {
  id: number | bigint
  coordinatorStatus: CoordinatorStatus
  coordinatorPeersCount: number
  coordinatorHeadSlot: bigint
  coordinatorSyncDistance: bigint
  coordinatorPreviousJustifiedEpoch: bigint
  coordinatorCurrentJustifiedEpoch: bigint
  coordinatorFinalizedEpoch: bigint
  coordinatorPid: number
  coordinatorValidatorStatus: CoordinatorValidatorStatus
  coordinatorValidatorPid: number
  validatorStatus: ValidatorStatus
  validatorPeersCount: number
  validatorHeadSlot: bigint
  validatorSyncDistance: bigint
  validatorFinalizedSlot: bigint
  validatorPid: number
  workersCount: number
  coordinatorHttpApiPort: number
  coordinatorHttpValidatorApiPort: number
  coordinatorP2PTcpPort: number
  coordinatorP2PUdpPort: number
  validatorP2PPort: number
  validatorHttpApiPort: number
  validatorWsApiPort: number
  createdAt: string
  updatedAt: string
}
export const start = async (id: number): Promise<StatusResults> => {
  const result = await window.node.start(id)
  console.log(result)
  return result
}
export const stop = async (id: number): Promise<StatusResults> => {
  const result = await window.node.stop(id)
  console.log(result)
  return result
}

export const getAll = async (): Promise<Node[]> => {
  const result = await window.node.getAll()
  console.log(result)
  return result
}

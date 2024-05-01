import { Node, NewNode } from '@renderer/types/node'

import { LAST_SNAPSHOT_URL } from '@renderer/constants/env'
import { Snapshot } from '../types/node'

export enum StatusResult {
  success = 'success',
  fail = 'fail'
}

export type StatusResults = {
  coordinatorBeacon: StatusResult
  coordinatorValidator: StatusResult
  validator: StatusResult
}

export const start = async (id: number | bigint): Promise<StatusResults> => {
  return await window.node.start(id)
}
export const stop = async (id: number | bigint): Promise<StatusResults> => {
  return await window.node.stop(id)
}

export const restart = async (id: number | bigint): Promise<StatusResults> => {
  return await window.node.restart(id)
}

export const getAll = async (): Promise<Node[]> => {
  return await window.node.getAll()
}

export const getById = async (id: number | bigint): Promise<Node> => {
  return await window.node.getById(id)
}

export const add = async (newNode: NewNode): Promise<Node> => {
  return await window.node.add(newNode)
}

export const checkPorts = async (ports: number[]): Promise<boolean[]> => {
  return await window.node.checkPorts(ports)
}

export const remove = async (ids: number[] | bigint[], withData = false) => {
  return await window.node.remove(ids, withData)
}

export const getLastSnapshot = async (): Promise<Snapshot | null> => {
  const data = await window.os.fetchJSON(LAST_SNAPSHOT_URL)
  if (
    data &&
    typeof data === 'object' &&
    'url' in data &&
    data.url &&
    'hash' in data &&
    data.hash &&
    'size' in data &&
    data.size
  ) {
    return data as Snapshot
  }
  return null
}

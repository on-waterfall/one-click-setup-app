/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DATA_PATH: string
  readonly VITE_COORDINATOR_HTTP_API_PORT: string
  readonly VITE_COORDINATOR_HTTP_VALIDATOR_API_PORT: string
  readonly VITE_COORDINATOR_P2P_TCP_PORT: string
  readonly VITE_COORDINATOR_P2P_UDP_PORT: string
  readonly VITE_VALIDATOR_P2P_PORT: string
  readonly VITE_VALIDATOR_HTTP_API_PORT: string
  readonly VITE_VALIDATOR_WS_API_PORT: string
  readonly MAIN_VITE_COORDINATOR_BOOTNODE_TESTNET8: string
  readonly MAIN_VITE_VALIDATOR_BOOTNODE_TESTNET8: string
  readonly VITE_CHAIN_ID_TESTNET8: string
  readonly VITE_VALIDATOR_ADDRESS_TESTNET8: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface FallbackManagerInterface extends utils.Interface {
  functions: {
    "setFallbackHandler(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "setFallbackHandler"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "setFallbackHandler",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "setFallbackHandler",
    data: BytesLike
  ): Result;

  events: {
    "ChangedFallbackHandler(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedFallbackHandler"): EventFragment;
}

export interface ChangedFallbackHandlerEventObject {
  handler: string;
}
export type ChangedFallbackHandlerEvent = TypedEvent<
  [string],
  ChangedFallbackHandlerEventObject
>;

export type ChangedFallbackHandlerEventFilter =
  TypedEventFilter<ChangedFallbackHandlerEvent>;

export interface FallbackManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FallbackManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    setFallbackHandler(
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  setFallbackHandler(
    handler: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    setFallbackHandler(
      handler: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ChangedFallbackHandler(address)"(
      handler?: null
    ): ChangedFallbackHandlerEventFilter;
    ChangedFallbackHandler(handler?: null): ChangedFallbackHandlerEventFilter;
  };

  estimateGas: {
    setFallbackHandler(
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    setFallbackHandler(
      handler: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

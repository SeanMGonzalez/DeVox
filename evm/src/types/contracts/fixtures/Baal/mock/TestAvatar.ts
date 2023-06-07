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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface TestAvatarInterface extends utils.Interface {
  functions: {
    "disableModule(address,address)": FunctionFragment;
    "enableModule(address)": FunctionFragment;
    "execTransactionFromModule(address,uint256,bytes,uint8)": FunctionFragment;
    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": FunctionFragment;
    "getModulesPaginated(address,uint256)": FunctionFragment;
    "isModuleEnabled(address)": FunctionFragment;
    "module()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "disableModule"
      | "enableModule"
      | "execTransactionFromModule"
      | "execTransactionFromModuleReturnData"
      | "getModulesPaginated"
      | "isModuleEnabled"
      | "module"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "disableModule",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "enableModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModule",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execTransactionFromModuleReturnData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getModulesPaginated",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isModuleEnabled",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "module", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "disableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "execTransactionFromModuleReturnData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getModulesPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isModuleEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "module", data: BytesLike): Result;

  events: {};
}

export interface TestAvatar extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestAvatarInterface;

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
    disableModule(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enableModule(
      _module: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execTransactionFromModule(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execTransactionFromModuleReturnData(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getModulesPaginated(
      arg0: PromiseOrValue<string>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    isModuleEnabled(
      _module: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    module(overrides?: CallOverrides): Promise<[string]>;
  };

  disableModule(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enableModule(
    _module: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execTransactionFromModule(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operation: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execTransactionFromModuleReturnData(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operation: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getModulesPaginated(
    arg0: PromiseOrValue<string>,
    pageSize: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string[], string] & { array: string[]; next: string }>;

  isModuleEnabled(
    _module: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  module(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    disableModule(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    enableModule(
      _module: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    execTransactionFromModule(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    execTransactionFromModuleReturnData(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;

    getModulesPaginated(
      arg0: PromiseOrValue<string>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    isModuleEnabled(
      _module: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    module(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    disableModule(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enableModule(
      _module: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execTransactionFromModule(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execTransactionFromModuleReturnData(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getModulesPaginated(
      arg0: PromiseOrValue<string>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isModuleEnabled(
      _module: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    module(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    disableModule(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enableModule(
      _module: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execTransactionFromModule(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execTransactionFromModuleReturnData(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getModulesPaginated(
      arg0: PromiseOrValue<string>,
      pageSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isModuleEnabled(
      _module: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    module(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

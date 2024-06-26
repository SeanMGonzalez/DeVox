// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DonationReceived extends ethereum.Event {
  get params(): DonationReceived__Params {
    return new DonationReceived__Params(this);
  }
}

export class DonationReceived__Params {
  _event: DonationReceived;

  constructor(event: DonationReceived) {
    this._event = event;
  }

  get contributorAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baal(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get total(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get target(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get lootIssued(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get sharesIssued(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[8].value.toString();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TargetUpdated extends ethereum.Event {
  get params(): TargetUpdated__Params {
    return new TargetUpdated__Params(this);
  }
}

export class TargetUpdated__Params {
  _event: TargetUpdated;

  constructor(event: TargetUpdated) {
    this._event = event;
  }

  get target(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get balance(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DeVoxShamanV1 extends ethereum.SmartContract {
  static bind(address: Address): DeVoxShamanV1 {
    return new DeVoxShamanV1("DeVoxShamanV1", address);
  }

  baal(): Address {
    let result = super.call("baal", "baal():(address)", []);

    return result[0].toAddress();
  }

  try_baal(): ethereum.CallResult<Address> {
    let result = super.tryCall("baal", "baal():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  donations(param0: Address): BigInt {
    let result = super.call("donations", "donations(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_donations(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("donations", "donations(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenBalance(): BigInt {
    let result = super.call(
      "getTokenBalance",
      "getTokenBalance():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getTokenBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenBalance",
      "getTokenBalance():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lootPerUnit(): BigInt {
    let result = super.call("lootPerUnit", "lootPerUnit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lootPerUnit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lootPerUnit", "lootPerUnit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pricePerUnit(): BigInt {
    let result = super.call("pricePerUnit", "pricePerUnit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pricePerUnit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pricePerUnit", "pricePerUnit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  sharesPerMember(): BigInt {
    let result = super.call(
      "sharesPerMember",
      "sharesPerMember():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_sharesPerMember(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sharesPerMember",
      "sharesPerMember():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  target(): BigInt {
    let result = super.call("target", "target():(uint256)", []);

    return result[0].toBigInt();
  }

  try_target(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("target", "target():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): BigInt {
    let result = super.call("version", "version():(uint256)", []);

    return result[0].toBigInt();
  }

  try_version(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("version", "version():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _message(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class GetTokenBalanceCall extends ethereum.Call {
  get inputs(): GetTokenBalanceCall__Inputs {
    return new GetTokenBalanceCall__Inputs(this);
  }

  get outputs(): GetTokenBalanceCall__Outputs {
    return new GetTokenBalanceCall__Outputs(this);
  }
}

export class GetTokenBalanceCall__Inputs {
  _call: GetTokenBalanceCall;

  constructor(call: GetTokenBalanceCall) {
    this._call = call;
  }
}

export class GetTokenBalanceCall__Outputs {
  _call: GetTokenBalanceCall;

  constructor(call: GetTokenBalanceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _pricePerUnit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _lootPerUnit(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _sharesPerMember(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _target(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetTargetCall extends ethereum.Call {
  get inputs(): SetTargetCall__Inputs {
    return new SetTargetCall__Inputs(this);
  }

  get outputs(): SetTargetCall__Outputs {
    return new SetTargetCall__Outputs(this);
  }
}

export class SetTargetCall__Inputs {
  _call: SetTargetCall;

  constructor(call: SetTargetCall) {
    this._call = call;
  }

  get _target(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTargetCall__Outputs {
  _call: SetTargetCall;

  constructor(call: SetTargetCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateVersionCall extends ethereum.Call {
  get inputs(): UpdateVersionCall__Inputs {
    return new UpdateVersionCall__Inputs(this);
  }

  get outputs(): UpdateVersionCall__Outputs {
    return new UpdateVersionCall__Outputs(this);
  }
}

export class UpdateVersionCall__Inputs {
  _call: UpdateVersionCall;

  constructor(call: UpdateVersionCall) {
    this._call = call;
  }
}

export class UpdateVersionCall__Outputs {
  _call: UpdateVersionCall;

  constructor(call: UpdateVersionCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }
}

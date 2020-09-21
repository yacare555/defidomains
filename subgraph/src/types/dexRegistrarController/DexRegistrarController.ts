// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NameRegistered extends EthereumEvent {
  get params(): NameRegistered__Params {
    return new NameRegistered__Params(this);
  }
}

export class NameRegistered__Params {
  _event: NameRegistered;

  constructor(event: NameRegistered) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get label(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get cost(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get expires(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NameRenewed extends EthereumEvent {
  get params(): NameRenewed__Params {
    return new NameRenewed__Params(this);
  }
}

export class NameRenewed__Params {
  _event: NameRenewed;

  constructor(event: NameRenewed) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get label(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get cost(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expires(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewPriceOracle extends EthereumEvent {
  get params(): NewPriceOracle__Params {
    return new NewPriceOracle__Params(this);
  }
}

export class NewPriceOracle__Params {
  _event: NewPriceOracle;

  constructor(event: NewPriceOracle) {
    this._event = event;
  }

  get oracle(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
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

export class DexRegistrarController extends SmartContract {
  static bind(address: Address): DexRegistrarController {
    return new DexRegistrarController("DexRegistrarController", address);
  }

  supportsInterface(interfaceID: Bytes): boolean {
    let result = super.call("supportsInterface", [
      EthereumValue.fromFixedBytes(interfaceID)
    ]);

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceID: Bytes): CallResult<boolean> {
    let result = super.tryCall("supportsInterface", [
      EthereumValue.fromFixedBytes(interfaceID)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  commitments(param0: Bytes): BigInt {
    let result = super.call("commitments", [
      EthereumValue.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_commitments(param0: Bytes): CallResult<BigInt> {
    let result = super.tryCall("commitments", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  rentPrice(name: string, duration: BigInt): BigInt {
    let result = super.call("rentPrice", [
      EthereumValue.fromString(name),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);

    return result[0].toBigInt();
  }

  try_rentPrice(name: string, duration: BigInt): CallResult<BigInt> {
    let result = super.tryCall("rentPrice", [
      EthereumValue.fromString(name),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  MIN_REGISTRATION_DURATION(): BigInt {
    let result = super.call("MIN_REGISTRATION_DURATION", []);

    return result[0].toBigInt();
  }

  try_MIN_REGISTRATION_DURATION(): CallResult<BigInt> {
    let result = super.tryCall("MIN_REGISTRATION_DURATION", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  minCommitmentAge(): BigInt {
    let result = super.call("minCommitmentAge", []);

    return result[0].toBigInt();
  }

  try_minCommitmentAge(): CallResult<BigInt> {
    let result = super.tryCall("minCommitmentAge", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  valid(name: string): boolean {
    let result = super.call("valid", [EthereumValue.fromString(name)]);

    return result[0].toBoolean();
  }

  try_valid(name: string): CallResult<boolean> {
    let result = super.tryCall("valid", [EthereumValue.fromString(name)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  available(name: string): boolean {
    let result = super.call("available", [EthereumValue.fromString(name)]);

    return result[0].toBoolean();
  }

  try_available(name: string): CallResult<boolean> {
    let result = super.tryCall("available", [EthereumValue.fromString(name)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  maxCommitmentAge(): BigInt {
    let result = super.call("maxCommitmentAge", []);

    return result[0].toBigInt();
  }

  try_maxCommitmentAge(): CallResult<BigInt> {
    let result = super.tryCall("maxCommitmentAge", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  makeCommitment(name: string, owner: Address, secret: Bytes): Bytes {
    let result = super.call("makeCommitment", [
      EthereumValue.fromString(name),
      EthereumValue.fromAddress(owner),
      EthereumValue.fromFixedBytes(secret)
    ]);

    return result[0].toBytes();
  }

  try_makeCommitment(
    name: string,
    owner: Address,
    secret: Bytes
  ): CallResult<Bytes> {
    let result = super.tryCall("makeCommitment", [
      EthereumValue.fromString(name),
      EthereumValue.fromAddress(owner),
      EthereumValue.fromFixedBytes(secret)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }
}

export class WithdrawCall extends EthereumCall {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class SetPriceOracleCall extends EthereumCall {
  get inputs(): SetPriceOracleCall__Inputs {
    return new SetPriceOracleCall__Inputs(this);
  }

  get outputs(): SetPriceOracleCall__Outputs {
    return new SetPriceOracleCall__Outputs(this);
  }
}

export class SetPriceOracleCall__Inputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }

  get _prices(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPriceOracleCall__Outputs {
  _call: SetPriceOracleCall;

  constructor(call: SetPriceOracleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends EthereumCall {
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

export class SetCommitmentAgesCall extends EthereumCall {
  get inputs(): SetCommitmentAgesCall__Inputs {
    return new SetCommitmentAgesCall__Inputs(this);
  }

  get outputs(): SetCommitmentAgesCall__Outputs {
    return new SetCommitmentAgesCall__Outputs(this);
  }
}

export class SetCommitmentAgesCall__Inputs {
  _call: SetCommitmentAgesCall;

  constructor(call: SetCommitmentAgesCall) {
    this._call = call;
  }

  get _minCommitmentAge(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _maxCommitmentAge(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCommitmentAgesCall__Outputs {
  _call: SetCommitmentAgesCall;

  constructor(call: SetCommitmentAgesCall) {
    this._call = call;
  }
}

export class RegisterCall extends EthereumCall {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get secret(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RenewCall extends EthereumCall {
  get inputs(): RenewCall__Inputs {
    return new RenewCall__Inputs(this);
  }

  get outputs(): RenewCall__Outputs {
    return new RenewCall__Outputs(this);
  }
}

export class RenewCall__Inputs {
  _call: RenewCall;

  constructor(call: RenewCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get duration(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RenewCall__Outputs {
  _call: RenewCall;

  constructor(call: RenewCall) {
    this._call = call;
  }
}

export class CommitCall extends EthereumCall {
  get inputs(): CommitCall__Inputs {
    return new CommitCall__Inputs(this);
  }

  get outputs(): CommitCall__Outputs {
    return new CommitCall__Outputs(this);
  }
}

export class CommitCall__Inputs {
  _call: CommitCall;

  constructor(call: CommitCall) {
    this._call = call;
  }

  get commitment(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CommitCall__Outputs {
  _call: CommitCall;

  constructor(call: CommitCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
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

export class ConstructorCall extends EthereumCall {
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

  get _base(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _prices(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _minCommitmentAge(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _maxCommitmentAge(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

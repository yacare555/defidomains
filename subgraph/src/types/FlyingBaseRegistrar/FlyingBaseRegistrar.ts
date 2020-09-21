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

export class ControllerAdded extends EthereumEvent {
  get params(): ControllerAdded__Params {
    return new ControllerAdded__Params(this);
  }
}

export class ControllerAdded__Params {
  _event: ControllerAdded;

  constructor(event: ControllerAdded) {
    this._event = event;
  }

  get controller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ControllerRemoved extends EthereumEvent {
  get params(): ControllerRemoved__Params {
    return new ControllerRemoved__Params(this);
  }
}

export class ControllerRemoved__Params {
  _event: ControllerRemoved;

  constructor(event: ControllerRemoved) {
    this._event = event;
  }

  get controller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NameMigrated extends EthereumEvent {
  get params(): NameMigrated__Params {
    return new NameMigrated__Params(this);
  }
}

export class NameMigrated__Params {
  _event: NameMigrated;

  constructor(event: NameMigrated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get expires(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

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

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get expires(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get expires(): BigInt {
    return this._event.parameters[1].value.toBigInt();
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

export class Transfer extends EthereumEvent {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Approval extends EthereumEvent {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends EthereumEvent {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class FlyingBaseRegistrar extends SmartContract {
  static bind(address: Address): FlyingBaseRegistrar {
    return new FlyingBaseRegistrar("FlyingBaseRegistrar", address);
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

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", [
      EthereumValue.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): CallResult<Address> {
    let result = super.tryCall("getApproved", [
      EthereumValue.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  ens(): Address {
    let result = super.call("ens", []);

    return result[0].toAddress();
  }

  try_ens(): CallResult<Address> {
    let result = super.tryCall("ens", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  transferPeriodEnds(): BigInt {
    let result = super.call("transferPeriodEnds", []);

    return result[0].toBigInt();
  }

  try_transferPeriodEnds(): CallResult<BigInt> {
    let result = super.tryCall("transferPeriodEnds", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", [
      EthereumValue.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): CallResult<Address> {
    let result = super.tryCall("ownerOf", [
      EthereumValue.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  MIGRATION_LOCK_PERIOD(): BigInt {
    let result = super.call("MIGRATION_LOCK_PERIOD", []);

    return result[0].toBigInt();
  }

  try_MIGRATION_LOCK_PERIOD(): CallResult<BigInt> {
    let result = super.tryCall("MIGRATION_LOCK_PERIOD", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", [EthereumValue.fromAddress(owner)]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): CallResult<BigInt> {
    let result = super.tryCall("balanceOf", [EthereumValue.fromAddress(owner)]);
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

  available(id: BigInt): boolean {
    let result = super.call("available", [
      EthereumValue.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_available(id: BigInt): CallResult<boolean> {
    let result = super.tryCall("available", [
      EthereumValue.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  previousRegistrar(): Address {
    let result = super.call("previousRegistrar", []);

    return result[0].toAddress();
  }

  try_previousRegistrar(): CallResult<Address> {
    let result = super.tryCall("previousRegistrar", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  GRACE_PERIOD(): BigInt {
    let result = super.call("GRACE_PERIOD", []);

    return result[0].toBigInt();
  }

  try_GRACE_PERIOD(): CallResult<BigInt> {
    let result = super.tryCall("GRACE_PERIOD", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  renew(id: BigInt, duration: BigInt): BigInt {
    let result = super.call("renew", [
      EthereumValue.fromUnsignedBigInt(id),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);

    return result[0].toBigInt();
  }

  try_renew(id: BigInt, duration: BigInt): CallResult<BigInt> {
    let result = super.tryCall("renew", [
      EthereumValue.fromUnsignedBigInt(id),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  nameExpires(id: BigInt): BigInt {
    let result = super.call("nameExpires", [
      EthereumValue.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_nameExpires(id: BigInt): CallResult<BigInt> {
    let result = super.tryCall("nameExpires", [
      EthereumValue.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  controllers(param0: Address): boolean {
    let result = super.call("controllers", [EthereumValue.fromAddress(param0)]);

    return result[0].toBoolean();
  }

  try_controllers(param0: Address): CallResult<boolean> {
    let result = super.tryCall("controllers", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  baseNode(): Bytes {
    let result = super.call("baseNode", []);

    return result[0].toBytes();
  }

  try_baseNode(): CallResult<Bytes> {
    let result = super.tryCall("baseNode", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call("isApprovedForAll", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(operator)
    ]);

    return result[0].toBoolean();
  }

  try_isApprovedForAll(owner: Address, operator: Address): CallResult<boolean> {
    let result = super.tryCall("isApprovedForAll", [
      EthereumValue.fromAddress(owner),
      EthereumValue.fromAddress(operator)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  register(id: BigInt, owner: Address, duration: BigInt): BigInt {
    let result = super.call("register", [
      EthereumValue.fromUnsignedBigInt(id),
      EthereumValue.fromAddress(owner),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);

    return result[0].toBigInt();
  }

  try_register(
    id: BigInt,
    owner: Address,
    duration: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("register", [
      EthereumValue.fromUnsignedBigInt(id),
      EthereumValue.fromAddress(owner),
      EthereumValue.fromUnsignedBigInt(duration)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ApproveCall extends EthereumCall {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class TransferFromCall extends EthereumCall {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class ReclaimCall extends EthereumCall {
  get inputs(): ReclaimCall__Inputs {
    return new ReclaimCall__Inputs(this);
  }

  get outputs(): ReclaimCall__Outputs {
    return new ReclaimCall__Outputs(this);
  }
}

export class ReclaimCall__Inputs {
  _call: ReclaimCall;

  constructor(call: ReclaimCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ReclaimCall__Outputs {
  _call: ReclaimCall;

  constructor(call: ReclaimCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends EthereumCall {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetResolverCall extends EthereumCall {
  get inputs(): SetResolverCall__Inputs {
    return new SetResolverCall__Inputs(this);
  }

  get outputs(): SetResolverCall__Outputs {
    return new SetResolverCall__Outputs(this);
  }
}

export class SetResolverCall__Inputs {
  _call: SetResolverCall;

  constructor(call: SetResolverCall) {
    this._call = call;
  }

  get resolver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetResolverCall__Outputs {
  _call: SetResolverCall;

  constructor(call: SetResolverCall) {
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

export class SetApprovalForAllCall extends EthereumCall {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class AddControllerCall extends EthereumCall {
  get inputs(): AddControllerCall__Inputs {
    return new AddControllerCall__Inputs(this);
  }

  get outputs(): AddControllerCall__Outputs {
    return new AddControllerCall__Outputs(this);
  }
}

export class AddControllerCall__Inputs {
  _call: AddControllerCall;

  constructor(call: AddControllerCall) {
    this._call = call;
  }

  get controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddControllerCall__Outputs {
  _call: AddControllerCall;

  constructor(call: AddControllerCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends EthereumCall {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
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

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
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

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AcceptRegistrarTransferCall extends EthereumCall {
  get inputs(): AcceptRegistrarTransferCall__Inputs {
    return new AcceptRegistrarTransferCall__Inputs(this);
  }

  get outputs(): AcceptRegistrarTransferCall__Outputs {
    return new AcceptRegistrarTransferCall__Outputs(this);
  }
}

export class AcceptRegistrarTransferCall__Inputs {
  _call: AcceptRegistrarTransferCall;

  constructor(call: AcceptRegistrarTransferCall) {
    this._call = call;
  }

  get label(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get deed(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AcceptRegistrarTransferCall__Outputs {
  _call: AcceptRegistrarTransferCall;

  constructor(call: AcceptRegistrarTransferCall) {
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

export class RemoveControllerCall extends EthereumCall {
  get inputs(): RemoveControllerCall__Inputs {
    return new RemoveControllerCall__Inputs(this);
  }

  get outputs(): RemoveControllerCall__Outputs {
    return new RemoveControllerCall__Outputs(this);
  }
}

export class RemoveControllerCall__Inputs {
  _call: RemoveControllerCall;

  constructor(call: RemoveControllerCall) {
    this._call = call;
  }

  get controller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveControllerCall__Outputs {
  _call: RemoveControllerCall;

  constructor(call: RemoveControllerCall) {
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

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get _ens(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _previousRegistrar(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _baseNode(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _transferPeriodEnds(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

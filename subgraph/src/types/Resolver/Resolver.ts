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

export class AuthorisationChanged extends EthereumEvent {
  get params(): AuthorisationChanged__Params {
    return new AuthorisationChanged__Params(this);
  }
}

export class AuthorisationChanged__Params {
  _event: AuthorisationChanged;

  constructor(event: AuthorisationChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get target(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get isAuthorised(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class TextChanged extends EthereumEvent {
  get params(): TextChanged__Params {
    return new TextChanged__Params(this);
  }
}

export class TextChanged__Params {
  _event: TextChanged;

  constructor(event: TextChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get indexedKey(): string {
    return this._event.parameters[1].value.toString();
  }

  get key(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class PubkeyChanged extends EthereumEvent {
  get params(): PubkeyChanged__Params {
    return new PubkeyChanged__Params(this);
  }
}

export class PubkeyChanged__Params {
  _event: PubkeyChanged;

  constructor(event: PubkeyChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get x(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get y(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class NameChanged extends EthereumEvent {
  get params(): NameChanged__Params {
    return new NameChanged__Params(this);
  }
}

export class NameChanged__Params {
  _event: NameChanged;

  constructor(event: NameChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class InterfaceChanged extends EthereumEvent {
  get params(): InterfaceChanged__Params {
    return new InterfaceChanged__Params(this);
  }
}

export class InterfaceChanged__Params {
  _event: InterfaceChanged;

  constructor(event: InterfaceChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get interfaceID(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get implementer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ContenthashChanged extends EthereumEvent {
  get params(): ContenthashChanged__Params {
    return new ContenthashChanged__Params(this);
  }
}

export class ContenthashChanged__Params {
  _event: ContenthashChanged;

  constructor(event: ContenthashChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get hash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class AddrChanged extends EthereumEvent {
  get params(): AddrChanged__Params {
    return new AddrChanged__Params(this);
  }
}

export class AddrChanged__Params {
  _event: AddrChanged;

  constructor(event: AddrChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get a(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AddressChanged extends EthereumEvent {
  get params(): AddressChanged__Params {
    return new AddressChanged__Params(this);
  }
}

export class AddressChanged__Params {
  _event: AddressChanged;

  constructor(event: AddressChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get coinType(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newAddress(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ABIChanged extends EthereumEvent {
  get params(): ABIChanged__Params {
    return new ABIChanged__Params(this);
  }
}

export class ABIChanged__Params {
  _event: ABIChanged;

  constructor(event: ABIChanged) {
    this._event = event;
  }

  get node(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get contentType(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Resolver__ABIResult {
  value0: BigInt;
  value1: Bytes;

  constructor(value0: BigInt, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromBytes(this.value1));
    return map;
  }
}

export class Resolver__pubkeyResult {
  value0: Bytes;
  value1: Bytes;

  constructor(value0: Bytes, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromFixedBytes(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    return map;
  }
}

export class Resolver extends SmartContract {
  static bind(address: Address): Resolver {
    return new Resolver("Resolver", address);
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

  interfaceImplementer(node: Bytes, interfaceID: Bytes): Address {
    let result = super.call("interfaceImplementer", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromFixedBytes(interfaceID)
    ]);

    return result[0].toAddress();
  }

  try_interfaceImplementer(
    node: Bytes,
    interfaceID: Bytes
  ): CallResult<Address> {
    let result = super.tryCall("interfaceImplementer", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromFixedBytes(interfaceID)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  ABI(node: Bytes, contentTypes: BigInt): Resolver__ABIResult {
    let result = super.call("ABI", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromUnsignedBigInt(contentTypes)
    ]);

    return new Resolver__ABIResult(result[0].toBigInt(), result[1].toBytes());
  }

  try_ABI(node: Bytes, contentTypes: BigInt): CallResult<Resolver__ABIResult> {
    let result = super.tryCall("ABI", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromUnsignedBigInt(contentTypes)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Resolver__ABIResult(value[0].toBigInt(), value[1].toBytes())
    );
  }

  addr(node: Bytes): Address {
    let result = super.call("addr", [EthereumValue.fromFixedBytes(node)]);

    return result[0].toAddress();
  }

  try_addr(node: Bytes): CallResult<Address> {
    let result = super.tryCall("addr", [EthereumValue.fromFixedBytes(node)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  text(node: Bytes, key: string): string {
    let result = super.call("text", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromString(key)
    ]);

    return result[0].toString();
  }

  try_text(node: Bytes, key: string): CallResult<string> {
    let result = super.tryCall("text", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromString(key)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  name(node: Bytes): string {
    let result = super.call("name", [EthereumValue.fromFixedBytes(node)]);

    return result[0].toString();
  }

  try_name(node: Bytes): CallResult<string> {
    let result = super.tryCall("name", [EthereumValue.fromFixedBytes(node)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toString());
  }

  contenthash(node: Bytes): Bytes {
    let result = super.call("contenthash", [
      EthereumValue.fromFixedBytes(node)
    ]);

    return result[0].toBytes();
  }

  try_contenthash(node: Bytes): CallResult<Bytes> {
    let result = super.tryCall("contenthash", [
      EthereumValue.fromFixedBytes(node)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  pubkey(node: Bytes): Resolver__pubkeyResult {
    let result = super.call("pubkey", [EthereumValue.fromFixedBytes(node)]);

    return new Resolver__pubkeyResult(result[0].toBytes(), result[1].toBytes());
  }

  try_pubkey(node: Bytes): CallResult<Resolver__pubkeyResult> {
    let result = super.tryCall("pubkey", [EthereumValue.fromFixedBytes(node)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Resolver__pubkeyResult(value[0].toBytes(), value[1].toBytes())
    );
  }

  addr1(node: Bytes, coinType: BigInt): Bytes {
    let result = super.call("addr", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromUnsignedBigInt(coinType)
    ]);

    return result[0].toBytes();
  }

  try_addr1(node: Bytes, coinType: BigInt): CallResult<Bytes> {
    let result = super.tryCall("addr", [
      EthereumValue.fromFixedBytes(node),
      EthereumValue.fromUnsignedBigInt(coinType)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  authorisations(param0: Bytes, param1: Address, param2: Address): boolean {
    let result = super.call("authorisations", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromAddress(param2)
    ]);

    return result[0].toBoolean();
  }

  try_authorisations(
    param0: Bytes,
    param1: Address,
    param2: Address
  ): CallResult<boolean> {
    let result = super.tryCall("authorisations", [
      EthereumValue.fromFixedBytes(param0),
      EthereumValue.fromAddress(param1),
      EthereumValue.fromAddress(param2)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }
}

export class SetTextCall extends EthereumCall {
  get inputs(): SetTextCall__Inputs {
    return new SetTextCall__Inputs(this);
  }

  get outputs(): SetTextCall__Outputs {
    return new SetTextCall__Outputs(this);
  }
}

export class SetTextCall__Inputs {
  _call: SetTextCall;

  constructor(call: SetTextCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get key(): string {
    return this._call.inputValues[1].value.toString();
  }

  get value(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class SetTextCall__Outputs {
  _call: SetTextCall;

  constructor(call: SetTextCall) {
    this._call = call;
  }
}

export class SetPubkeyCall extends EthereumCall {
  get inputs(): SetPubkeyCall__Inputs {
    return new SetPubkeyCall__Inputs(this);
  }

  get outputs(): SetPubkeyCall__Outputs {
    return new SetPubkeyCall__Outputs(this);
  }
}

export class SetPubkeyCall__Inputs {
  _call: SetPubkeyCall;

  constructor(call: SetPubkeyCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get x(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get y(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetPubkeyCall__Outputs {
  _call: SetPubkeyCall;

  constructor(call: SetPubkeyCall) {
    this._call = call;
  }
}

export class SetContenthashCall extends EthereumCall {
  get inputs(): SetContenthashCall__Inputs {
    return new SetContenthashCall__Inputs(this);
  }

  get outputs(): SetContenthashCall__Outputs {
    return new SetContenthashCall__Outputs(this);
  }
}

export class SetContenthashCall__Inputs {
  _call: SetContenthashCall;

  constructor(call: SetContenthashCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get hash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetContenthashCall__Outputs {
  _call: SetContenthashCall;

  constructor(call: SetContenthashCall) {
    this._call = call;
  }
}

export class SetAuthorisationCall extends EthereumCall {
  get inputs(): SetAuthorisationCall__Inputs {
    return new SetAuthorisationCall__Inputs(this);
  }

  get outputs(): SetAuthorisationCall__Outputs {
    return new SetAuthorisationCall__Outputs(this);
  }
}

export class SetAuthorisationCall__Inputs {
  _call: SetAuthorisationCall;

  constructor(call: SetAuthorisationCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get target(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get isAuthorised(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetAuthorisationCall__Outputs {
  _call: SetAuthorisationCall;

  constructor(call: SetAuthorisationCall) {
    this._call = call;
  }
}

export class SetABICall extends EthereumCall {
  get inputs(): SetABICall__Inputs {
    return new SetABICall__Inputs(this);
  }

  get outputs(): SetABICall__Outputs {
    return new SetABICall__Outputs(this);
  }
}

export class SetABICall__Inputs {
  _call: SetABICall;

  constructor(call: SetABICall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get contentType(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetABICall__Outputs {
  _call: SetABICall;

  constructor(call: SetABICall) {
    this._call = call;
  }
}

export class SetNameCall extends EthereumCall {
  get inputs(): SetNameCall__Inputs {
    return new SetNameCall__Inputs(this);
  }

  get outputs(): SetNameCall__Outputs {
    return new SetNameCall__Outputs(this);
  }
}

export class SetNameCall__Inputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetNameCall__Outputs {
  _call: SetNameCall;

  constructor(call: SetNameCall) {
    this._call = call;
  }
}

export class SetAddrCall extends EthereumCall {
  get inputs(): SetAddrCall__Inputs {
    return new SetAddrCall__Inputs(this);
  }

  get outputs(): SetAddrCall__Outputs {
    return new SetAddrCall__Outputs(this);
  }
}

export class SetAddrCall__Inputs {
  _call: SetAddrCall;

  constructor(call: SetAddrCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get coinType(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get a(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SetAddrCall__Outputs {
  _call: SetAddrCall;

  constructor(call: SetAddrCall) {
    this._call = call;
  }
}

export class SetAddr1Call extends EthereumCall {
  get inputs(): SetAddr1Call__Inputs {
    return new SetAddr1Call__Inputs(this);
  }

  get outputs(): SetAddr1Call__Outputs {
    return new SetAddr1Call__Outputs(this);
  }
}

export class SetAddr1Call__Inputs {
  _call: SetAddr1Call;

  constructor(call: SetAddr1Call) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get a(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAddr1Call__Outputs {
  _call: SetAddr1Call;

  constructor(call: SetAddr1Call) {
    this._call = call;
  }
}

export class SetInterfaceCall extends EthereumCall {
  get inputs(): SetInterfaceCall__Inputs {
    return new SetInterfaceCall__Inputs(this);
  }

  get outputs(): SetInterfaceCall__Outputs {
    return new SetInterfaceCall__Outputs(this);
  }
}

export class SetInterfaceCall__Inputs {
  _call: SetInterfaceCall;

  constructor(call: SetInterfaceCall) {
    this._call = call;
  }

  get node(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get interfaceID(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get implementer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetInterfaceCall__Outputs {
  _call: SetInterfaceCall;

  constructor(call: SetInterfaceCall) {
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

  get _ens(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

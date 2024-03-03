//
//  Generated code. Do not modify.
//  source: my-project-messages.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'my-project-messages.pbenum.dart';

export 'my-project-messages.pbenum.dart';

class UpdateConfiguration extends $pb.GeneratedMessage {
  factory UpdateConfiguration({
    UpdateType? updateType,
    $core.int? updateIntervalInMs,
  }) {
    final $result = create();
    if (updateType != null) {
      $result.updateType = updateType;
    }
    if (updateIntervalInMs != null) {
      $result.updateIntervalInMs = updateIntervalInMs;
    }
    return $result;
  }
  UpdateConfiguration._() : super();
  factory UpdateConfiguration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdateConfiguration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdateConfiguration', createEmptyInstance: create)
    ..e<UpdateType>(1, _omitFieldNames ? '' : 'updateType', $pb.PbFieldType.OE, protoName: 'updateType', defaultOrMaker: UpdateType.UpdateType_NotSet, valueOf: UpdateType.valueOf, enumValues: UpdateType.values)
    ..a<$core.int>(2, _omitFieldNames ? '' : 'updateIntervalInMs', $pb.PbFieldType.OU3, protoName: 'updateIntervalInMs')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdateConfiguration clone() => UpdateConfiguration()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdateConfiguration copyWith(void Function(UpdateConfiguration) updates) => super.copyWith((message) => updates(message as UpdateConfiguration)) as UpdateConfiguration;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdateConfiguration create() => UpdateConfiguration._();
  UpdateConfiguration createEmptyInstance() => create();
  static $pb.PbList<UpdateConfiguration> createRepeated() => $pb.PbList<UpdateConfiguration>();
  @$core.pragma('dart2js:noInline')
  static UpdateConfiguration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdateConfiguration>(create);
  static UpdateConfiguration? _defaultInstance;

  @$pb.TagNumber(1)
  UpdateType get updateType => $_getN(0);
  @$pb.TagNumber(1)
  set updateType(UpdateType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUpdateType() => $_has(0);
  @$pb.TagNumber(1)
  void clearUpdateType() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get updateIntervalInMs => $_getIZ(1);
  @$pb.TagNumber(2)
  set updateIntervalInMs($core.int v) { $_setUnsignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasUpdateIntervalInMs() => $_has(1);
  @$pb.TagNumber(2)
  void clearUpdateIntervalInMs() => clearField(2);
}

class SetUpdateConfiguration extends $pb.GeneratedMessage {
  factory SetUpdateConfiguration({
    UpdateConfiguration? updateConfiguration,
    $core.bool? saveConfiguration,
  }) {
    final $result = create();
    if (updateConfiguration != null) {
      $result.updateConfiguration = updateConfiguration;
    }
    if (saveConfiguration != null) {
      $result.saveConfiguration = saveConfiguration;
    }
    return $result;
  }
  SetUpdateConfiguration._() : super();
  factory SetUpdateConfiguration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetUpdateConfiguration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'SetUpdateConfiguration', createEmptyInstance: create)
    ..aOM<UpdateConfiguration>(1, _omitFieldNames ? '' : 'updateConfiguration', protoName: 'updateConfiguration', subBuilder: UpdateConfiguration.create)
    ..aOB(2, _omitFieldNames ? '' : 'saveConfiguration', protoName: 'saveConfiguration')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetUpdateConfiguration clone() => SetUpdateConfiguration()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetUpdateConfiguration copyWith(void Function(SetUpdateConfiguration) updates) => super.copyWith((message) => updates(message as SetUpdateConfiguration)) as SetUpdateConfiguration;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static SetUpdateConfiguration create() => SetUpdateConfiguration._();
  SetUpdateConfiguration createEmptyInstance() => create();
  static $pb.PbList<SetUpdateConfiguration> createRepeated() => $pb.PbList<SetUpdateConfiguration>();
  @$core.pragma('dart2js:noInline')
  static SetUpdateConfiguration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetUpdateConfiguration>(create);
  static SetUpdateConfiguration? _defaultInstance;

  @$pb.TagNumber(1)
  UpdateConfiguration get updateConfiguration => $_getN(0);
  @$pb.TagNumber(1)
  set updateConfiguration(UpdateConfiguration v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUpdateConfiguration() => $_has(0);
  @$pb.TagNumber(1)
  void clearUpdateConfiguration() => clearField(1);
  @$pb.TagNumber(1)
  UpdateConfiguration ensureUpdateConfiguration() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.bool get saveConfiguration => $_getBF(1);
  @$pb.TagNumber(2)
  set saveConfiguration($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSaveConfiguration() => $_has(1);
  @$pb.TagNumber(2)
  void clearSaveConfiguration() => clearField(2);
}

class HatConfiguration extends $pb.GeneratedMessage {
  factory HatConfiguration({
    $core.bool? rotateImage,
  }) {
    final $result = create();
    if (rotateImage != null) {
      $result.rotateImage = rotateImage;
    }
    return $result;
  }
  HatConfiguration._() : super();
  factory HatConfiguration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory HatConfiguration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'HatConfiguration', createEmptyInstance: create)
    ..aOB(1, _omitFieldNames ? '' : 'rotateImage', protoName: 'rotateImage')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  HatConfiguration clone() => HatConfiguration()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  HatConfiguration copyWith(void Function(HatConfiguration) updates) => super.copyWith((message) => updates(message as HatConfiguration)) as HatConfiguration;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static HatConfiguration create() => HatConfiguration._();
  HatConfiguration createEmptyInstance() => create();
  static $pb.PbList<HatConfiguration> createRepeated() => $pb.PbList<HatConfiguration>();
  @$core.pragma('dart2js:noInline')
  static HatConfiguration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<HatConfiguration>(create);
  static HatConfiguration? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get rotateImage => $_getBF(0);
  @$pb.TagNumber(1)
  set rotateImage($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRotateImage() => $_has(0);
  @$pb.TagNumber(1)
  void clearRotateImage() => clearField(1);
}

class SetHatConfiguration extends $pb.GeneratedMessage {
  factory SetHatConfiguration({
    HatConfiguration? hatConfiguration,
    $core.bool? saveConfiguration,
  }) {
    final $result = create();
    if (hatConfiguration != null) {
      $result.hatConfiguration = hatConfiguration;
    }
    if (saveConfiguration != null) {
      $result.saveConfiguration = saveConfiguration;
    }
    return $result;
  }
  SetHatConfiguration._() : super();
  factory SetHatConfiguration.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetHatConfiguration.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'SetHatConfiguration', createEmptyInstance: create)
    ..aOM<HatConfiguration>(1, _omitFieldNames ? '' : 'hatConfiguration', protoName: 'hatConfiguration', subBuilder: HatConfiguration.create)
    ..aOB(2, _omitFieldNames ? '' : 'saveConfiguration', protoName: 'saveConfiguration')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetHatConfiguration clone() => SetHatConfiguration()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetHatConfiguration copyWith(void Function(SetHatConfiguration) updates) => super.copyWith((message) => updates(message as SetHatConfiguration)) as SetHatConfiguration;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static SetHatConfiguration create() => SetHatConfiguration._();
  SetHatConfiguration createEmptyInstance() => create();
  static $pb.PbList<SetHatConfiguration> createRepeated() => $pb.PbList<SetHatConfiguration>();
  @$core.pragma('dart2js:noInline')
  static SetHatConfiguration getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetHatConfiguration>(create);
  static SetHatConfiguration? _defaultInstance;

  @$pb.TagNumber(1)
  HatConfiguration get hatConfiguration => $_getN(0);
  @$pb.TagNumber(1)
  set hatConfiguration(HatConfiguration v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasHatConfiguration() => $_has(0);
  @$pb.TagNumber(1)
  void clearHatConfiguration() => clearField(1);
  @$pb.TagNumber(1)
  HatConfiguration ensureHatConfiguration() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.bool get saveConfiguration => $_getBF(1);
  @$pb.TagNumber(2)
  set saveConfiguration($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSaveConfiguration() => $_has(1);
  @$pb.TagNumber(2)
  void clearSaveConfiguration() => clearField(2);
}

enum MyProjectCommand_Command {
  noArgCommand, 
  showFileImage, 
  setUpdateConfiguration, 
  setHatConfiguration, 
  notSet
}

class MyProjectCommand extends $pb.GeneratedMessage {
  factory MyProjectCommand({
    NoArgCommands? noArgCommand,
    $core.String? showFileImage,
    SetUpdateConfiguration? setUpdateConfiguration,
    SetHatConfiguration? setHatConfiguration,
  }) {
    final $result = create();
    if (noArgCommand != null) {
      $result.noArgCommand = noArgCommand;
    }
    if (showFileImage != null) {
      $result.showFileImage = showFileImage;
    }
    if (setUpdateConfiguration != null) {
      $result.setUpdateConfiguration = setUpdateConfiguration;
    }
    if (setHatConfiguration != null) {
      $result.setHatConfiguration = setHatConfiguration;
    }
    return $result;
  }
  MyProjectCommand._() : super();
  factory MyProjectCommand.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MyProjectCommand.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static const $core.Map<$core.int, MyProjectCommand_Command> _MyProjectCommand_CommandByTag = {
    1 : MyProjectCommand_Command.noArgCommand,
    2 : MyProjectCommand_Command.showFileImage,
    3 : MyProjectCommand_Command.setUpdateConfiguration,
    4 : MyProjectCommand_Command.setHatConfiguration,
    0 : MyProjectCommand_Command.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'MyProjectCommand', createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4])
    ..e<NoArgCommands>(1, _omitFieldNames ? '' : 'noArgCommand', $pb.PbFieldType.OE, protoName: 'noArgCommand', defaultOrMaker: NoArgCommands.Nac_NotSet, valueOf: NoArgCommands.valueOf, enumValues: NoArgCommands.values)
    ..aOS(2, _omitFieldNames ? '' : 'showFileImage', protoName: 'showFileImage')
    ..aOM<SetUpdateConfiguration>(3, _omitFieldNames ? '' : 'setUpdateConfiguration', protoName: 'setUpdateConfiguration', subBuilder: SetUpdateConfiguration.create)
    ..aOM<SetHatConfiguration>(4, _omitFieldNames ? '' : 'setHatConfiguration', protoName: 'setHatConfiguration', subBuilder: SetHatConfiguration.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MyProjectCommand clone() => MyProjectCommand()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MyProjectCommand copyWith(void Function(MyProjectCommand) updates) => super.copyWith((message) => updates(message as MyProjectCommand)) as MyProjectCommand;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static MyProjectCommand create() => MyProjectCommand._();
  MyProjectCommand createEmptyInstance() => create();
  static $pb.PbList<MyProjectCommand> createRepeated() => $pb.PbList<MyProjectCommand>();
  @$core.pragma('dart2js:noInline')
  static MyProjectCommand getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MyProjectCommand>(create);
  static MyProjectCommand? _defaultInstance;

  MyProjectCommand_Command whichCommand() => _MyProjectCommand_CommandByTag[$_whichOneof(0)]!;
  void clearCommand() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  NoArgCommands get noArgCommand => $_getN(0);
  @$pb.TagNumber(1)
  set noArgCommand(NoArgCommands v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasNoArgCommand() => $_has(0);
  @$pb.TagNumber(1)
  void clearNoArgCommand() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get showFileImage => $_getSZ(1);
  @$pb.TagNumber(2)
  set showFileImage($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasShowFileImage() => $_has(1);
  @$pb.TagNumber(2)
  void clearShowFileImage() => clearField(2);

  @$pb.TagNumber(3)
  SetUpdateConfiguration get setUpdateConfiguration => $_getN(2);
  @$pb.TagNumber(3)
  set setUpdateConfiguration(SetUpdateConfiguration v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasSetUpdateConfiguration() => $_has(2);
  @$pb.TagNumber(3)
  void clearSetUpdateConfiguration() => clearField(3);
  @$pb.TagNumber(3)
  SetUpdateConfiguration ensureSetUpdateConfiguration() => $_ensure(2);

  @$pb.TagNumber(4)
  SetHatConfiguration get setHatConfiguration => $_getN(3);
  @$pb.TagNumber(4)
  set setHatConfiguration(SetHatConfiguration v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasSetHatConfiguration() => $_has(3);
  @$pb.TagNumber(4)
  void clearSetHatConfiguration() => clearField(4);
  @$pb.TagNumber(4)
  SetHatConfiguration ensureSetHatConfiguration() => $_ensure(3);
}

class InvalidCommandResponse extends $pb.GeneratedMessage {
  factory InvalidCommandResponse({
    $core.String? message,
  }) {
    final $result = create();
    if (message != null) {
      $result.message = message;
    }
    return $result;
  }
  InvalidCommandResponse._() : super();
  factory InvalidCommandResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory InvalidCommandResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'InvalidCommandResponse', createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'message')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  InvalidCommandResponse clone() => InvalidCommandResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  InvalidCommandResponse copyWith(void Function(InvalidCommandResponse) updates) => super.copyWith((message) => updates(message as InvalidCommandResponse)) as InvalidCommandResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static InvalidCommandResponse create() => InvalidCommandResponse._();
  InvalidCommandResponse createEmptyInstance() => create();
  static $pb.PbList<InvalidCommandResponse> createRepeated() => $pb.PbList<InvalidCommandResponse>();
  @$core.pragma('dart2js:noInline')
  static InvalidCommandResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<InvalidCommandResponse>(create);
  static InvalidCommandResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get message => $_getSZ(0);
  @$pb.TagNumber(1)
  set message($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);
}

class HatDetailsResponse extends $pb.GeneratedMessage {
  factory HatDetailsResponse({
    UpdateConfiguration? updateConfiguration,
    HatConfiguration? hatConfiguration,
    $core.String? activeImageFile,
    $core.String? activeImageLabel,
  }) {
    final $result = create();
    if (updateConfiguration != null) {
      $result.updateConfiguration = updateConfiguration;
    }
    if (hatConfiguration != null) {
      $result.hatConfiguration = hatConfiguration;
    }
    if (activeImageFile != null) {
      $result.activeImageFile = activeImageFile;
    }
    if (activeImageLabel != null) {
      $result.activeImageLabel = activeImageLabel;
    }
    return $result;
  }
  HatDetailsResponse._() : super();
  factory HatDetailsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory HatDetailsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'HatDetailsResponse', createEmptyInstance: create)
    ..aOM<UpdateConfiguration>(1, _omitFieldNames ? '' : 'updateConfiguration', protoName: 'updateConfiguration', subBuilder: UpdateConfiguration.create)
    ..aOM<HatConfiguration>(2, _omitFieldNames ? '' : 'hatConfiguration', protoName: 'hatConfiguration', subBuilder: HatConfiguration.create)
    ..aOS(3, _omitFieldNames ? '' : 'activeImageFile', protoName: 'activeImageFile')
    ..aOS(4, _omitFieldNames ? '' : 'activeImageLabel', protoName: 'activeImageLabel')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  HatDetailsResponse clone() => HatDetailsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  HatDetailsResponse copyWith(void Function(HatDetailsResponse) updates) => super.copyWith((message) => updates(message as HatDetailsResponse)) as HatDetailsResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static HatDetailsResponse create() => HatDetailsResponse._();
  HatDetailsResponse createEmptyInstance() => create();
  static $pb.PbList<HatDetailsResponse> createRepeated() => $pb.PbList<HatDetailsResponse>();
  @$core.pragma('dart2js:noInline')
  static HatDetailsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<HatDetailsResponse>(create);
  static HatDetailsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  UpdateConfiguration get updateConfiguration => $_getN(0);
  @$pb.TagNumber(1)
  set updateConfiguration(UpdateConfiguration v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUpdateConfiguration() => $_has(0);
  @$pb.TagNumber(1)
  void clearUpdateConfiguration() => clearField(1);
  @$pb.TagNumber(1)
  UpdateConfiguration ensureUpdateConfiguration() => $_ensure(0);

  @$pb.TagNumber(2)
  HatConfiguration get hatConfiguration => $_getN(1);
  @$pb.TagNumber(2)
  set hatConfiguration(HatConfiguration v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasHatConfiguration() => $_has(1);
  @$pb.TagNumber(2)
  void clearHatConfiguration() => clearField(2);
  @$pb.TagNumber(2)
  HatConfiguration ensureHatConfiguration() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get activeImageFile => $_getSZ(2);
  @$pb.TagNumber(3)
  set activeImageFile($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasActiveImageFile() => $_has(2);
  @$pb.TagNumber(3)
  void clearActiveImageFile() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get activeImageLabel => $_getSZ(3);
  @$pb.TagNumber(4)
  set activeImageLabel($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasActiveImageLabel() => $_has(3);
  @$pb.TagNumber(4)
  void clearActiveImageLabel() => clearField(4);
}

class FirmwareDetailsResponse extends $pb.GeneratedMessage {
  factory FirmwareDetailsResponse({
    $core.String? version,
    $core.String? buildTime,
  }) {
    final $result = create();
    if (version != null) {
      $result.version = version;
    }
    if (buildTime != null) {
      $result.buildTime = buildTime;
    }
    return $result;
  }
  FirmwareDetailsResponse._() : super();
  factory FirmwareDetailsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FirmwareDetailsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'FirmwareDetailsResponse', createEmptyInstance: create)
    ..aOS(1, _omitFieldNames ? '' : 'version')
    ..aOS(2, _omitFieldNames ? '' : 'buildTime', protoName: 'buildTime')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FirmwareDetailsResponse clone() => FirmwareDetailsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FirmwareDetailsResponse copyWith(void Function(FirmwareDetailsResponse) updates) => super.copyWith((message) => updates(message as FirmwareDetailsResponse)) as FirmwareDetailsResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static FirmwareDetailsResponse create() => FirmwareDetailsResponse._();
  FirmwareDetailsResponse createEmptyInstance() => create();
  static $pb.PbList<FirmwareDetailsResponse> createRepeated() => $pb.PbList<FirmwareDetailsResponse>();
  @$core.pragma('dart2js:noInline')
  static FirmwareDetailsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FirmwareDetailsResponse>(create);
  static FirmwareDetailsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get buildTime => $_getSZ(1);
  @$pb.TagNumber(2)
  set buildTime($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBuildTime() => $_has(1);
  @$pb.TagNumber(2)
  void clearBuildTime() => clearField(2);
}

class UpdateResponse extends $pb.GeneratedMessage {
  factory UpdateResponse({
    $core.int? boardUptimeInMs,
  }) {
    final $result = create();
    if (boardUptimeInMs != null) {
      $result.boardUptimeInMs = boardUptimeInMs;
    }
    return $result;
  }
  UpdateResponse._() : super();
  factory UpdateResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory UpdateResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'UpdateResponse', createEmptyInstance: create)
    ..a<$core.int>(1, _omitFieldNames ? '' : 'boardUptimeInMs', $pb.PbFieldType.OU3, protoName: 'boardUptimeInMs')
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  UpdateResponse clone() => UpdateResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  UpdateResponse copyWith(void Function(UpdateResponse) updates) => super.copyWith((message) => updates(message as UpdateResponse)) as UpdateResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static UpdateResponse create() => UpdateResponse._();
  UpdateResponse createEmptyInstance() => create();
  static $pb.PbList<UpdateResponse> createRepeated() => $pb.PbList<UpdateResponse>();
  @$core.pragma('dart2js:noInline')
  static UpdateResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<UpdateResponse>(create);
  static UpdateResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get boardUptimeInMs => $_getIZ(0);
  @$pb.TagNumber(1)
  set boardUptimeInMs($core.int v) { $_setUnsignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBoardUptimeInMs() => $_has(0);
  @$pb.TagNumber(1)
  void clearBoardUptimeInMs() => clearField(1);
}

enum MyProjectResponse_Response {
  invalidCommandResponse, 
  hatDetailsResponse, 
  firmwareDetailsResponse, 
  updateResponse, 
  notSet
}

class MyProjectResponse extends $pb.GeneratedMessage {
  factory MyProjectResponse({
    InvalidCommandResponse? invalidCommandResponse,
    HatDetailsResponse? hatDetailsResponse,
    FirmwareDetailsResponse? firmwareDetailsResponse,
    UpdateResponse? updateResponse,
  }) {
    final $result = create();
    if (invalidCommandResponse != null) {
      $result.invalidCommandResponse = invalidCommandResponse;
    }
    if (hatDetailsResponse != null) {
      $result.hatDetailsResponse = hatDetailsResponse;
    }
    if (firmwareDetailsResponse != null) {
      $result.firmwareDetailsResponse = firmwareDetailsResponse;
    }
    if (updateResponse != null) {
      $result.updateResponse = updateResponse;
    }
    return $result;
  }
  MyProjectResponse._() : super();
  factory MyProjectResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory MyProjectResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);

  static const $core.Map<$core.int, MyProjectResponse_Response> _MyProjectResponse_ResponseByTag = {
    1 : MyProjectResponse_Response.invalidCommandResponse,
    2 : MyProjectResponse_Response.hatDetailsResponse,
    3 : MyProjectResponse_Response.firmwareDetailsResponse,
    4 : MyProjectResponse_Response.updateResponse,
    0 : MyProjectResponse_Response.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(_omitMessageNames ? '' : 'MyProjectResponse', createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4])
    ..aOM<InvalidCommandResponse>(1, _omitFieldNames ? '' : 'invalidCommandResponse', protoName: 'invalidCommandResponse', subBuilder: InvalidCommandResponse.create)
    ..aOM<HatDetailsResponse>(2, _omitFieldNames ? '' : 'hatDetailsResponse', protoName: 'hatDetailsResponse', subBuilder: HatDetailsResponse.create)
    ..aOM<FirmwareDetailsResponse>(3, _omitFieldNames ? '' : 'firmwareDetailsResponse', protoName: 'firmwareDetailsResponse', subBuilder: FirmwareDetailsResponse.create)
    ..aOM<UpdateResponse>(4, _omitFieldNames ? '' : 'updateResponse', protoName: 'updateResponse', subBuilder: UpdateResponse.create)
    ..hasRequiredFields = false
  ;

  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  MyProjectResponse clone() => MyProjectResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  MyProjectResponse copyWith(void Function(MyProjectResponse) updates) => super.copyWith((message) => updates(message as MyProjectResponse)) as MyProjectResponse;

  $pb.BuilderInfo get info_ => _i;

  @$core.pragma('dart2js:noInline')
  static MyProjectResponse create() => MyProjectResponse._();
  MyProjectResponse createEmptyInstance() => create();
  static $pb.PbList<MyProjectResponse> createRepeated() => $pb.PbList<MyProjectResponse>();
  @$core.pragma('dart2js:noInline')
  static MyProjectResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<MyProjectResponse>(create);
  static MyProjectResponse? _defaultInstance;

  MyProjectResponse_Response whichResponse() => _MyProjectResponse_ResponseByTag[$_whichOneof(0)]!;
  void clearResponse() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  InvalidCommandResponse get invalidCommandResponse => $_getN(0);
  @$pb.TagNumber(1)
  set invalidCommandResponse(InvalidCommandResponse v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasInvalidCommandResponse() => $_has(0);
  @$pb.TagNumber(1)
  void clearInvalidCommandResponse() => clearField(1);
  @$pb.TagNumber(1)
  InvalidCommandResponse ensureInvalidCommandResponse() => $_ensure(0);

  @$pb.TagNumber(2)
  HatDetailsResponse get hatDetailsResponse => $_getN(1);
  @$pb.TagNumber(2)
  set hatDetailsResponse(HatDetailsResponse v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasHatDetailsResponse() => $_has(1);
  @$pb.TagNumber(2)
  void clearHatDetailsResponse() => clearField(2);
  @$pb.TagNumber(2)
  HatDetailsResponse ensureHatDetailsResponse() => $_ensure(1);

  @$pb.TagNumber(3)
  FirmwareDetailsResponse get firmwareDetailsResponse => $_getN(2);
  @$pb.TagNumber(3)
  set firmwareDetailsResponse(FirmwareDetailsResponse v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasFirmwareDetailsResponse() => $_has(2);
  @$pb.TagNumber(3)
  void clearFirmwareDetailsResponse() => clearField(3);
  @$pb.TagNumber(3)
  FirmwareDetailsResponse ensureFirmwareDetailsResponse() => $_ensure(2);

  @$pb.TagNumber(4)
  UpdateResponse get updateResponse => $_getN(3);
  @$pb.TagNumber(4)
  set updateResponse(UpdateResponse v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasUpdateResponse() => $_has(3);
  @$pb.TagNumber(4)
  void clearUpdateResponse() => clearField(4);
  @$pb.TagNumber(4)
  UpdateResponse ensureUpdateResponse() => $_ensure(3);
}


const _omitFieldNames = $core.bool.fromEnvironment('protobuf.omit_field_names');
const _omitMessageNames = $core.bool.fromEnvironment('protobuf.omit_message_names');

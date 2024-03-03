//
//  Generated code. Do not modify.
//  source: my-project-messages.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:convert' as $convert;
import 'dart:core' as $core;
import 'dart:typed_data' as $typed_data;

@$core.Deprecated('Use updateTypeDescriptor instead')
const UpdateType$json = {
  '1': 'UpdateType',
  '2': [
    {'1': 'UpdateType_NotSet', '2': 0},
    {'1': 'UpdateType_None', '2': 1},
    {'1': 'UpdateType_Interval', '2': 2},
  ],
};

/// Descriptor for `UpdateType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List updateTypeDescriptor = $convert.base64Decode(
    'CgpVcGRhdGVUeXBlEhUKEVVwZGF0ZVR5cGVfTm90U2V0EAASEwoPVXBkYXRlVHlwZV9Ob25lEA'
    'ESFwoTVXBkYXRlVHlwZV9JbnRlcnZhbBAC');

@$core.Deprecated('Use noArgCommandsDescriptor instead')
const NoArgCommands$json = {
  '1': 'NoArgCommands',
  '2': [
    {'1': 'Nac_NotSet', '2': 0},
    {'1': 'Nac_ClearScreenToWhite', '2': 1},
    {'1': 'Nac_ClearScreenToBlack', '2': 2},
    {'1': 'Nac_GetHatDetails', '2': 3},
    {'1': 'Nac_GetFirmwareDetails', '2': 4},
    {'1': 'Nac_RestartDevice', '2': 5},
  ],
};

/// Descriptor for `NoArgCommands`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List noArgCommandsDescriptor = $convert.base64Decode(
    'Cg1Ob0FyZ0NvbW1hbmRzEg4KCk5hY19Ob3RTZXQQABIaChZOYWNfQ2xlYXJTY3JlZW5Ub1doaX'
    'RlEAESGgoWTmFjX0NsZWFyU2NyZWVuVG9CbGFjaxACEhUKEU5hY19HZXRIYXREZXRhaWxzEAMS'
    'GgoWTmFjX0dldEZpcm13YXJlRGV0YWlscxAEEhUKEU5hY19SZXN0YXJ0RGV2aWNlEAU=');

@$core.Deprecated('Use updateConfigurationDescriptor instead')
const UpdateConfiguration$json = {
  '1': 'UpdateConfiguration',
  '2': [
    {'1': 'updateType', '3': 1, '4': 1, '5': 14, '6': '.UpdateType', '10': 'updateType'},
    {'1': 'updateIntervalInMs', '3': 2, '4': 1, '5': 13, '10': 'updateIntervalInMs'},
  ],
};

/// Descriptor for `UpdateConfiguration`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateConfigurationDescriptor = $convert.base64Decode(
    'ChNVcGRhdGVDb25maWd1cmF0aW9uEisKCnVwZGF0ZVR5cGUYASABKA4yCy5VcGRhdGVUeXBlUg'
    'p1cGRhdGVUeXBlEi4KEnVwZGF0ZUludGVydmFsSW5NcxgCIAEoDVISdXBkYXRlSW50ZXJ2YWxJ'
    'bk1z');

@$core.Deprecated('Use setUpdateConfigurationDescriptor instead')
const SetUpdateConfiguration$json = {
  '1': 'SetUpdateConfiguration',
  '2': [
    {'1': 'updateConfiguration', '3': 1, '4': 1, '5': 11, '6': '.UpdateConfiguration', '10': 'updateConfiguration'},
    {'1': 'saveConfiguration', '3': 2, '4': 1, '5': 8, '10': 'saveConfiguration'},
  ],
};

/// Descriptor for `SetUpdateConfiguration`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setUpdateConfigurationDescriptor = $convert.base64Decode(
    'ChZTZXRVcGRhdGVDb25maWd1cmF0aW9uEkYKE3VwZGF0ZUNvbmZpZ3VyYXRpb24YASABKAsyFC'
    '5VcGRhdGVDb25maWd1cmF0aW9uUhN1cGRhdGVDb25maWd1cmF0aW9uEiwKEXNhdmVDb25maWd1'
    'cmF0aW9uGAIgASgIUhFzYXZlQ29uZmlndXJhdGlvbg==');

@$core.Deprecated('Use hatConfigurationDescriptor instead')
const HatConfiguration$json = {
  '1': 'HatConfiguration',
  '2': [
    {'1': 'rotateImage', '3': 1, '4': 1, '5': 8, '10': 'rotateImage'},
  ],
};

/// Descriptor for `HatConfiguration`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List hatConfigurationDescriptor = $convert.base64Decode(
    'ChBIYXRDb25maWd1cmF0aW9uEiAKC3JvdGF0ZUltYWdlGAEgASgIUgtyb3RhdGVJbWFnZQ==');

@$core.Deprecated('Use setHatConfigurationDescriptor instead')
const SetHatConfiguration$json = {
  '1': 'SetHatConfiguration',
  '2': [
    {'1': 'hatConfiguration', '3': 1, '4': 1, '5': 11, '6': '.HatConfiguration', '10': 'hatConfiguration'},
    {'1': 'saveConfiguration', '3': 2, '4': 1, '5': 8, '10': 'saveConfiguration'},
  ],
};

/// Descriptor for `SetHatConfiguration`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setHatConfigurationDescriptor = $convert.base64Decode(
    'ChNTZXRIYXRDb25maWd1cmF0aW9uEj0KEGhhdENvbmZpZ3VyYXRpb24YASABKAsyES5IYXRDb2'
    '5maWd1cmF0aW9uUhBoYXRDb25maWd1cmF0aW9uEiwKEXNhdmVDb25maWd1cmF0aW9uGAIgASgI'
    'UhFzYXZlQ29uZmlndXJhdGlvbg==');

@$core.Deprecated('Use myProjectCommandDescriptor instead')
const MyProjectCommand$json = {
  '1': 'MyProjectCommand',
  '2': [
    {'1': 'noArgCommand', '3': 1, '4': 1, '5': 14, '6': '.NoArgCommands', '9': 0, '10': 'noArgCommand'},
    {'1': 'showFileImage', '3': 2, '4': 1, '5': 9, '9': 0, '10': 'showFileImage'},
    {'1': 'setUpdateConfiguration', '3': 3, '4': 1, '5': 11, '6': '.SetUpdateConfiguration', '9': 0, '10': 'setUpdateConfiguration'},
    {'1': 'setHatConfiguration', '3': 4, '4': 1, '5': 11, '6': '.SetHatConfiguration', '9': 0, '10': 'setHatConfiguration'},
  ],
  '8': [
    {'1': 'command'},
  ],
};

/// Descriptor for `MyProjectCommand`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List myProjectCommandDescriptor = $convert.base64Decode(
    'ChBNeVByb2plY3RDb21tYW5kEjQKDG5vQXJnQ29tbWFuZBgBIAEoDjIOLk5vQXJnQ29tbWFuZH'
    'NIAFIMbm9BcmdDb21tYW5kEiYKDXNob3dGaWxlSW1hZ2UYAiABKAlIAFINc2hvd0ZpbGVJbWFn'
    'ZRJRChZzZXRVcGRhdGVDb25maWd1cmF0aW9uGAMgASgLMhcuU2V0VXBkYXRlQ29uZmlndXJhdG'
    'lvbkgAUhZzZXRVcGRhdGVDb25maWd1cmF0aW9uEkgKE3NldEhhdENvbmZpZ3VyYXRpb24YBCAB'
    'KAsyFC5TZXRIYXRDb25maWd1cmF0aW9uSABSE3NldEhhdENvbmZpZ3VyYXRpb25CCQoHY29tbW'
    'FuZA==');

@$core.Deprecated('Use invalidCommandResponseDescriptor instead')
const InvalidCommandResponse$json = {
  '1': 'InvalidCommandResponse',
  '2': [
    {'1': 'message', '3': 1, '4': 1, '5': 9, '10': 'message'},
  ],
};

/// Descriptor for `InvalidCommandResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List invalidCommandResponseDescriptor = $convert.base64Decode(
    'ChZJbnZhbGlkQ29tbWFuZFJlc3BvbnNlEhgKB21lc3NhZ2UYASABKAlSB21lc3NhZ2U=');

@$core.Deprecated('Use hatDetailsResponseDescriptor instead')
const HatDetailsResponse$json = {
  '1': 'HatDetailsResponse',
  '2': [
    {'1': 'updateConfiguration', '3': 1, '4': 1, '5': 11, '6': '.UpdateConfiguration', '10': 'updateConfiguration'},
    {'1': 'hatConfiguration', '3': 2, '4': 1, '5': 11, '6': '.HatConfiguration', '10': 'hatConfiguration'},
    {'1': 'activeImageFile', '3': 3, '4': 1, '5': 9, '10': 'activeImageFile'},
    {'1': 'activeImageLabel', '3': 4, '4': 1, '5': 9, '10': 'activeImageLabel'},
  ],
};

/// Descriptor for `HatDetailsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List hatDetailsResponseDescriptor = $convert.base64Decode(
    'ChJIYXREZXRhaWxzUmVzcG9uc2USRgoTdXBkYXRlQ29uZmlndXJhdGlvbhgBIAEoCzIULlVwZG'
    'F0ZUNvbmZpZ3VyYXRpb25SE3VwZGF0ZUNvbmZpZ3VyYXRpb24SPQoQaGF0Q29uZmlndXJhdGlv'
    'bhgCIAEoCzIRLkhhdENvbmZpZ3VyYXRpb25SEGhhdENvbmZpZ3VyYXRpb24SKAoPYWN0aXZlSW'
    '1hZ2VGaWxlGAMgASgJUg9hY3RpdmVJbWFnZUZpbGUSKgoQYWN0aXZlSW1hZ2VMYWJlbBgEIAEo'
    'CVIQYWN0aXZlSW1hZ2VMYWJlbA==');

@$core.Deprecated('Use firmwareDetailsResponseDescriptor instead')
const FirmwareDetailsResponse$json = {
  '1': 'FirmwareDetailsResponse',
  '2': [
    {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    {'1': 'buildTime', '3': 2, '4': 1, '5': 9, '10': 'buildTime'},
  ],
};

/// Descriptor for `FirmwareDetailsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List firmwareDetailsResponseDescriptor = $convert.base64Decode(
    'ChdGaXJtd2FyZURldGFpbHNSZXNwb25zZRIYCgd2ZXJzaW9uGAEgASgJUgd2ZXJzaW9uEhwKCW'
    'J1aWxkVGltZRgCIAEoCVIJYnVpbGRUaW1l');

@$core.Deprecated('Use updateResponseDescriptor instead')
const UpdateResponse$json = {
  '1': 'UpdateResponse',
  '2': [
    {'1': 'boardUptimeInMs', '3': 1, '4': 1, '5': 13, '10': 'boardUptimeInMs'},
  ],
};

/// Descriptor for `UpdateResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List updateResponseDescriptor = $convert.base64Decode(
    'Cg5VcGRhdGVSZXNwb25zZRIoCg9ib2FyZFVwdGltZUluTXMYASABKA1SD2JvYXJkVXB0aW1lSW'
    '5Ncw==');

@$core.Deprecated('Use myProjectResponseDescriptor instead')
const MyProjectResponse$json = {
  '1': 'MyProjectResponse',
  '2': [
    {'1': 'invalidCommandResponse', '3': 1, '4': 1, '5': 11, '6': '.InvalidCommandResponse', '9': 0, '10': 'invalidCommandResponse'},
    {'1': 'hatDetailsResponse', '3': 2, '4': 1, '5': 11, '6': '.HatDetailsResponse', '9': 0, '10': 'hatDetailsResponse'},
    {'1': 'firmwareDetailsResponse', '3': 3, '4': 1, '5': 11, '6': '.FirmwareDetailsResponse', '9': 0, '10': 'firmwareDetailsResponse'},
    {'1': 'updateResponse', '3': 4, '4': 1, '5': 11, '6': '.UpdateResponse', '9': 0, '10': 'updateResponse'},
  ],
  '8': [
    {'1': 'response'},
  ],
};

/// Descriptor for `MyProjectResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List myProjectResponseDescriptor = $convert.base64Decode(
    'ChFNeVByb2plY3RSZXNwb25zZRJRChZpbnZhbGlkQ29tbWFuZFJlc3BvbnNlGAEgASgLMhcuSW'
    '52YWxpZENvbW1hbmRSZXNwb25zZUgAUhZpbnZhbGlkQ29tbWFuZFJlc3BvbnNlEkUKEmhhdERl'
    'dGFpbHNSZXNwb25zZRgCIAEoCzITLkhhdERldGFpbHNSZXNwb25zZUgAUhJoYXREZXRhaWxzUm'
    'VzcG9uc2USVAoXZmlybXdhcmVEZXRhaWxzUmVzcG9uc2UYAyABKAsyGC5GaXJtd2FyZURldGFp'
    'bHNSZXNwb25zZUgAUhdmaXJtd2FyZURldGFpbHNSZXNwb25zZRI5Cg51cGRhdGVSZXNwb25zZR'
    'gEIAEoCzIPLlVwZGF0ZVJlc3BvbnNlSABSDnVwZGF0ZVJlc3BvbnNlQgoKCHJlc3BvbnNl');


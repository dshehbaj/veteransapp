#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { BackendStack } from '../lib/backend-stack';

const app = new cdk.App();

const stackNames = ['dev', 'prod'];

stackNames.forEach((stackName) => {
  new BackendStack(app, `vet-app-${stackName}`, {
    stackName: stackName,
  })
});


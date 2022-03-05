import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import CognitoUserPool from './cognito/cognito-user-pool';
import RDSDatabase from './rds/pgsql-db';

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    new CognitoUserPool(this, 'veterans-app--user-pool', props);
    new RDSDatabase(this, 'veterans-app-rds-instance', props);
  }
}


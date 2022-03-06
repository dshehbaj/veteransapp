import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import CognitoUserPool from './cognito/cognito-user-pool';
import APIGateway from './apigateway/apigateway';
import DynamoDB from './dynamodb/dynamodb';

export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const cognitoUserPool =
      new CognitoUserPool(this, 'veterans-app--user-pool', props);
    const apiGateway =
      new APIGateway(this, 'veterans-app--api-gateway', props);
    const dynamoDb =
      new DynamoDB(this, 'veterans-app--dynamodb', props);
    apiGateway.integrateCognitoUserPool(cognitoUserPool);
  }
}


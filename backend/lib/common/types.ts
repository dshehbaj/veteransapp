import { RestApi, CfnAuthorizer } from 'aws-cdk-lib/aws-apigateway';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

export interface APIGatewayProps {
  api: RestApi;
  authorizer: CfnAuthorizer;
};

export interface CognitoUserPoolProps {
  userPool: UserPool;
  userPoolClient: UserPoolClient;
};

export interface DynamoDBProps {
  table: Table;
};


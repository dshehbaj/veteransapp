import { RestApi, CfnAuthorizer } from 'aws-cdk-lib/aws-apigateway';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';

export interface APIGatewayProps {
  api: RestApi;
  authorizer: CfnAuthorizer;
};

export interface CognitoUserPoolProps {
  userPool: UserPool;
  userPoolClient: UserPoolClient;
};


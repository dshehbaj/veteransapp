import {
  RestApi,
  CfnAuthorizer,
  AuthorizationType
} from 'aws-cdk-lib/aws-apigateway';
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { APIGatewayProps } from '../common/types';
import CognitoUserPool from '../cognito/cognito-user-pool';

export default class APIGateway extends Construct implements APIGatewayProps {

  api: RestApi;
  authorizer: CfnAuthorizer;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);

    this.api = new RestApi(this, `${id}-${props.stackName}`, {
      description: 'Bench Engine API',
      deployOptions: {
        stageName: 'dev',
      },
      // 👇 enable CORS
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['http://localhost:3000'],
      },
    });

    this.authorizer = new CfnAuthorizer(this, `${id}-auth-${props.stackName}`, {
      restApiId: this.api.restApiId,
      name: 'BenchEngineAPIAuthorizer',
      type: AuthorizationType.COGNITO,
      identitySource: 'method.request.header.Authorization', // Authorization is a custom header that the client will submit
      providerArns: [], //Coginto Pool ARNs (required)
    });
  }

  integrateCognitoUserPool(userPool: CognitoUserPool) {
    this.authorizer.providerArns?.push(userPool.userPool.userPoolArn);
  }
}



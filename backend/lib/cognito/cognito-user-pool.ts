import {
  AccountRecovery,
  UserPool,
  UserPoolClient,
  UserPoolClientIdentityProvider
} from 'aws-cdk-lib/aws-cognito';
import { StackProps, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CognitoUserPoolProps } from '../common/types';

export default class CognitoUserPool extends Construct implements CognitoUserPoolProps {

  userPool: UserPool;
  userPoolClient: UserPoolClient;

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);

    const userPool = new UserPool(
      this,
      `${props.stackName}-${id}`,
      {
      userPoolName: `${props.stackName}-${id}`,
      selfSignUpEnabled: true,
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 6,
        requireLowercase: true,
        requireDigits: true,
        requireUppercase: false,
        requireSymbols: false,
      },
      accountRecovery: AccountRecovery.EMAIL_ONLY,
      removalPolicy: RemovalPolicy.DESTROY,
      }
    );

    const userPoolClient = new UserPoolClient(
      this,
      `${props.stackName}-${id}-client`,
      {
      userPool,
      authFlows: {
        adminUserPassword: true,
        custom: true,
        userSrp: true,
      },
      supportedIdentityProviders: [
        UserPoolClientIdentityProvider.COGNITO,
      ],
    });
  }
}


import * as rds from 'aws-cdk-lib/aws-rds';
import {
  Vpc,
  SecurityGroup,
  Peer,
  Port,
  InstanceType,
  InstanceClass,
  InstanceSize,
  SubnetType
} from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { StackProps, Duration, RemovalPolicy } from 'aws-cdk-lib';

export default class CdkStarterStack extends Construct {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id);

    const vpc = new Vpc(this, `${props.stackName}-${id}-vpc`);

    const rdsSecurityGroup = new SecurityGroup(
      this,
      `${props.stackName}-${id}-sg`,
      {
      vpc,
      }
    );

    rdsSecurityGroup.addIngressRule(
      Peer.anyIpv4(),
      Port.allTcp(),
    );

    const dbInstance = new rds.DatabaseInstance(
      this,
      `${props.stackName}-${id}`,
      {
      vpc,
      vpcSubnets: {
        subnetType: SubnetType.PUBLIC,
      },
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_1,
      }),
      instanceType: InstanceType.of(
        InstanceClass.BURSTABLE3,
        InstanceSize.MICRO,
      ),
      credentials: rds.Credentials.fromGeneratedSecret('postgres'),
      securityGroups: [rdsSecurityGroup],
      multiAz: false,
      allocatedStorage: 100,
      maxAllocatedStorage: 105,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: true,
      backupRetention: Duration.days(0),
      deleteAutomatedBackups: true,
      removalPolicy: RemovalPolicy.DESTROY,
      deletionProtection: false,
      databaseName: 'veteransdb',
      publiclyAccessible: true,
      }
    );
  }
}


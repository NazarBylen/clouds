resource "aws_ecs_task_definition" "ecs-task-definition" {
  family                   = "ecs-task-definition"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = 512
  memory                   = 1024
  task_role_arn            = var.role_ecsTaskExecutionRole
  execution_role_arn       = var.role_ecsTaskExecutionRole

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture        = "X86_64"
  }

  container_definitions = jsonencode([
    {
      name      = "node-js-app"
      image     = "${aws_ecr_repository.ecr-repository.repository_url}:${var.ecr_repository_tag}"
      cpu       = 512
      memory    = 1024
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
          protocol      = "tcp"
        }
      ],
      environment : [
        {
          "name" : "DATABASE_HOST",
          "value" : var.db_host
        },
        {
          "name" : "DATABASE_PORT",
          "value" : var.db_port
        },
        {
          "name" : "DATABASE_USERNAME",
          "value" : var.db_username
        },
        {
          "name" : "DATABASE_PASSWORD",
          "value" : var.db_password
        },
        {
          "name" : "DATABASE_NAME",
          "value" : var.db_name
        }
      ]
    }
  ])

  depends_on = [null_resource.docker-image-create-push-aws-ecr]
}

resource "aws_ecs_cluster" "ecs-cluster" {
  name = "ecs-cluster"
}

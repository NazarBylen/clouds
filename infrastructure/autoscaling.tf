resource "aws_appautoscaling_target" "ecs-autoscaling-target" {
  min_capacity       = 1
  max_capacity       = 5
  resource_id        = "service/${aws_ecs_cluster.ecs-cluster.name}/${aws_ecs_service.esc-service.name}"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "ecs_policy_memory" {
  name               = "ecs-policy-memory-autoscaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs-autoscaling-target.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs-autoscaling-target.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs-autoscaling-target.service_namespace

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageMemoryUtilization"
    }

    target_value = 30
  }
}

resource "aws_appautoscaling_policy" "ecs_policy_cpu" {
  name               = "ecs-policy-cpu-autoscaling"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.ecs-autoscaling-target.resource_id
  scalable_dimension = aws_appautoscaling_target.ecs-autoscaling-target.scalable_dimension
  service_namespace  = aws_appautoscaling_target.ecs-autoscaling-target.service_namespace

  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }

    target_value = 30
  }
}

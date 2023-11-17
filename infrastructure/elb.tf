resource "aws_lb" "ecs-elb" {
  name               = "ecs-elb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.security-group.id]
  subnets            = [aws_subnet.subnet.id, aws_subnet.subnet2.id, aws_subnet.subnet3.id]

  tags = {
    Name = "ecs-elb"
  }

  depends_on = [aws_security_group.security-group]
}

resource "aws_lb_target_group" "ecs-tg" {
  name        = "ecs-target-group"
  port        = 3000
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = aws_vpc.vpc-main.id

  health_check {
    path = var.api_healthcheck
  }

  depends_on = [aws_lb.ecs-elb]
}

resource "aws_lb_listener" "ecs_alb_listener" {
  load_balancer_arn = aws_lb.ecs-elb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.ecs-tg.arn
  }
}

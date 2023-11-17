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

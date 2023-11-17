resource "aws_vpc" "vpc-main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  tags = {
    name = "vpc-main"
  }
}

resource "aws_subnet" "subnet" {
  vpc_id                  = aws_vpc.vpc-main.id
  cidr_block              = cidrsubnet(aws_vpc.vpc-main.cidr_block, 8, 1)
  map_public_ip_on_launch = true
  availability_zone       = "eu-central-1a"
}

resource "aws_subnet" "subnet2" {
  vpc_id                  = aws_vpc.vpc-main.id
  cidr_block              = cidrsubnet(aws_vpc.vpc-main.cidr_block, 8, 2)
  map_public_ip_on_launch = true
  availability_zone       = "eu-central-1b"
}

resource "aws_subnet" "subnet3" {
  vpc_id                  = aws_vpc.vpc-main.id
  cidr_block              = cidrsubnet(aws_vpc.vpc-main.cidr_block, 8, 3)
  map_public_ip_on_launch = true
  availability_zone       = "eu-central-1c"
}

resource "aws_internet_gateway" "internet-gateway" {
  vpc_id = aws_vpc.vpc-main.id
  tags = {
    Name = "internet-gateway"
  }
}

resource "aws_route_table" "route-table" {
  vpc_id = aws_vpc.vpc-main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet-gateway.id
  }
}

resource "aws_route_table_association" "subnet-route" {
  subnet_id      = aws_subnet.subnet.id
  route_table_id = aws_route_table.route-table.id
}

resource "aws_route_table_association" "subnet2-route" {
  subnet_id      = aws_subnet.subnet2.id
  route_table_id = aws_route_table.route-table.id
}

resource "aws_route_table_association" "subnet3-route" {
  subnet_id      = aws_subnet.subnet3.id
  route_table_id = aws_route_table.route-table.id
}

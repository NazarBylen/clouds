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

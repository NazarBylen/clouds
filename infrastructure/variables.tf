variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "aws_access_key" {
  type = string
}

variable "aws_secret_key" {
  type = string
}

variable "vpc_cidr" {
  description = "CIDR block for main"
  type        = string
  default     = "10.0.0.0/16"
}

variable "api_healthcheck" {
  description = "API Healthcheck URL"
  type        = string
  default     = "/api"
}

variable "ecr_repository" {
  description = "ECR Repository name"
  type        = string
  default     = "tr-nodejs-app"
}

variable "ecr_repository_tag" {
  description = "ECR Repository tag"
  type        = string
  default     = "latest"
}

variable "role_ecsTaskExecutionRole" {
  description = "Amazon ECS Task Execution Role"
  type        = string
  default     = "arn:aws:iam::882415107630:role/ecsTaskExecutionRole"
}

variable "db_host" {
  description = "DB Host"
  type        = string
}

variable "db_port" {
  description = "DB Port"
  type        = string
}

variable "db_username" {
  description = "DB Username"
  type        = string
}

variable "db_password" {
  description = "DB Password"
  type        = string
}

variable "db_name" {
  description = "DB Name"
  type        = string
}

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

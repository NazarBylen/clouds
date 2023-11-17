resource "aws_ecr_repository" "ecr-repository" {
  force_delete = true
  name                 = var.ecr_repository
  image_tag_mutability = "MUTABLE"

}

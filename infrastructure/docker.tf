resource "null_resource" "docker-image-create-push-aws-ecr" {

  provisioner "local-exec" {
    command = <<-EOF
      aws ecr get-login-password --region ${var.aws_region} | docker login --username AWS --password-stdin ${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.aws_region}.amazonaws.com
    EOF
  }

  provisioner "local-exec" {
    command = <<-EOF
      docker build -t ${aws_ecr_repository.ecr-repository.repository_url}:${var.ecr_repository_tag} -f ../app/Dockerfile ../app
    EOF
  }

  provisioner "local-exec" {
    command = <<-EOF
      docker push ${aws_ecr_repository.ecr-repository.repository_url}:${var.ecr_repository_tag}
    EOF
  }

  triggers = {
    run_at = timestamp()
  }

  depends_on = [
    aws_ecr_repository.ecr-repository,
  ]
}

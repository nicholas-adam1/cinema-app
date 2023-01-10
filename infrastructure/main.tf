provider "aws" {
  region = "us-east-1"
}

terraform {
  backend "s3" {
    bucket  = "na-app-cinema-tf-state"
    key     = "na-app-cinema.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Nick Adam"
  }
}


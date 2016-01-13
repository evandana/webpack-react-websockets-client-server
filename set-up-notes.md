#Set up notes

# Initially tried docker
Then realized that was a bit more complex than I wanted to start with

Set up AWS Docker
https://console.aws.amazon.com/ecs/home?region=us-east-1#/firstRun

## Install AWS
http://docs.aws.amazon.com/cli/latest/userguide/installing.html

To solve issues on El Capitan with Python:
`sudo pip install awscli --ignore-installed`

## Install Docker
https://docs.docker.com/engine/installation/mac/

# Simpler EC2 setup
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html

Update Yum
`sudo yum update -y`

Install apache
`sudo yum install -y httpd24`

Start Web Server
`sudo service httpd start`

Start Web Server at system boot
`sudo chkconfig httpd on`

Public IP
54.172.233.83

Doc root
`/var/www/html`

# Install Jenkins

Set up
http://sanketdangi.com/post/62715793234/install-configure-jenkins-on-amazon-linux

Hook up to Github
http://sanketdangi.com/post/62740311628/integrate-jenkins-github-trigger-build-process
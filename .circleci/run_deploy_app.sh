#!/usr/bin/env python

import os

branch_name = os.environ['CIRCLE_BRANCH']

if "master" in branch_name:
  print "We are deploying the branch called {0}".format(branch_name)

  command = "git push --force git@heroku.com:$HEROKU_APP_NAME.git HEAD:refs/heads/master"

  command_output = os.system(command)

  print "### Command output: {0}".format(command_output)

  if command_output != 0:
    raise Exception("Command fail")

  print "Deploy completed."

else:
  print "Deploy skipped"

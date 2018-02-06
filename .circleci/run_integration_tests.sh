#!/usr/bin/env python

import os

branch_name = os.environ['CIRCLE_BRANCH']

if "master" in branch_name:
  print "Run Integration tests for Release Candidate - Branch name: {0}".format(branch_name)
  command_output = os.system("node  /tmp/circleci-tools/test-utils/run_ghostinspector_test.js")
  print "### Command output: {0}".format(command_output)

  if command_output != 0:
    raise Exception("Command fail")
else:
  print "Integration tests skipped"

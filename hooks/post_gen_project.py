# -*- coding: utf-8 -*-
import os

os.system('cp .env.example .env')
os.system('npm install')
print('run `npm run deps` to check for dependency updates')

# -*- coding: utf-8 -*-
import os

os.system('cp .env.example .env')
os.system('yarn install')
os.system('git init')
os.system('git add .')
os.system('git commit -m "Setup project" -m "using https://github.com/developmentseed/cookiecutter-react-mapboxgl"')

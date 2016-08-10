#!/bin/bash

sass --watch inc/scss:inc/css &

subl index.html
subl inc/scss/index.scss
subl inc/js/index.js

subl development.html
subl inc/scss/development.scss

subl examples.html
subl inc/scss/examples.scss
'use strict';
const assert = require('assert');
const sass = require('node-sass');
const path = require('path');
const { runGulp, distScssPath, render } = require('./util');

const includePath = path.resolve(
  path.join(
    __dirname,
    '../../src/stylesheets'
  )
);

describe('include paths', function () {

  it('can be loaded with @import "nasawds"', function () {
    return render('@import "nasawds";', [ includePath ]);
  });

});

describe('standalone dist scss', function () {

  before(function () {
    this.timeout(20000);
    return runGulp('copy-dist-sass');
  });

  it('can be loaded with @import "nasawds"', function () {
    return render('@import "nasawds";', [ distScssPath ]);
  });

});

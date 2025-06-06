/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

jest.disableAutomock();

const {create} = require('../../../jest/renderer');
const View = require('../../Components/View/View').default;
const Image = require('../Image').default;
const React = require('react');

it('renders assets based on relative path', async () => {
  expect(
    await create(
      <View>
        <Image source={require('./img/img1.png')} />
        <Image source={require('./img/img2.png')} />
      </View>,
    ),
  ).toMatchSnapshot();
});

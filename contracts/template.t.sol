// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.6;

import "ds-test/test.sol";

import "./Template.sol";

contract TemplateTest is DSTest {
    Template template;

    event logSuccess(string message);
    
    function setUp() public {
        template = new Template();
    }

    function test_success() public {
        emit logSuccess("Success");
    }
}

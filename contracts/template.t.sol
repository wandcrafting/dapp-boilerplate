// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.6;

import "ds-test/test.sol";

import "./template.sol";

contract templateTest is DSTest {
    Template template;

    function setUp() public {
        template = new Template();
    }
}

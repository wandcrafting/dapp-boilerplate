// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.6;

import "ds-test/test.sol";

import "./DappPrototypesBoilerplate.sol";

contract DappPrototypesBoilerplateTest is DSTest {
    DappPrototypesBoilerplate boilerplate;

    function setUp() public {
        boilerplate = new DappPrototypesBoilerplate();
    }

    function testFail_basic_sanity() public {
        assertTrue(false);
    }

    function test_basic_sanity() public {
        assertTrue(true);
    }
}

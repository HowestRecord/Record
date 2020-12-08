const { ethers } = require('hardhat');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { accounts } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

before(async () => {
  const [signer] = await ethers.getSigners();
  this.Record = await ethers.getContractFactory('Record');
  this.accounts = {
    administrator: signer.address,
    owner1: accounts[0],
  };
});

beforeEach(async () => {
  this.record = await this.Record.deploy('URI{id}');
  await this.record.deployed();
  await this.record.mintAsset('Asset1');
});

describe('Record', () => {
  it('Should return the Uri', async () => {
    expect(await this.record.uri(1)).to.equal('URI{id}');
  });

  it('Should return balance 1000 for new minted asset token', async () => {
    expect(
      await this.record.balanceOf(this.accounts.administrator, 1)
    ).to.equal(1000);
  });

  it('Should return balance 1000 for another new minted asset token', async () => {
    await this.record.mintAsset('Asset2');

    expect(
      await this.record.balanceOf(this.accounts.administrator, 2)
    ).to.equal(1000);
  });

  it('Should revert when token allready minted!', async () => {
    await expectRevert(
      this.record.mintAsset('Asset1'),
      'Asset with with DID is allready minted!'
    );
  });

  it('Should transfer 100 asset shares from administrator to owner1!', async () => {
    await this.record.safeTransferFrom(
      this.accounts.administrator,
      this.accounts.owner1,
      1,
      100,
      []
    );

    expect(
      await this.record.balanceOf(this.accounts.administrator, 1)
    ).to.equal(900);
    expect(await this.record.balanceOf(this.accounts.owner1, 1)).to.equal(100);
  });

  it('Should revert sending 1001 asset shares from administrator to owner1 with balance of 1000!', async () => {
    await expectRevert(
      this.record.safeTransferFrom(
        this.accounts.administrator,
        this.accounts.owner1,
        1,
        1001,
        []
      ),
      'ERC1155: insufficient balance for transfer'
    );
  });

  it('Should get tokenId 1 for Asset1 !', async () => {
    expect(await this.record.getAssetTokenIdForAsset('Asset1')).to.equal(1);
  });
});

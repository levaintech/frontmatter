import { expect, it } from '@jest/globals';

import { getFrontmatterContent, getFrontmatterIndexArray, getInstalledFrontmatterCollection } from './index';

it('should getFrontmatterCollection of eip155:1/erc20', async () => {
  const collection = await getFrontmatterIndexArray('eip155:1', 'erc20');
  expect(collection).toStrictEqual(
    expect.arrayContaining([
      expect.objectContaining({
        type: 'Frontmatter',
        path: 'eip155:1/erc20:0x00000000008943c65cAf789FFFCF953bE156f6f8',
        fields: expect.any(Object),
      }),
    ]),
  );
});

it('should getFrontmatterContent of eip155:1/erc20:0x00000000008943c65cAf789FFFCF953bE156f6f8', async () => {
  const frontmatterContent = await getFrontmatterContent('eip155:1/erc20:0x00000000008943c65cAf789FFFCF953bE156f6f8');
  expect(frontmatterContent).toStrictEqual({
    fileId: expect.stringMatching(/[0-f]{64}/),
    type: 'Frontmatter',
    path: 'eip155:1/erc20:0x00000000008943c65cAf789FFFCF953bE156f6f8',
    modifiedDate: expect.any(Number),
    fields: {
      caip2: 'eip155:1',
      namespace: 'erc20',
      title: 'Dharma USD Coin',
      symbol: 'dUSDC',
      decimals: 8,
      links: [
        {
          name: 'explorer',
          url: 'https://etherscan.io/token/0x00000000008943c65cAf789FFFCF953bE156f6f8',
        },
      ],
      images: [
        {
          type: 'logo',
          mine: 'image/png',
          size: {
            width: 512,
            height: 512,
          },
          path: expect.stringMatching(/[0-9a-f]{64}\.png/),
        },
      ],
    },
    html: '<h1>Dharma USD Coin</h1>',
  });
});

it('should getFrontmatterContent of eip155:1/erc20:0', async () => {
  const frontmatterContent = await getFrontmatterContent('eip155:1/erc20:0');
  expect(frontmatterContent).toBeUndefined();
});

it('should getInstalledFrontmatterCollection()', async () => {
  const collections = await getInstalledFrontmatterCollection();
  expect(collections).toStrictEqual([
    {
      caip2: 'eip155:1',
      name: '@crypto-frontmatter/eip155-1-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:10',
      name: '@crypto-frontmatter/eip155-10-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:1313161554',
      name: '@crypto-frontmatter/eip155-1313161554-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:137',
      name: '@crypto-frontmatter/eip155-137-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:42161',
      name: '@crypto-frontmatter/eip155-42161-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:42220',
      name: '@crypto-frontmatter/eip155-42220-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:43114',
      name: '@crypto-frontmatter/eip155-43114-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:56',
      name: '@crypto-frontmatter/eip155-56-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'eip155:8453',
      name: '@crypto-frontmatter/eip155-8453-erc20',
      namespace: 'erc20',
    },
    {
      caip2: 'tip474:728126428',
      name: '@crypto-frontmatter/tip474-728126428-trc10',
      namespace: 'trc10',
    },
    {
      caip2: 'tip474:728126428',
      name: '@crypto-frontmatter/tip474-728126428-trc20',
      namespace: 'trc20',
    },
  ]);
});

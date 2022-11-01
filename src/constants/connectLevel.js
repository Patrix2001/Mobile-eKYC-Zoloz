const connnectLevel = [
  {
    name: 'CONNECT0001',
    description: `It has basic liveness detection ability. The UI doesn't require user to jump to a new page, which makes less user drop off. So it is usually used in the scenarios which require high pass rate.`,
  },
  {
    name: 'CONNECT0002',
    description:
      'This level has basic anti-spoofing ability. The ZOLOZ SDK performs anti-spoofing check with the blink detection method.',
  },
  {
    name: 'CONNECT0003',
    description:
      'This level has advanced anti-spoofing ability. The ZOLOZ SDK performs anti-spoofing check with the multi action detection method.',
  },
];

export default connnectLevel;

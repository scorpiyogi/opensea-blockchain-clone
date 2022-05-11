import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5bjmviy2',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk0QBzRCnPKav5tuPFob8NVvXPlq2vFRZyrItW9pEblzs1dIlaieCK4f5dfUMrttuxObiYbIYq0XWtt49sdEBDqVbdntaokoQj0rwe49wd1c6qIHdWArZf1BIndyMJKePrZGxrsbAV7ZKNLHlvYo0KHnxymLJWzYCpG8izFX2g2JDkToO6g8',
  useCdn: false,
})

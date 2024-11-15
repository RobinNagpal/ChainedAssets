import createMDX from '@next/mdx'

// next.config.js
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        domains: ['cdn.brandfetch.io', 'cdn.builder.io','*' ,'tailwindui.com', 'd31h13bdjwgzxs.cloudfront.net'],
    }

};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)

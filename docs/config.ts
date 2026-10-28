import { type DefaultTheme } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'en-US',
  title: 'Absensi',
  description: 'Product Requirement Document',
  cleanUrls: true,
  srcDir: './src',
  ignoreDeadLinks: true, // Temporary
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    ['link', { rel: 'stylesheet', href: 'https://assets.pointhub.net/assets/fontawesome-6/css/all.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/': { base: '', items: sidebarDocs() },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub/absensi-docs' }],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Pointhub',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Sitemap', link: '/sitemap' },
      ],
    },
    {
      text: 'Features',
      items: [
        {
          text: 'Auth', 
          collapsed: true,
          items: [
            { text: 'About', link: '/auth/about' },
            { text: 'Schema', link: '/auth/schema' },
            { text: 'Signup', link: '/auth/signup' },
            { text: 'Verify Email', link: '/auth/verify-email' },
            { text: 'Signin', link: '/auth/signin' },
            { text: 'Signout', link: '/auth/signout' },
            { text: 'Forgot Password', link: '/auth/forgot-password' },
            { text: 'Reset Password', link: '/auth/reset-password' },
          ],
        },
        {
          text: 'My Account',
          collapsed: true,
          items: [
            { text: 'About', link: '/my-account/about' },
            { text: 'Update Username', link: '/my-account/update-username' },
            { text: 'Update Email', link: '/my-account/update-email' },
            { text: 'Update Password', link: '/my-account/update-password' },
            { text: 'Update Profile', link: '/my-account/update-profile' },
          ],
        },
        {
          text: 'Groups',
          collapsed: true,
          items: [
            { text: 'About', link: '/groups/about' },
            { text: 'Schema', link: '/groups/schema' },
            { text: 'Create', link: '/groups/create' },
            { text: 'List', link: '/groups/list' },
            { text: 'Read', link: '/groups/read' },
            { text: 'Update', link: '/groups/update' },
            { text: 'Delete', link: '/groups/delete' },
            { text: 'Invite User', link: '/groups/invite-user' },
            { text: 'Accept Invitation', link: '/groups/accept-invitation' },
            { text: 'Reject Invitation', link: '/groups/reject-invitation' },
            { text: 'Remove User', link: '/groups/remove-user' },
          ],
        },
        {
          text: 'Attendances',
          collapsed: true,
          items: [
            { text: 'About', link: '/attendances/about' },
            { text: 'Schema', link: '/attendances/schema' },
            { text: 'Check In', link: '/attendances/check-in' },
            { text: 'Check Out', link: '/attendances/check-out' },
            { text: 'Break Start', link: '/attendances/break-start' },
            { text: 'Break End', link: '/attendances/break-end' },
          ],
        },
        {
          text: 'Workhour Report',
          collapsed: true,
          items: [
            { text: 'About', link: '/workhour-report/about' },
            { text: 'Read', link: '/workhour-report/read' },
            { text: 'Export', link: '/workhour-report/export' },
          ],
        },
        {
          text: 'Attendance Report',
          collapsed: true,
          items: [
            { text: 'About', link: '/attendance-report/about' },
            { text: 'Read', link: '/attendance-report/read' },
            { text: 'Export', link: '/attendance-report/export' },
          ],
        },
      ],
    },
    {
      text: 'Resources',
      items: [
        { text: 'Architecture Decision Records', link: '/architecture-decision-records/' },
        { text: 'Development Roadmap', link: '/development-roadmap/' },
        { text: 'Developer Resources', link: '/developer-resources/' },
      ],
    },
  ]
}

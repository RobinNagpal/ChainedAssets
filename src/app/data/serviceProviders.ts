export const serviceProviders = [
  {
    id: 'sp1',
    name: "John's Plumbing",
    categories: ['plumbing', 'carpentry'],
    projects: [
      {
        category: 'plumbing',
        projects: ['proj1', 'proj2'],
      },
      {
        category: 'carpentry',
        projects: ['proj3'],
      },
    ],
  },
  {
    id: 'sp2',
    name: 'Electric Solutions',
    categories: ['plumbing', 'electrical'],
    projects: [
      {
        category: 'plumbing',
        projects: ['proj2'],
      },
      {
        category: 'electrical',
        projects: ['proj1', 'proj4'],
      },
    ],
  },
  {
    id: 'sp3',
    name: 'Master Builders',
    categories: ['electrical', 'carpentry'],
    projects: [
      {
        category: 'electrical',
        projects: ['proj5'],
      },
      {
        category: 'carpentry',
        projects: ['proj3', 'proj4'],
      },
    ],
  },
]

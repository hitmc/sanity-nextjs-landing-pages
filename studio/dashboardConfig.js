export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8e7c19983fd993c1524e9a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6egi8w3v',
                  apiId: '63bcfafb-a2be-4a0b-97e9-e19f49be504e'
                },
                {
                  buildHookId: '5d8e7c192bc547559375a799',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7qeeqtyk',
                  apiId: 'b96f1893-41e5-4619-99f8-b3748ee94986'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hitmc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7qeeqtyk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

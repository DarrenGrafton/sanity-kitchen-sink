export default {
  widgets: [
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
                  buildHookId: '60138ff938978f6018aae39b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ymtztwdt',
                  apiId: 'e7ecf462-60af-4227-839d-035090844a9f'
                },
                {
                  buildHookId: '60138ff958560f5cff714e04',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a21bs7kx',
                  apiId: '75ab46d4-8705-4cc3-ab50-89a1f4d33de1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DarrenGrafton/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a21bs7kx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

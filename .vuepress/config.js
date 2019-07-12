import CMS from 'netlify-cms'
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('vuepress-project', Vuepress-project)

module.exports = {

   title: 'Teach English',

   description: 'Уроци по английски за преподаватели',

   themeConfig: {

       nav: [
         { text: 'Начало', link: '/' },
		 { text: 'За мен', link: '/about/' },
         { text: 'Уроци', link: '/lessons/' },
         { text: 'Категории', link: '/categories/' }
       ],
	   
	 /*  
    sidebar: {
      '/lessons/': [
        '',     
        'first-lesson',
        'second-lesson' 
      ],

      '/': [
        ['/', 'Начало'],
	      ['/about/', 'За мен'],
	      ['/lessons/', 'Уроци']
      ]
   } */

   }
}